import { Result } from "@/shared/utils/createAxiosInstance";
import { getApiServerURL } from "@/shared/utils/envUtils";

import { TimeSection } from "../_internal/components/client/TimeSection";

const getTimeStamp = async () => {
  const res = await fetch(`${getApiServerURL()}/time/getTimestamp`, {
    next: { revalidate: 5 },
  });
  const resJSON = (await res.json()) as
    | Omit<Result<number>, "axios">
    | undefined;

  return resJSON;
};
// export const revalidate = 60;

type ISRPageProps = {
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

// @see https://nextjs.org/docs/app/guides/migrating/app-router-migration#incremental-static-regeneration-getstaticprops-with-revalidate
const ISRPage: AsyncFC<ISRPageProps> = async () => {
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
        title="ISR"
        description="If you visit after the revalidate time (5s), your next full refresh visit will trigger fetch."
        timestamp={res?.data}
      />
    </main>
  );
  // #endregion render functions end
};

export type { ISRPageProps };
export default ISRPage;
