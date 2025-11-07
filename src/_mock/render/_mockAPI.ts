import dayjs from "dayjs";
import { sleep } from "radash";

import { Result } from "@/shared/utils/createAxiosInstance";

type Res<T> = Omit<Result<T>, "axios">;

type _QueryTimestampRes = Res<number>;

const _queryTimestamp = async () => {
  const timestamp = dayjs().unix();

  const res: _QueryTimestampRes = {
    result: true,
    code: "",
    message: "",
    data: timestamp,
  };

  await sleep(2000);

  return res;
};

export type { _QueryTimestampRes };
export { _queryTimestamp };
