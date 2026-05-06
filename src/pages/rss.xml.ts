import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { getAllPublishedPosts, getPostSlug } from '../utils/posts';

export async function GET(context: { site: URL | undefined }) {
  const posts = await getAllPublishedPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? new URL(SITE.url),
    items: posts.map((post) => ({
      title: `[${post.data.lang.toUpperCase()}] ${post.data.title}`,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.data.lang}/blog/${getPostSlug(post)}`
    }))
  });
}
