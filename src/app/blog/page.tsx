import { Metadata, Route } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { FC, use } from "react";

import { Date } from "./_internal/components";
import { NAME, SITE_TITLE } from "./_internal/constants/constants";
import { getSortedPostsData } from "./_internal/lib/posts";
import utilStyles from "./_internal/styles/utils.module.css";

const metadata: Metadata = {
  title: SITE_TITLE,
};

// BUG getStaticProps only can use in Page router
// export const getStaticProps: GetStaticProps<{
//   allPostsData: ReturnType<typeof getSortedPostsData>;
// }> = async () => {
//   const allPostsData = getSortedPostsData();

//   return {
//     props: {
//       allPostsData: allPostsData,
//     },
//   };
// };

// type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

// const Blog: FC<BlogProps> = ({ allPostsData }) => {
// const generateStaticParams = async () => {
//   const allPostsData = await getSortedPostsData();
//   console.log("-----generateStaticParams");
//   console.log(allPostsData);

//   return allPostsData;
// };

type BlogPageProps = {
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

const BlogPage: FC<BlogPageProps> = ({ params, searchParams }) => {
  const allPostsData = getSortedPostsData();
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
    <>
      <header className="flex flex-col items-center">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="profile"
        />
        <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
      </header>

      <main>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData?.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/blog/post/${id}` as Route}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <div className="mt-12">
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
  // #endregion render functions end
};

export type { BlogPageProps };
export default BlogPage;
export { metadata };
