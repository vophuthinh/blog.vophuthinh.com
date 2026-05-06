import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../consts';
import { entrySlugFromId, slugify } from './slug';

export type BlogPost = CollectionEntry<'blog'>;

export function isPublishedPost(post: BlogPost, now = new Date()): boolean {
    return post.data.draft === false && post.data.pubDate <= now;
}

function byNewest(a: BlogPost, b: BlogPost): number {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}

export async function getPostsByLang(lang: Locale): Promise<BlogPost[]> {
    const posts = await getCollection('blog', ({ data }) => data.lang === lang);
    return posts.filter((post) => isPublishedPost(post)).sort(byNewest);
}

export async function getAllPublishedPosts(): Promise<BlogPost[]> {
    const posts = await getCollection('blog');
    return posts.filter((post) => isPublishedPost(post)).sort(byNewest);
}

export function getFeaturedPosts(posts: BlogPost[], limit = 3): BlogPost[] {
    return posts.filter((post) => post.data.featured).slice(0, limit);
}

export function getLatestPosts(posts: BlogPost[], limit = 6): BlogPost[] {
    return posts.slice(0, limit);
}

export function getRelatedPosts(currentPost: BlogPost, posts: BlogPost[], limit = 3): BlogPost[] {
    const currentTags = new Set(currentPost.data.tags);

    return posts
        .filter((post) => post.id !== currentPost.id)
        .map((post) => {
            const sharedTags = post.data.tags.filter((tag) => currentTags.has(tag)).length;
            const score = sharedTags + (post.data.category === currentPost.data.category ? 2 : 0);
            return { post, score };
        })
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((entry) => entry.post);
}

export function getPostSlug(post: BlogPost): string {
    return entrySlugFromId(post.id);
}

export function getPostTranslationKey(post: BlogPost): string {
    return post.data.translationKey ?? getPostSlug(post);
}

export function getCategories(posts: BlogPost[]): string[] {
    return [...new Set(posts.map((post) => post.data.category))].sort();
}

export function getTags(posts: BlogPost[]): string[] {
    return [...new Set(posts.flatMap((post) => post.data.tags))].sort();
}

export function filterPostsByTaxonomy(posts: BlogPost[], category?: string | null, tag?: string | null): BlogPost[] {
    return posts.filter((post) => {
        const categoryMatched = category ? post.data.category === category : true;
        const tagMatched = tag ? post.data.tags.includes(tag) : true;
        return categoryMatched && tagMatched;
    });
}

export function buildPostPath(lang: Locale, slug: string): string {
    return `/${lang}/blog/${slug}`;
}

export function getSeries(posts: BlogPost[]): string[] {
    return [...new Set(posts.map((p) => p.data.series).filter((s): s is string => !!s))].sort();
}

export function getPostsBySeries(posts: BlogPost[], series: string): BlogPost[] {
    return posts
        .filter((p) => p.data.series === series)
        .sort((a, b) => a.data.pubDate.getTime() - b.data.pubDate.getTime());
}

export function buildCategoryPath(lang: Locale, category: string): string {
    return `/${lang}/categories/${slugify(category)}`;
}

export function buildTagPath(lang: Locale, tag: string): string {
    return `/${lang}/tags/${slugify(tag)}`;
}

export function buildSeriesPath(lang: Locale, series: string): string {
    return `/${lang}/series/${slugify(series)}`;
}

export function getPrevNextPosts(
    currentPost: BlogPost,
    posts: BlogPost[],
): { prev: BlogPost | null; next: BlogPost | null } {
    const index = posts.findIndex((p) => p.id === currentPost.id);
    return {
        prev: index < posts.length - 1 ? posts[index + 1] : null,
        next: index > 0 ? posts[index - 1] : null,
    };
}

export function estimateReadingTime(content?: string): number {
    if (!content) return 1;
    const text = content.replace(/```[\s\S]*?```/g, '').replace(/[#*`\[\]()>\-]/g, '');
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}
