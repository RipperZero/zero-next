"use client";

import { Link } from "next-view-transitions";
import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { FC } from "react";

import { clsx } from "clsx";

import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const LINKS: Array<{
  name: string;
  href: LinkProps<undefined>["href"];
  icon: typeof HomeIcon;
}> = [
  {
    name: "Home",
    href: "/dashboard-example/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard-example/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Customers",
    href: "/dashboard-example/dashboard/customers",
    icon: UserGroupIcon,
  },
];

type NavLinksProps = unknown;

const NavLinks: FC<NavLinksProps> = () => {
  // #region hooks start
  const pathname = usePathname();

  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return LINKS.map(({ name, icon, href }) => {
    const LinkIcon = icon;

    return (
      <Link
        key={name}
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          pathname === href && "bg-sky-100 text-blue-600",
        )}
        href={href}
      >
        <LinkIcon className="w-6" />
        <p className="hidden md:block">{name}</p>
      </Link>
    );
  });
  // #endregion render functions end
};

export { NavLinks };
