import { useMemo, useState } from "react";
import {
  BlogCategoryFilter,
  type BlogFilterCategory,
} from "@/components/blog/BlogCategoryFilter";
import { BlogFeaturedPost } from "@/components/blog/BlogFeaturedPost";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { getFeaturedPost, getPostsByCategory } from "@/content/blog/blogs";

export function BlogPage() {
  const [activeCategory, setActiveCategory] =
    useState<BlogFilterCategory>("all");
  const featured = getFeaturedPost();

  const gridPosts = useMemo(() => {
    const posts = getPostsByCategory(activeCategory);
    return posts.filter((post) => post.id !== featured.id);
  }, [activeCategory, featured.id]);

  return (
    <section className="py-12 md:py-16 lg:py-20" aria-label="Blog">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-10">
        <BlogFeaturedPost post={featured} />
        <BlogCategoryFilter
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <BlogPostGrid posts={gridPosts} />
      </div>
    </section>
  );
}
