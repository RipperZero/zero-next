import { FC } from "react";

import { _QueryTimestampRes } from "@/_mock/render/_mockAPI";

import { TimeSection } from "../_internal/components/TimeSection";

type SSGPageProps = {
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

const SSGPage: AsyncFC<SSGPageProps> = async () => {
  const res = await fetch("/mock-api/render", { cache: "force-cache" });
  const resJson = (await res.json()) as _QueryTimestampRes;
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <main>
      <TimeSection
        title="SSG"
        description="Fetched only once, when running yarn build on deployment."
        timestamp={resJson.data}
      />
    </main>
  );
  // #endregion render functions end
};

export type { SSGPageProps };
export default SSGPage;
