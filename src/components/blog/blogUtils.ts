import type { BlogCategory } from "@/content/blog/blogs";

export const BLOG_CARD_GRADIENTS: Record<BlogCategory, string> = {
  team: "bg-linear-to-br from-[#136c9b] via-[#0a4a6a] to-[#02344e]",
  events: "bg-linear-to-br from-[#1a5272] via-[#136c9b] to-[#011f2f]",
  health: "bg-linear-to-br from-[#02344e] via-[#136c9b] to-[#1a5272]",
  news: "bg-linear-to-br from-[#0a4a6a] via-[#02344e] to-[#136c9b]",
  insights: "bg-linear-to-br from-[#4db8e8]/90 via-[#136c9b] to-[#02344e]",
};

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatReadTime(minutes: number): string {
  return `${minutes} Min. Lesezeit`;
}
