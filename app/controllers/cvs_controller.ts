import type { HttpContext } from '@adonisjs/core/http'
import puppeteer from 'puppeteer'
import fs from 'fs/promises'

export default class CvsController {
  public async show({ view }: HttpContext) {
    return view.render('pages/new');
  }

  public async generate({ request, response, view }: HttpContext) {
    let photoBase64 = null
    console.log('RAW request all:', request.all())
    const toArray = (value: any) => (Array.isArray(value) ? value : value ? [value] : [])

    const firstName = request.input('first_name')
    const lastName = request.input('last_name')
    const email = request.input('email')
    const jobTitle = request.input('job_title')
    const profile = request.input('profile')
    const profilePicture = request.file('photo')

    const positions = toArray(request.input('position')) ?? []
    const companies = toArray(request.input('company')) ?? []
    const locations = toArray(request.input('location')) ?? []
    const startDates = toArray(request.input('start_date')) ?? []
    const endDates = toArray(request.input('end_date')) ?? []
    const descriptions = toArray(request.input('description')) ?? []

    const degrees = toArray(request.input('degree')) ?? []
    const institutions = toArray(request.input('institution')) ?? []
    const locationEdus = toArray(request.input('location_edu')) ?? []
    const startDateEdus = toArray(request.input('start_date_edu')) ?? []
    const endDateEdus = toArray(request.input('end_date_edu')) ?? []
    const descriptionEdus = toArray(request.input('description_edu')) ?? []

    const skills = toArray(request.input('skill')) ?? []
    const skillLevels = toArray(request.input('skill_level')) ?? []

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
      profilePicture: photoBase64 ? `data:${profilePicture.headers['content-type']};base64,${photoBase64}` : null,
      email: email,
      jobTitle: jobTitle,
      profile: profile,
      workExperience: workExperiences,
      educations: educations,
      skillSet: skillSet
    })

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setContent(html, { waitUntil: 'networkidle0' })

    const pdfBuffer = await page.pdf({ format: 'A4' })

    await browser.close()

    response.header('Content-Type', 'application/pdf')
    response.header('Content-Disposition', `inline; filename="${firstName}_${lastName}.pdf"`)

    return response.send(pdfBuffer)
  }
}
