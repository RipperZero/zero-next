"use client";

import { FC, PropsWithChildren } from "react";

import { StyleProvider } from "@ant-design/cssinjs";
import { App } from "antd";

type RootProviderProps = {};

const RootProvider: FC<PropsWithChildren<RootProviderProps>> = ({
  children,
}) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <StyleProvider hashPriority="high">
      <App>{children}</App>
    </StyleProvider>
  );
  // #endregion render functions end
};

export { RootProvider };
