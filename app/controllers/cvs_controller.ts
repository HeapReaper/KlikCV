import type { HttpContext } from '@adonisjs/core/http'

export default class CvsController {
  public async show({ view }: HttpContext) {
    return view.render('pages/new');
  }

  public async generate({ request, view }: HttpContext) {
    const data = request.all()

    return view.render('pages/cv_template_1', {
      name: data.name,
      jobTitle: data.job_title,
      aboutMe: data.about_me,
    })
  }
}
