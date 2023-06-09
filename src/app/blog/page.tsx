// import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Route } from "next";
import Head from "next/head";
import Link from "next/link";

import { Date } from "./-internal/components/Date";
import { SITE_TITLE } from "./-internal/constants/constants";
import { getSortedPostsData } from "./-internal/lib/posts";
import utilStyles from "./-internal/styles/utils.module.css";

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

const Blog = async () => {
  const allPostsData = await getSortedPostsData();
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

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
              <Link href={`/posts/${id}` as Route}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
  // #endregion render functions end
};

export default Blog;
