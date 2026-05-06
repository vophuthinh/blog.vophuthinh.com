export function cleanSlug(value: string): string {
    return value
        .trim()
        .replace(/^\/+|\/+$/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();
}

export function slugify(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function entrySlugFromId(id: string): string {
    const parts = id.split('/').filter(Boolean);
    return parts[parts.length - 1] ?? id;
}
