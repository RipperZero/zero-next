import { Metadata } from "next";

import { FC, PropsWithChildren, use } from "react";

import dayjs from "dayjs";

import { SITE_TITLE } from "./_internal/constants/constants";

// revalidate this page every 60 seconds
export const revalidate = 60;

const metadata: Metadata = {
  icons: "/favicon.ico",
  description: "Learn how to build a personal website using Next.js",
  openGraph: {
    title: SITE_TITLE,
    images: [
      {
        url: `https://og-image.vercel.app/${encodeURI(
          SITE_TITLE,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
      },
    ],
  },
};

type BlogLayoutProps = {
  /**
   * The [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) object
   * from the root segment down to that layout.
   *
   * @see [Layout Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/layout#params-optional)
   */
  params: Promise<unknown>;
};

// @see https://nextjs.org/docs/app/api-reference/file-conventions/layout#props
const BlogLayout: FC<PropsWithChildren<BlogLayoutProps>> = ({
  params,
  children,
}) => {
  // #region hooks start
  const {} = use(params) ?? {};

  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>BlogLayout build time {dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
      {children}
    </div>
  );
  // #endregion render functions end
};

export type { BlogLayoutProps };
export default BlogLayout;
export { metadata };
