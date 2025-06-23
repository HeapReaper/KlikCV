import type { HttpContext } from '@adonisjs/core/http'
import puppeteer, {Browser} from 'puppeteer'
import fs from 'fs/promises'
import { DateTime } from 'luxon'

export default class CvsController {
  public async index({ view }: HttpContext) {
    return view.render('pages/home');
  }

  public async create({ view }: HttpContext) {
    return view.render('pages/create');
  }

  public async generate({ request, response, view }: HttpContext) {
    const selectedTemplate = request.input('template')
    let photoBase64 = null
    let contentType = 'image/jpeg'

    const toArray = (value: any) => (Array.isArray(value) ? value : value ? [value] : [])

    let firstName = request.input('first_name')
    let lastName = request.input('last_name')
    let birthdate = DateTime.fromISO(request.input('birthdate')).toFormat('dd-MM-yyyy')
    let city = request.input('city')
    let phone = request.input('phone')
    let email = request.input('email')
    let jobTitle = request.input('job_title')
    let profile = request.input('profile')
    let profilePicture = request.file('photo')

    let hobbyNames = toArray(request.input('hobby'));
    let hobbyDescriptions = toArray(request.input('hobby_description'));

    let positions = toArray(request.input('position')) ?? []
    let companies = toArray(request.input('company')) ?? []
    let locations = toArray(request.input('location')) ?? []
    let startDates = toArray(request.input('start_date')) ?? []
    let endDates = toArray(request.input('end_date')) ?? []
    let descriptions = toArray(request.input('description')) ?? []

    let degrees = toArray(request.input('degree')) ?? []
    let institutions = toArray(request.input('institution')) ?? []
    let locationEdus = toArray(request.input('location_edu')) ?? []
    let startDateEdus = toArray(request.input('start_date_edu')) ?? []
    let endDateEdus = toArray(request.input('end_date_edu')) ?? []
    let descriptionEdus = toArray(request.input('description_edu')) ?? []

    let skills = toArray(request.input('skill')) ?? []
    let skillLevels = toArray(request.input('skill_level')) ?? []

    let linkedIn = request.input('linkedIn')

    let template = ''
    switch (selectedTemplate) {
      case '1':
        template = 'cv_template_1'
        break
      case '2':
        template = 'cv_template_2'
        break
      case '3':
        template = 'cv_template_3'
        break
      default:
        return 'Not found!' // TODO do decent error codes
    }

    if (profilePicture && profilePicture.headers && profilePicture.headers['content-type']) {
      contentType = profilePicture.headers['content-type']
    }

    if (profilePicture && profilePicture.tmpPath) {
      const fileData = await fs.readFile(profilePicture.tmpPath)
      photoBase64 = fileData.toString('base64')
    }

    const hobbies = hobbyNames
      .map((name, index) => ({
        name: name ? name.trim() : '',
        description: hobbyDescriptions[index] ? hobbyDescriptions[index].trim() : '',
      }))
      .filter(hobby => hobby.name !== '');

    const workExperiences = positions.map((_, index) => ({
      position: positions[index],
      company: companies[index],
      location: locations[index],
      start_date: startDates[index],
      end_date: endDates[index],
      description: descriptions[index],
    }))

    const educations = degrees.map((_, index) => ({
      degree: degrees[index],
      institution: institutions[index],
      location: locationEdus[index],
      start_date: startDateEdus[index],
      end_date: endDateEdus[index],
      description: descriptionEdus[index],
    }))

    const skillSet = skills.map((name, index) => ({
      name,
      level: skillLevels[index],
    }))

    const html = await view.render(`pages/templates/${template}`, {
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      city: city,
      phone: phone,
      profilePicture: photoBase64 ? `data:${contentType};base64,${photoBase64}` : null,
      email: email,
      jobTitle: jobTitle,
      profile: profile,
      hobbies: hobbies,
      workExperiences: workExperiences,
      educations: educations,
      skillSet: skillSet,
      linkedIn: linkedIn,
    })

    const browser: Browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    await page.setContent(html, { waitUntil: 'networkidle0' })

    const pdfBuffer = await page.pdf({ format: 'A4' })

    await browser.close()

    response.header('Content-Type', 'application/pdf')
    response.header('Content-Disposition', `inline; filename="${firstName}_${lastName}.pdf"`)

    return response.send(pdfBuffer)
  }

  public async preview({ view, params }: HttpContext) {
    const templateId = params.templateId

    let template = ''
    switch (templateId) {
      case '1':
        template = 'cv_template_1'
        break
      case '2':
        template = 'cv_template_2'
        break
      case '3':
        template = 'cv_template_3'
        break
      default:
        return 'Not found!' // TODO do decent error codes
    }

    const demoData = await this.demoData()

    const hobbies = demoData.hobbyNames.map((name: any, index: number) => ({
      name: name.trim(),
      description: demoData.hobbyDescriptions[index]?.trim() || '',
    }))

    const workExperiences = demoData.positions.map((_, i) => ({
      position: demoData.positions[i],
      company: demoData.companies[i],
      location: demoData.locations[i],
      start_date: demoData.startDates[i],
      end_date: demoData.endDates[i],
      description: demoData.descriptions[i],
    }))

    const educations = demoData.degrees.map((_, i) => ({
      degree: demoData.degrees[i],
      institution: demoData.institutions[i],
      location: demoData.locationEdus[i],
      start_date: demoData.startDateEdus[i],
      end_date: demoData.endDateEdus[i],
      description: demoData.descriptionEdus[i],
    }))

    const skillSet = demoData.skills.map((name, i) => ({
      name,
      level: demoData.skillLevels[i],
    }))

    return await view.render(`pages/templates/${template}`, {
      firstName: demoData.firstName,
      lastName: demoData.lastName,
      birthdate: DateTime.fromISO(demoData.birthdate).toFormat('dd-MM-yyyy'),
      city: demoData.city,
      phone: demoData.phone,
      email: demoData.email,
      jobTitle: demoData.jobTitle,
      profile: demoData.profile,
      linkedIn: demoData.linkedIn,
      profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
      hobbies: hobbies,
      workExperiences,
      educations,
      skillSet,
    })
  }

  demoData() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      birthdate: '1990-12-31',
      city: 'Amsterdam',
      phone: '+31 6 12345678',
      email: 'john.doe@example.com',
      jobTitle: 'Software Engineer',
      profile: 'Passionate developer with 10+ years of experience in web development.',
      linkedIn: 'https://nl.linkedin.com/idk',
      hobbyNames: ['RC'],
      hobbyDescriptions: ['Flying RC planes'],
      positions: ['Frontend Developer'],
      companies: ['Tech Corp'],
      locations: ['Amsterdam'],
      startDates: ['2020-01'],
      endDates: ['2023-06'],
      descriptions: ['- Worked on frontend features and improved performance.'],

      degrees: ['BSc Computer Science'],
      institutions: ['University of Amsterdam'],
      locationEdus: ['Amsterdam'],
      startDateEdus: ['2010-09'],
      endDateEdus: ['2014-06'],
      descriptionEdus: ['Studied algorithms, data structures, and web technologies.'],

      skills: ['JavaScript', 'TypeScript', 'PHP'],
      skillLevels: [3, 1, 4],
    }
  }
}
