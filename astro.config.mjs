// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://blog.vophuthinh.com',
    integrations: [
        mdx(),
        sitemap({
            filter: (page) => {
                return !page.includes('/en/search') && !page.includes('/vi/search');
            },
            serialize: (item) => {
                if (item.url.includes('/en/search') || item.url.includes('/vi/search')) {
                    return undefined;
                }
                return item;
            },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            defaultColor: false,
        },
    },
});
