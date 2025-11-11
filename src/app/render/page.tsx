"use client";

import dynamic from "next/dynamic";

import { FC } from "react";

import { clsx } from "clsx";
import dayjs from "dayjs";

import { CustomLink } from "./_internal/components/CustomLink";
import styles from "./render.module.css";

const NoSSRRealTime = dynamic(
  () =>
    import("./_internal/components/client/RealTime").then(
      (mod) => mod.RealTime,
    ),
  { ssr: false },
);

type RenderPageProps = {
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

// @see https://theodorusclarence.com/blog/nextjs-fetch-method
const RenderPage: FC<RenderPageProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <main>
      <section className="bg-dark">
        <div
          className={clsx(
            styles["render-layout"],
            "flex min-h-screen flex-col items-center justify-center text-center text-white",
          )}
        >
          <h1 className="text-2xl md:text-4xl">
            <CustomLink href="https://github.com/RipperZero/zero-next/tree/main/src/app/render">
              Types of Next16 Rendering
            </CustomLink>
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Demo of Next.js rendering type using time API.
          </p>

          <div className="mt-4 flex flex-col items-center space-y-2">
            <CustomLink href="/render/csr">CSR</CustomLink>
            <CustomLink href="/render/ssr">SSR</CustomLink>
            <CustomLink href="/render/ssg">SSG</CustomLink>
            <CustomLink href="/render/isr">ISR</CustomLink>
            <CustomLink href="/render/isr-20">ISR 20s</CustomLink>
          </div>

          <footer className="absolute bottom-2 text-gray-500">
            © {dayjs().year()} · Adapted from{" "}
            <CustomLink href="https://theodorusclarence.com?ref=tsnextstarter">
              Theodorus Clarence
            </CustomLink>
            {" · Modified by "}
            <span className="font-medium">Zero</span>
          </footer>
        </div>

        <div className="absolute right-4 bottom-8 text-right text-sm font-medium sm:bottom-4">
          <p className="text-white">Real Time:</p>

          <NoSSRRealTime />
        </div>
      </section>
    </main>
  );
  // #endregion render functions end
};

export type { RenderPageProps };
export default RenderPage;
