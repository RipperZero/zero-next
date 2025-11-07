import { Route } from "next";
import Link, { LinkProps } from "next/link";

import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

import { clsx } from "clsx";

type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"a"> &
  LinkProps<Route>;

const UnstyledLink: FC<PropsWithChildren<UnstyledLinkProps>> = ({
  children,
  href,
  openNewTab,
  className,
  ...restProps
}) => {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  if (!isNewTab) {
    return (
      <Link href={href} className={className} {...restProps}>
        {children}
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...restProps}
      className={clsx(className, "cursor-ne-resize!")}
    >
      {children}
    </a>
  );
  // #endregion render functions end
};

export type { UnstyledLinkProps };
export { UnstyledLink };
