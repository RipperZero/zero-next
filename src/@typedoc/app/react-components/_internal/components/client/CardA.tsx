"use client";

import { FC, PropsWithChildren } from "react";

/**
 * The props type for {@link CardA}.
 */
type CardAProps = {
  /** The theme of the card. Defaults to `primary`. */
  variant: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
};

/**
 * Renders a card around some content.
 *
 * ```tsx
 * <CardA variant="secondary">
 *     <h5>My Title</h5>
 *     <p>My content</p>
 * </CardA>
 * ```
 *
 * The props type is defined as a separate interface **which must be exported!**
 *
 * ```
 * export interface CardAProps {
 *     // ...
 * }
 *
 * export function CardA({
 *     children,
 *     variant = "primary",
 * }: PropsWithChildren<CardAProps>): ReactElement {
 *     // ...
 * }
 * ```
 *
 * This is our recommended way to define React components as it makes your code
 * more readable. The minor drawback is you must click the `CardAProps` link to
 * see the component's props.
 *
 * @category Component
 */
const CardA: FC<PropsWithChildren<CardAProps>> = ({
  children,
  variant = "primary",
}) => {
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

export type { CardAProps };
export { CardA };
