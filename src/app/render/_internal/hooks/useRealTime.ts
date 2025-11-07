import { useState } from "react";

import { useInterval } from "ahooks";
import dayjs from "dayjs";

const TIME_FORMAT = "HH:mm:ss UTC Z";

const useRealTime = () => {
  const [realTime, setRealTime] = useState(dayjs().format(TIME_FORMAT));

  useInterval(() => {
    setRealTime(dayjs().format(TIME_FORMAT));
  }, 1000);

  return realTime;
};

export { useRealTime, TIME_FORMAT };
