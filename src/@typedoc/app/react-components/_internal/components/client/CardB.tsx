"use client";

import { FC, PropsWithChildren } from "react";

/**
 * Renders a card around some content.
 *
 * ```tsx
 * <CardB variant="secondary">
 *     <h5>My Title</h5>
 *     <p>My content</p>
 * </CardB>
 * ```
 *
 * The props type is written directly in the function definition:
 *
 * ```
 * export function CardB({
 *     children,
 *     variant = "primary",
 * }: PropsWithChildren<{
 *     variant: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
 * }>): ReactElement {
 *     // ...
 * }
 * ```
 *
 * This can make the TypeDoc documentation a bit cleaner for very simple components,
 * but it makes your code less readable.
 *
 * @category Component
 */
const CardB: FC<
  PropsWithChildren<{
    /** The theme of the card. Defaults to `primary`. */
    variant: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
  }>
> = ({ variant, children }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <div className={`card card-${variant}`}>{children}</div>;
  // #endregion render functions end
};

export { CardB };
