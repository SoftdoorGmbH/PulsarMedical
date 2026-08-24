import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { BLOG_CARD_GRADIENTS, formatBlogDate, formatReadTime } from "@/components/blog/blogUtils";
import { BLOG_CATEGORIES, getPostBySlug } from "@/content/blog/blogs";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  const categoryLabel =
    BLOG_CATEGORIES.find((category) => category.id === post.category)?.label ??
    post.category;

  return (
    <article className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <Link
          to="/blog"
          className="inline-flex text-sm font-semibold text-pm-light-text-2 no-underline transition-colors hover:text-pm-light-button hover:underline"
        >
          ← Zurück zum Blog
        </Link>

        <p className="mt-8 text-sm font-medium text-pm-light-text-2">
          {categoryLabel} · {formatReadTime(post.readTimeMinutes)}
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-pm-light-text-1">
          Veröffentlicht {formatBlogDate(post.publishedAt)}
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-pm-light-container-border">
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={post.imageAlt ?? post.title}
              width={1200}
              height={750}
              className="aspect-16/10 w-full object-cover"
            />
          ) : (
            <div
              className={[
                "aspect-16/10 w-full",
                BLOG_CARD_GRADIENTS[post.category],
              ].join(" ")}
            />
          )}
        </div>

        <div className="mt-10 space-y-4 text-base leading-relaxed text-pm-light-text-1 md:text-lg">
          <p>{post.excerpt}</p>
          {post.body ? (
            post.body.split(/\n\n+/).map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))
          ) : (
            <p className="text-sm text-pm-light-text-1">
              Der vollständige Artikel wird in Kürze hier verfügbar sein. Bis
              dahin freuen wir uns über Ihre Nachricht.
            </p>
          )}
        </div>

        <div className="mt-10">
          <Button to="/kontakt">Kontakt aufnehmen</Button>
        </div>
      </div>
    </article>
  );
}
