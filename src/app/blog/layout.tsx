import { Metadata } from "next";

import { FC, PropsWithChildren } from "react";

import { SITE_TITLE } from "./-internal/constants/constants";

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
  params: unknown;
};

const BlogLayout: FC<PropsWithChildren<BlogLayoutProps>> = ({
  params,
  children,
}) => {
  console.log("=====BlogLayout====params");
  console.log(params);
  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </div>
  );
  // #endregion render functions end
};

export default BlogLayout;
export { metadata };
