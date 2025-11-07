"use client";

import { FC, use, useEffect, useState } from "react";

type ISR20PageProps = {
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

const ISR20Page: FC<ISR20PageProps> = ({ params, searchParams }) => {
  // #region hooks start
  const {} = use(params) ?? {};
  const {} = use(searchParams) ?? {};

  const [_temp, setTemp] = useState();
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
      <div>FC</div>
    </>
  );
  // #endregion render functions end
};

export type { ISR20PageProps };
export default ISR20Page;
