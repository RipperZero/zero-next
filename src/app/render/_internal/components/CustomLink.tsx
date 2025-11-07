import { FC } from "react";

import { clsx } from "clsx";

import styles from "./components.module.css";
import { UnstyledLink, UnstyledLinkProps } from "./UnstyledLink";

type CustomLinkProps = UnstyledLinkProps;

const CustomLink: FC<CustomLinkProps> = ({
  children,
  className,
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
        "inline-flex items-center font-bold hover:text-[#00E0F3]",
        "focus:outline-none focus-visible:text-[#00E0F3]",
        className,
      )}
    >
      {children}
    </UnstyledLink>
  );
  // #endregion render functions end
};

export type { CustomLinkProps };
export { CustomLink };
