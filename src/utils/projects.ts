import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../consts';
import { entrySlugFromId } from './slug';

export type ProjectEntry = CollectionEntry<'projects'>;

export async function getProjectsByLang(lang: Locale): Promise<ProjectEntry[]> {
  const projects = await getCollection('projects', ({ data }) => data.lang === lang);
  return projects.sort((a, b) => Number(Boolean(b.data.featured)) - Number(Boolean(a.data.featured)));
}

export function getFeaturedProjects(projects: ProjectEntry[], limit = 3): ProjectEntry[] {
  return projects.filter((project) => project.data.featured).slice(0, limit);
}

export function getProjectSlug(project: ProjectEntry): string {
  return entrySlugFromId(project.id);
}

export function getProjectTranslationKey(project: ProjectEntry): string {
  return project.data.translationKey ?? getProjectSlug(project);
}

export function buildProjectPath(lang: Locale, slug: string): string {
  return `/${lang}/projects/${slug}`;
}
