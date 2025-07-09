import router from '@adonisjs/core/services/router'
import { loadMd } from "../utils/marked.js";
// @ts-ignore
import articles from "../content/blog/articles.json" assert { type: "json" };

router.on('/').renderInertia('home')

// TODO: move to /routes/builder/builder.ts
router.on('/cv/bouw').renderInertia('builder/create')

router.on('/blog').renderInertia('blog/page')
router.get('/blog/:slug', async ({ params, inertia }) => {
  const slug = params.slug;

  const article = articles.find((a: any) => a.slug === slug);

  if (!article) {
    return inertia.render('errors/404', { slug }); // or return a redirect/abort
  }

  const html = await loadMd(`blog/${slug}.md`);

  return inertia.render('blog/show', {
    article,
    html,
  });
});

router.on('/faq').renderInertia('faq/page')
router.on('/over-ons').renderInertia('about-us/page', {
  html: await loadMd('about-us.md')
})
router.on('/privacy').renderInertia('privacy/page', {
  html: await loadMd('privacy.md')
})

router.on('/contact').renderInertia('contact/page')
