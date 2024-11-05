"use client";

import { FC } from "react";

import { TypedJS } from "@/app/_internal/components/client";

type TestServerComponentProps = unknown;

const TestServerComponent: FC<TestServerComponentProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="h-screen">
      <TypedJS />
    </div>
  );
  // #endregion render functions end
};

export default TestServerComponent;
