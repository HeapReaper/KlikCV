import vine from '@vinejs/vine'

export const cvValidator = vine.compile(
  vine.object({
    template: vine.number(),
    photo: vine.file({
      size: '10mb',
      extnames: [
        'jpg',
        'png',
        'jpeg',
        'webp',
      ],
    }).optional()
  })
)
