import type { HttpContext } from '@adonisjs/core/http'
import puppeteer, {Browser} from 'puppeteer'
import fs from 'fs/promises'
import env from '#start/env'

export default class CvsController {
  public async show({ view }: HttpContext) {
    return view.render('pages/new');
  }

  public async generate({ request, response, view }: HttpContext) {
    let photoBase64 = null
    let contentType = 'image/jpeg'

    const toArray = (value: any) => (Array.isArray(value) ? value : value ? [value] : [])

    let firstName = request.input('first_name')
    let lastName = request.input('last_name')
    let birthdate = request.input('birthdate')
    let city = request.input('city')
    let phone = request.input('phone')
    let email = request.input('email')
    let jobTitle = request.input('job_title')
    let profile = request.input('profile')
    let profilePicture = request.file('photo')

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

    if (profilePicture && profilePicture.headers && profilePicture.headers['content-type']) {
      contentType = profilePicture.headers['content-type']
    }

    if (profilePicture && profilePicture.tmpPath) {
      const fileData = await fs.readFile(profilePicture.tmpPath)
      photoBase64 = fileData.toString('base64')
    }

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

    const html = await view.render(`pages/templates/cv_template_1`, {
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      city: city,
      phone: phone,
      profilePicture: photoBase64 ? `data:${contentType};base64,${photoBase64}` : null,
      email: email,
      jobTitle: jobTitle,
      profile: profile,
      workExperience: workExperiences,
      educations: educations,
      skillSet: skillSet
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
      default:
        return 'Not found!' // TODO do decent error codes
    }

    console.log(template)
    const demoData = await this.demoData()

    const workExperience = demoData.positions.map((_, i) => ({
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

    const html = await view.render(`pages/templates/${template}`, {
      firstName: demoData.firstName,
      lastName: demoData.lastName,
      birthdate: demoData.birthdate,
      city: demoData.city,
      phone: demoData.phone,
      email: demoData.email,
      jobTitle: demoData.jobTitle,
      profile: demoData.profile,
      profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
      workExperience,
      educations,
      skillSet,
    })

    return html
  }

  demoData() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      birthdate: '1990-01-01',
      city: 'Amsterdam',
      phone: '+31 6 12345678',
      email: 'john.doe@example.com',
      jobTitle: 'Software Engineer',
      profile: 'Passionate developer with 10+ years of experience in web development.',

      positions: ['Frontend Developer'],
      companies: ['Tech Corp'],
      locations: ['Amsterdam'],
      startDates: ['2020-01'],
      endDates: ['2023-06'],
      descriptions: ['Worked on frontend features and improved performance.'],

      degrees: ['BSc Computer Science'],
      institutions: ['University of Amsterdam'],
      locationEdus: ['Amsterdam'],
      startDateEdus: ['2010-09'],
      endDateEdus: ['2014-06'],
      descriptionEdus: ['Studied algorithms, data structures, and web technologies.'],

      skills: ['JavaScript', 'TypeScript', 'Vue.js'],
      skillLevels: [3, 1, 4],
    }
  }

}
