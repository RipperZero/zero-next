import { FC } from "react";

import { _QueryTimestampRes } from "@/_mock/render/_mockAPI";
import { Result } from "@/shared/utils/createAxiosInstance";
import { getApiServerURL } from "@/shared/utils/envUtils";

import { TimeSection } from "../_internal/components/client/TimeSection";

const getTimeStamp = async () => {
  // In the app directory
  // data fetching with fetch() will default to cache: 'force-cache'
  const res = await fetch(`${getApiServerURL()}/time/getTimestamp`);
  const resJSON = (await res.json()) as
    | Omit<Result<number>, "axios">
    | undefined;

  return resJSON;
};

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

// @see https://nextjs.org/docs/app/guides/migrating/app-router-migration#static-site-generation-getstaticprops
const SSGPage: FC<SSGPageProps> = async () => {
  // const [_error, res] = await tryit(getTimeStamp)();
  const res = await getTimeStamp();
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
        description="Fetched only once, when running build on deployment."
        timestamp={res?.data}
      />
    </main>
  );
  // #endregion render functions end
};

export type { SSGPageProps };
export default SSGPage;
