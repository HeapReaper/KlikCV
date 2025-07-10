import router from '@adonisjs/core/services/router'
import {parseMarkdownFile} from "../utils/parse.js";
import {getAllPosts} from "../utils/content.js";

router.on('/').renderInertia('home')

// TODO: move to /routes/builder/builder.ts
router.on('/cv/bouw').renderInertia('builder/create')

router.on('/blog').renderInertia('blog/page', {
  articles: getAllPosts(),
});


router.get('/blog/:slug', async ({ params, inertia }) => {
  const slug = params.slug.replace(/[^a-zA-Z0-9-_]/g, '');

  const article = getAllPosts().find((a: any) => a.slug === slug);

  if (!article) {
    return inertia.render('errors/404', { slug });
  }

  const html = parseMarkdownFile(`./content/blog/${slug}.md`);

  return inertia.render('blog/show', {
    article,
    html,
  });
});

router.on('/faq').renderInertia('faq/page')
router.on('/over-ons').renderInertia('about-us/page', {
  html: parseMarkdownFile('./content/pages/about-us.md')
})
router.on('/privacy').renderInertia('privacy/page', {
  html: parseMarkdownFile('./content/pages/privacy.md')
})

router.on('/contact').renderInertia('contact/page')
