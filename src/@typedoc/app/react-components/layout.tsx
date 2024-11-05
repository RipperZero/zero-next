import { FC, PropsWithChildren } from "react";

type ReactComponentsLayoutProps = {
  /**
   * The [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) object
   * from the root segment down to that layout.
   *
   * @see [Layout Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/layout#params-optional)
   */
  params: Promise<unknown>;
};

/**
 * react-components Layout
 */
const ReactComponentsLayout: FC<
  PropsWithChildren<ReactComponentsLayoutProps>
> = ({ children }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <div className="h-screen w-screen">{children}</div>;
  // #endregion render functions end
};

export type { ReactComponentsLayoutProps };
export default ReactComponentsLayout;
