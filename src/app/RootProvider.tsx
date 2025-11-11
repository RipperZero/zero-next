"use client";

import { Route } from "next";
import { usePathname } from "next/navigation";

import { FC, PropsWithChildren } from "react";

import { App } from "antd";

// @see https://ant.design/docs/react/use-with-next-cn#%E4%BD%BF%E7%94%A8-app-router
import { AntdRegistry } from "@ant-design/nextjs-registry";

type RootProviderProps = unknown;

const RootProvider: FC<PropsWithChildren<RootProviderProps>> = ({
  children,
}) => {
  // #region hooks start
  const pathname = usePathname();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  // ban Antd with path
  if (pathname.startsWith("/render" as Route)) {
    return children;
  }

  return (
    <AntdRegistry>
      <App>{children}</App>
    </AntdRegistry>
  );
  // #endregion render functions end
};

export { RootProvider };
