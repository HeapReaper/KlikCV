import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')

// TODO: move to /routes/builder/builder.ts
router.on('/cv/bouw').renderInertia('builder/create')

router.on('/faq').renderInertia('faq/page')
router.on('/over-ons').renderInertia('about-us/page')
router.on('/contact').renderInertia('contact/page')
router.on('/privacy').renderInertia('privacy/page')
