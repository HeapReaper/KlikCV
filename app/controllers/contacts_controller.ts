import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import mail from '@adonisjs/mail/services/main'
import { contactFormValidator } from '#validators/contact_form';

export default class ContactsController {
  public async index({ view }: HttpContext) {
    return view.render('pages/contact')
  }

  public async submit({ request, response, session }: HttpContext) {
    await request.validateUsing(contactFormValidator)

    try {
      await mail.send((message) => {
        message
          .to(env.get('CONTACT_FORM_RECIEVER') ?? '')
          .from(env.get('SMTP_USERNAME') ?? '')
          .subject('New contact form submit from KlikCV')
          .htmlView('emails/new_contact_reciever', {
            name: request.input('name'),
            email: request.input('email'),
            subject: request.input('subject'),
            message: request.input('message'),
          }
        )
      })
    } catch (error) {
      console.log(error)
    }

    session.flash('success', 'Contact submit successfully.')
    return response.redirect('/contact')
  }
}
