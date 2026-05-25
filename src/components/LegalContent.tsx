import type { ReactNode } from "react";

export const externalLinkClass =
  "font-medium text-pm-light-text-2 no-underline transition-colors hover:text-pm-light-button hover:underline break-words";

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-8 text-xl font-semibold text-pm-light-headline first:mt-0">
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 text-lg font-semibold text-pm-light-headline">
      {children}
    </h3>
  );
}

export function LegalSubtitle({ children }: { children: ReactNode }) {
  return <p className="italic text-pm-light-text-2">{children}</p>;
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={externalLinkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function EmailLink({
  user,
  domain,
}: {
  user: string;
  domain: string;
}) {
  const address = `${user}@${domain}`;
  return (
    <a href={`mailto:${address}`} className={externalLinkClass}>
      {address}
    </a>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
