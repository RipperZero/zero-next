import { Link } from "next-view-transitions";
import Image from "next/image";
import { LinkProps } from "next/link";

import { FC } from "react";

import { Space } from "antd";

import { Tilt } from "@/shared/components/client";

import { TypedJS } from "./_internal/components/client";

const LINKS: Array<{
  href: LinkProps<undefined>["href"];
  title: string;
  description: string;
}> = [
  {
    href: "/chart-js",
    title: "ChartJs",
    description: "ChartJs Demo",
  },
  {
    href: "/css-layout",
    title: "CssLayout",
    description: "CssLayout Demo",
  },
  {
    href: "/big-eye",
    title: "BigEye",
    description: "BigEye Demo",
  },
  {
    href: "/react-flow",
    title: "ReactFlow",
    description: "ReactFlow Demo",
  },
  {
    href: "/dashboard-example/dashboard",
    title: "Dashboard",
    description: "Next Learn → Dashboard",
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Next Blog Demo",
  },
  {
    href: "/test-compiler",
    title: "TestCompiler",
    description: "Test React Compiler",
  },
  // {
  //   href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
  //   title: "Learn",
  //   description:
  //     "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  // },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
];

const RootPage: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex w-full place-items-center">
        <Space className="w-full place-items-center" direction="vertical">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <TypedJS strings={["NEXT.JS", "The React Framework for the Web"]} />
        </Space>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ href, title, description }) => {
          return (
            <Link key={title} href={href}>
              <Tilt
                key={title}
                className="group rounded-lg border border-transparent px-5 py-4 text-blue-600 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {`${title} `}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {description}
                </p>
              </Tilt>
            </Link>
          );
        })}

        {/* <Counter serverComponent={<ExampleServer />}></Counter> */}
      </div>
    </main>
  );
};

export default RootPage;
