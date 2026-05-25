import type { BlogPost } from "@/content/blog/blogs";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

export function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="mt-12 text-center text-pm-light-text-1">
        In dieser Kategorie sind noch keine Beiträge vorhanden.
      </p>
    );
  }

  return (
    <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {posts.map((post) => (
        <li key={post.id}>
          <BlogPostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
