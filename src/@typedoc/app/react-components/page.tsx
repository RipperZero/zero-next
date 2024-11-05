"use client";

import { FC, useEffect, useState } from "react";

type ReactComponentsPageProps = {
  /**
   * An object containing the [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
   * from the root segment down to that page.
   *
   * @see [Page Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional)
   */
  params: Promise<unknown>;
  /**
   * An object containing the search parameters of the current URL.
   *
   * @see [Layout Searchparams → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
   */
  searchParams: Promise<unknown>;
};

const ReactComponentsPage: FC<ReactComponentsPageProps> = ({}) => {
  // #region hooks start
  const [_temp, setTemp] = useState("ReactComponentsPage");
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    console.log(_temp);
  }, [_temp]);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <div>{"ReactComponentsPage"}</div>
    </>
  );
  // #endregion render functions end
};

export type { ReactComponentsPageProps };
export default ReactComponentsPage;
