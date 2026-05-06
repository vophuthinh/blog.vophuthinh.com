export const SITE = {
    name: 'Võ Phú Thịnh',
    title: 'Võ Phú Thịnh | Blog & Portfolio',
    description:
        'Bilingual blog and portfolio by an AI Engineer sharing practical work on AI Agents, MLOps, AI Governance, automation, and enterprise systems.',
    url: 'https://blog.vophuthinh.com',
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    defaultOgImage: '/og-default.png',
    email: 'mailto:vophuthinhcm@gmail.com',
    github: 'https://github.com/vophuthinh',
    linkedin: 'https://www.linkedin.com/in/vophuthinh',
    portfolio: 'https://vophuthinh.com',
} as const;

export const TOPICS = ['AI Agents', 'MLOps', 'AI Governance', 'Automation', 'Python', 'GenAI'] as const;

export const DATE_FORMATS = {
    vi: 'vi-VN',
    en: 'en-US',
} as const;

export type Locale = (typeof SITE.locales)[number];
