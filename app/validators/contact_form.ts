import vine from '@vinejs/vine'

export const contactFormValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(30),
    email: vine.string().minLength(3).maxLength(30).email(),
    subject: vine.string().minLength(3).maxLength(30),
    message: vine.string().minLength(3).maxLength(200),
  })
)
