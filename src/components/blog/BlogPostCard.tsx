import { Link } from "react-router-dom";
import type { BlogPost } from "@/content/blog/blogs";
import {
  BLOG_CARD_GRADIENTS,
  formatReadTime,
} from "@/components/blog/blogUtils";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden>
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

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex min-h-72 flex-col overflow-hidden rounded-2xl no-underline ring-1 ring-pm-light-container-border/80 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-16px_rgb(2_52_78_/0.25)] md:min-h-80"
    >
      {post.imageUrl ? (
        <>
          <img
            src={post.imageUrl}
            alt={post.imageAlt ?? post.title}
            width={640}
            height={800}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-pm-light-headline/90 via-pm-light-headline/45 to-pm-light-headline/20" />
        </>
      ) : (
        <div
          className={[
            "absolute inset-0",
            BLOG_CARD_GRADIENTS[post.category],
          ].join(" ")}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(1_31_47/0.15)_0%,rgb(1_31_47/0.55)_100%)]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgb(255 255 255 / 0.35), transparent 35%)",
            }}
          />
        </div>
      )}

      <div className="relative flex flex-1 flex-col justify-between p-6 text-white">
        <h3 className="text-xl font-semibold leading-snug tracking-tight md:text-2xl">
          {post.title}
        </h3>

        <div className="mt-8 flex items-end justify-between gap-4">
          <span className="text-sm text-white/85">
            {formatReadTime(post.readTimeMinutes)}
          </span>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-white/25">
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}
