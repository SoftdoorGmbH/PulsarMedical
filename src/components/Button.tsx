import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "inverse"
  | "dark"
  | "navy"
  | "outline";

type ButtonSize = "sm" | "md" | "lg";

type ButtonFullWidth = boolean | "sm" | "md";

type ButtonSharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: ButtonFullWidth;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonSharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    to?: never;
    href?: never;
  };

type ButtonAsLink = ButtonSharedProps &
  Omit<LinkProps, "className" | "children"> & {
    to: LinkProps["to"];
    href?: never;
  };

type ButtonAsAnchor = ButtonSharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
    to?: never;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary:
    "bg-pm-light-button text-white shadow-md transition-[filter,transform] hover:brightness-110 active:scale-[0.99]",
  secondary: "bg-white text-pm-light-headline",
  inverse:
    "bg-white text-pm-light-button shadow-md transition-[filter,transform] hover:brightness-95 active:scale-[0.99]",
  dark: "bg-pm-dark-button text-white shadow-md transition-[filter,transform] hover:brightness-110 active:scale-[0.99]",
  navy: "bg-pm-light-headline text-white shadow-md transition-[filter,transform] hover:brightness-110 active:scale-[0.99]",
  outline:
    "border border-pm-dark-divider text-pm-dark-text-2 transition-colors hover:bg-white/10",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-8 py-3.5 text-base",
};

function buttonClassName({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: Pick<ButtonSharedProps, "variant" | "size" | "fullWidth" | "className">) {
  return [
    "inline-flex items-center justify-center rounded-full font-semibold no-underline",
    VARIANT_CLASS[variant],
    SIZE_CLASS[size],
    fullWidth === true
      ? "w-full"
      : fullWidth === "sm"
        ? "max-sm:w-full"
        : fullWidth === "md"
          ? "max-md:w-full"
          : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Rounded CTA that renders as a button, React Router link, or anchor. */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    className,
    children,
    ...rest
  } = props;
  const classes = buttonClassName({ variant, size, fullWidth, className });

  if ("to" in rest && rest.to != null) {
    return (
      <Link className={classes} {...(rest as Omit<LinkProps, "className">)}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href != null) {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonRest } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
