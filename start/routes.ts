import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')

// TODO: move to /routes/builder/builder.ts
router.on('/builder').renderInertia('builder/create')
router.on('/faq').renderInertia('faq/faq')

