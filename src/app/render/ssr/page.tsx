import { FC } from "react";

import { tryit } from "radash";

import { Result } from "@/shared/utils/createAxiosInstance";
import { getApiServerURL } from "@/shared/utils/envUtils";

// import { getTimeStamp } from "@/api/render";

import { TimeSection } from "../_internal/components/client/TimeSection";

const getTimeStamp = async () => {
  const res = await fetch(`${getApiServerURL()}/time/getTimestamp`, {
    cache: "no-cache",
  });
  const resJSON = (await res.json()) as
    | Omit<Result<number>, "axios">
    | undefined;

  return resJSON;
};

type SSRPageProps = unknown;

// @see https://nextjs.org/docs/app/guides/migrating/app-router-migration#server-side-rendering-getserversideprops
const SSRPage: FC<SSRPageProps> = async () => {
  const [_error, res] = await tryit(getTimeStamp)();

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
        title="SSR"
        description="Fetched every render, on server side."
        timestamp={res?.data}
      />
    </main>
  );
  // #endregion render functions end
};

export type { SSRPageProps };
export default SSRPage;
