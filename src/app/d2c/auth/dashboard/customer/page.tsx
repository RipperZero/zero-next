"use client";

import { FC, use } from "react";

import Box from "@mui/material/Box";

import { NavigationSection } from "../layout/NavigationSection";
import { CustomerList } from "./CustomerList";

type PageProps = {
  /**
   * An object containing the [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
   * from the root segment down to that page.
   *
   * @see [Page Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional)
   */
  params: Promise<unknown>;
  /**
   * An object containing the search parameters of the current URL.
   *
   * @see [Layout Searchparams → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
   */
  searchParams: Promise<unknown>;
};

const Page: FC<PageProps> = ({ params, searchParams }) => {
  // #region hooks start
  const {} = use(params) ?? {};
  const {} = use(searchParams) ?? {};

  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f9fafc",
        position: "relative",
      }}
      data-model-id="29019:3129"
    >
      <NavigationSection />
      <CustomerList />
    </Box>
  );
  // #endregion render functions end
};

export type { PageProps };
export default Page;
