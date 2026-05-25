import { BLOG_CATEGORIES, BLOG_POSTS, type BlogCategory } from "@/content/blog/blogs";

export type BlogFilterCategory = BlogCategory | "all";

export function BlogCategoryFilter({
  active,
  onChange,
}: {
  active: BlogFilterCategory;
  onChange: (category: BlogFilterCategory) => void;
}) {
  const filters: { id: BlogFilterCategory; label: string; count: number }[] = [
    { id: "all", label: "Alle", count: BLOG_POSTS.length },
    ...BLOG_CATEGORIES.map((category) => ({
      id: category.id,
      label: category.label,
      count: category.getCount(),
    })),
  ];

  return (
    <div
      className="mt-12 flex flex-wrap gap-2 md:mt-14"
      role="tablist"
      aria-label="Blog-Kategorien"
    >
      {filters.map((filter) => {
        const selected = active === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(filter.id)}
            className={[
              "inline-flex items-baseline gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              selected
                ? "bg-pm-light-icon-bg text-pm-light-headline"
                : "text-pm-light-text-1 hover:bg-pm-light-container hover:text-pm-light-headline",
            ].join(" ")}
          >
            <span>{filter.label}</span>
            <sup className="text-[0.65em] font-normal opacity-70">
              {filter.count}
            </sup>
          </button>
        );
      })}
    </div>
  );
}
