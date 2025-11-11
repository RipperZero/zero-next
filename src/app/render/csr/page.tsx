"use client";

// import dynamic from "next/dynamic";
import { FC, use, useEffect, useState } from "react";

import { tryit } from "radash";

import { getTimeStamp } from "@/api/render";
import { isNullish } from "@/shared/utils";

import { TimeSection } from "../_internal/components/client/TimeSection";

// const NoSSRTimeSection = dynamic(
//   () =>
//     import("../_internal/components/client/TimeSection").then(
//       (mod) => mod.TimeSection,
//     ),
//   { ssr: false },
// );

type CSRPageProps = {
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

const CSRPage: FC<CSRPageProps> = ({ params, searchParams }) => {
  // #region hooks start
  const {} = use(params) ?? {};
  const {} = use(searchParams) ?? {};

  const [timestamp, setTimestamp] = useState<number>();
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    let ignore = false;

    const initRequest = async () => {
      const [error, res] = await tryit(getTimeStamp)();

      // StrictMode → useEffect firing twice in dev
      if (ignore) {
        return;
      }

      // has error
      if (!isNullish(error)) {
        console.error(error);
        return;
      }
      if (isNullish(res)) {
        return;
      }
      // response fail
      if (!res.result) {
        return;
      }
      // response success
      setTimestamp(res.data);
    };

    initRequest();

    return () => {
      ignore = true;
    };
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <main>
        <TimeSection
          title="CSR"
          description="Fetched every render, on client side. Notice the loading."
          timestamp={timestamp}
        />
      </main>
    </>
  );
  // #endregion render functions end
};

export type { CSRPageProps };
export default CSRPage;
