import { Link } from "react-router-dom";
import type { BlogPost } from "@/content/blog/blogs";
import { formatBlogDate, formatReadTime } from "@/components/blog/blogUtils";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogFeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="grid gap-10 border-b border-pm-light-container-border pb-14 md:grid-cols-2 md:items-center md:gap-12 md:pb-16">
      <div className="flex min-h-full flex-col">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold text-pm-light-text-2">Featured</span>
          <span className="text-pm-light-text-1">
            {formatReadTime(post.readTimeMinutes)}
          </span>
        </div>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-pm-light-headline md:text-4xl lg:text-[2.5rem]">
          <Link
            to={`/blog/${post.slug}`}
            className="text-pm-light-headline no-underline transition-colors hover:text-pm-light-text-2"
          >
            {post.title}
          </Link>
        </h2>

        <div className="mt-auto flex items-end justify-between gap-4 pt-10">
          <p className="text-sm text-pm-light-text-1">
            Veröffentlicht {formatBlogDate(post.publishedAt)}
          </p>
          <Link
            to={`/blog/${post.slug}`}
            aria-label={`Artikel lesen: ${post.title}`}
            className="inline-flex size-11 items-center justify-center rounded-full border border-pm-light-container-border bg-white text-pm-light-headline shadow-sm no-underline transition-[transform,box-shadow] hover:shadow-md"
          >
            <ArrowRightIcon />
          </Link>
        </div>
      </div>

      <Link
        to={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-2xl no-underline ring-1 ring-pm-light-container-border"
      >
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt=""
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-linear-to-br from-pm-light-icon-bg via-pm-light-container to-[#dceef8]">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgb(19 108 155 / 0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgb(2 52 78 / 0.2), transparent 40%)",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgb(255_255_255_/_0.35)_100%)]" />
          </div>
        )}
      </Link>
    </article>
  );
}
