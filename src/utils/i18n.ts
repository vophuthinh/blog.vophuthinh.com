import type { Locale } from '../consts';

export const translations = {
    vi: {
        nav: {
            home: 'Trang chủ',
            blog: 'Blog',
            projects: 'Dự án',
            about: 'Giới thiệu',
            contact: 'Liên hệ',
            portfolio: 'Portfolio',
            search: 'Tìm kiếm',
            switchLang: 'EN',
        },
        home: {
            heroTag: 'AI Agents • MLOps • AI Governance',
            heroTitle: 'Blog kỹ thuật và portfolio cá nhân của Võ Phú Thịnh',
            heroDescription:
                'Nơi mình chia sẻ kinh nghiệm thực chiến về AI Agents, MLOps, AI Governance, automation và triển khai hệ thống AI trong doanh nghiệp.',
            featuredPosts: 'Bài viết nổi bật',
            latestPosts: 'Bài viết mới nhất',
            featuredProjects: 'Dự án nổi bật',
            topics: 'Chủ đề chính',
            contactCtaTitle: 'Cùng trao đổi về dự án của bạn',
            contactCtaDescription: 'Mình luôn sẵn sàng kết nối để chia sẻ hoặc hợp tác.',
            contactCtaButton: 'Liên hệ ngay',
        },
        common: {
            readMore: 'Đọc thêm',
            viewAllPosts: 'Xem tất cả bài viết',
            viewAllProjects: 'Xem tất cả dự án',
            backToBlog: 'Quay lại danh sách bài viết',
            backToProjects: 'Quay lại danh sách dự án',
            relatedPosts: 'Bài viết liên quan',
            series: 'Series',
            category: 'Chuyên mục',
            tags: 'Tags',
            noPosts: 'Chưa có bài viết phù hợp.',
            noProjects: 'Chưa có dự án phù hợp.',
            updated: 'Cập nhật',
            minRead: 'phút đọc',
            prevPost: 'Bài trước',
            nextPost: 'Bài tiếp',
            viewAllSeries: 'Xem tất cả series',
            seriesPartOf: 'Bài viết trong series',
            partNumber: 'Phần {n}',
        },
        pages: {
            blogTitle: 'Blog',
            blogDescription: 'Chia sẻ kiến thức kỹ thuật, bài học thực tế và kinh nghiệm triển khai.',
            projectsTitle: 'Projects',
            projectsDescription:
                'Các dự án AI thực tế đã triển khai production: chatbot, AI assistant và intelligence platform.',
            contactTitle: 'Contact',
            contactDescription: 'Kết nối qua email hoặc mạng xã hội để trao đổi cơ hội hợp tác AI Engineer.',
            searchTitle: 'Tìm kiếm',
            searchDescription: 'Tìm kiếm bài viết, dự án và nội dung trên blog.',
            searchPlaceholder: 'Nhập từ khóa...',
            categoryTitle: 'Chuyên mục: {name}',
            categoryDescription: 'Tất cả bài viết trong chuyên mục {name}.',
            tagTitle: 'Tag: {name}',
            tagDescription: 'Tất cả bài viết gắn tag {name}.',
            seriesTitle: 'Series: {name}',
            seriesDescription: 'Tất cả bài viết trong series {name}.',
            postsCount: '{count} bài viết',
        },
        footer: {
            copyright: 'Bản quyền',
        },
    },
    en: {
        nav: {
            home: 'Home',
            blog: 'Blog',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
            portfolio: 'Portfolio',
            search: 'Search',
            switchLang: 'VI',
        },
        home: {
            heroTag: 'AI Agents • MLOps • AI Governance',
            heroTitle: 'Personal tech blog and portfolio by Võ Phú Thịnh',
            heroDescription:
                'I share practical insights on AI Agents, MLOps, AI Governance, automation, and shipping AI systems in enterprise environments.',
            featuredPosts: 'Featured posts',
            latestPosts: 'Latest posts',
            featuredProjects: 'Featured projects',
            topics: 'Core topics',
            contactCtaTitle: 'Let’s discuss your next project',
            contactCtaDescription: 'I am open to collaboration, consulting and knowledge sharing.',
            contactCtaButton: 'Get in touch',
        },
        common: {
            readMore: 'Read more',
            viewAllPosts: 'View all posts',
            viewAllProjects: 'View all projects',
            backToBlog: 'Back to blog',
            backToProjects: 'Back to projects',
            relatedPosts: 'Related posts',
            series: 'Series',
            category: 'Category',
            tags: 'Tags',
            noPosts: 'No published posts yet.',
            noProjects: 'No projects available yet.',
            updated: 'Updated',
            minRead: 'min read',
            prevPost: 'Previous',
            nextPost: 'Next',
            viewAllSeries: 'View all series',
            seriesPartOf: 'Posts in this series',
            partNumber: 'Part {n}',
        },
        pages: {
            blogTitle: 'Blog',
            blogDescription: 'Technical writing, field notes, and implementation playbooks.',
            projectsTitle: 'Projects',
            projectsDescription:
                'Production AI case studies: chatbot, enterprise AI assistant, and intelligence automation platforms.',
            contactTitle: 'Contact',
            contactDescription: 'Reach out for AI Engineer opportunities, collaborations, and consulting work.',
            searchTitle: 'Search',
            searchDescription: 'Search blog posts, projects and content.',
            searchPlaceholder: 'Type to search...',
            categoryTitle: 'Category: {name}',
            categoryDescription: 'All posts in category {name}.',
            tagTitle: 'Tag: {name}',
            tagDescription: 'All posts tagged with {name}.',
            seriesTitle: 'Series: {name}',
            seriesDescription: 'All posts in the {name} series.',
            postsCount: '{count} posts',
        },
        footer: {
            copyright: 'Copyright',
        },
    },
} as const;

export function t(locale: Locale) {
    return translations[locale];
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
    const cleaned = pathname.replace(/\/+$/, '') || '/';
    const localePattern = /^\/(vi|en)(\/|$)/;

    if (cleaned === '/') {
        return `/${targetLocale}`;
    }

    if (localePattern.test(cleaned)) {
        return cleaned.replace(localePattern, `/${targetLocale}$2`);
    }

    return `/${targetLocale}${cleaned.startsWith('/') ? cleaned : `/${cleaned}`}`;
}
