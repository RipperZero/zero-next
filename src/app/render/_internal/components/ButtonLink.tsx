import { FC, PropsWithChildren } from "react";

import { clsx } from "clsx";

import styles from "./components.module.css";
import { UnstyledLink, UnstyledLinkProps } from "./UnstyledLink";

type ButtonLinkProps = {
  variants?: "primary" | "secondary";
} & UnstyledLinkProps;

const ButtonLink: FC<PropsWithChildren<ButtonLinkProps>> = ({
  children,
  className,
  variants = "primary",
  ...restProps
}) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <UnstyledLink
      {...restProps}
      className={clsx(
        styles["animated-underline"],
        "inline-block rounded border border-gray-600 px-4 py-2 font-bold focus:outline-none focus-visible:text-[#00E0F3]",
        {
          "bg-dark text-white hover:text-[#00E0F3]": variants === "primary",
          "text-dark hover:text-dark focus-visible:text-dark bg-white hover:bg-gray-200":
            variants === "secondary",
        },
        className,
      )}
    >
      {children}
    </UnstyledLink>
  );
  // #endregion render functions end
};

export type { ButtonLinkProps };
export { ButtonLink };
