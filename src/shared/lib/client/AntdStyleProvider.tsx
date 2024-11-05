"use client";

import { useServerInsertedHTML } from "next/navigation";

import { FC, PropsWithChildren, useState } from "react";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

// @see https://ant.design/docs/react/use-with-next-cn#%E4%BD%BF%E7%94%A8-nextjs-%E7%9A%84-app-router

const NormalStyleProvider: FC<PropsWithChildren> = ({ children }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <StyleProvider
    // hashPriority="high"
    >
      {children}
    </StyleProvider>
  );
  // #endregion render functions end
};

const CachedStyleProvider: FC<PropsWithChildren> = ({ children }) => {
  // #region hooks start
  // @see https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-jsx
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <StyleProvider
      cache={cache}
      // hashPriority="high"
    >
      {children}
    </StyleProvider>
  );
  // #endregion render functions end
};

const AntdStyleProvider: FC<PropsWithChildren> = ({ children }) => {
  // #region render functions start
  return process.env.NODE_ENV === "production" ? (
    <CachedStyleProvider>{children}</CachedStyleProvider>
  ) : (
    <NormalStyleProvider>{children}</NormalStyleProvider>
  );
  // #endregion render functions end
};

export { AntdStyleProvider };
