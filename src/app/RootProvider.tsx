"use client";

import { FC, PropsWithChildren } from "react";

import { App } from "antd";

// @see https://ant.design/docs/react/use-with-next-cn#%E4%BD%BF%E7%94%A8-app-router
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
    <AntdRegistry>
      <App>{children}</App>
    </AntdRegistry>
  );
  // #endregion render functions end
};

export { RootProvider };
