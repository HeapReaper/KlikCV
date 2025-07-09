import router from '@adonisjs/core/services/router'
import { loadMd } from "../utils/marked.js";

router.on('/').renderInertia('home')

// TODO: move to /routes/builder/builder.ts
router.on('/cv/bouw').renderInertia('builder/create')
router.on('/blog').renderInertia('blog/page')
router.on('/faq').renderInertia('faq/page')
router.on('/over-ons').renderInertia('about-us/page', {
  html: await loadMd('about-us.md')
})
router.on('/contact').renderInertia('contact/page')
router.on('/privacy').renderInertia('privacy/page', {
  html: await loadMd('privacy.md')
})
