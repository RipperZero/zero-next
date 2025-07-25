"use client";

import { FC, PropsWithChildren } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";

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
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        {/* must be used under CssProvider */}
        <CssBaseline />

        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
  // #endregion render functions end
};

export { RootProvider };
