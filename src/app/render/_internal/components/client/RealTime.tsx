"use client";

import { FC } from "react";

import { useRealTime } from "../../hooks/useRealTime";

type RealTimeProps = unknown;

const RealTime: FC<RealTimeProps> = () => {
  // #region hooks start
  const realTime = useRealTime();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <p className="text-[#00E0F3]">{realTime}</p>;
  // #endregion render functions end
};

export type { RealTimeProps };
export { RealTime };
