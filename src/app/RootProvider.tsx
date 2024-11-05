"use client";

import { FC, PropsWithChildren } from "react";

import { App } from "antd";

import { AntdStyleProvider } from "@/shared/lib/client";

type RootProviderProps = unknown;

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
    <AntdStyleProvider>
      <App>{children}</App>
    </AntdStyleProvider>
  );
  // #endregion render functions end
};

export { RootProvider };
