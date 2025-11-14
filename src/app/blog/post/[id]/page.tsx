import { Metadata, ResolvingMetadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { FC } from "react";

import { Date } from "../../_internal/components";
import { NAME } from "../../_internal/constants/constants";
import { getPostData } from "../../_internal/lib/posts";
import utilStyles from "../../_internal/styles/utils.module.css";

type RouteProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const generateMetadata = async (
  routeProps: RouteProps,
  // _parentResolvingMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  const id = (await routeProps.params).id;
  const postData = await getPostData(id);

  return {
    title: postData.title,
  };
};

type PostPageProps = {
  /**
   * An object containing the [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
   * from the root segment down to that page.
   *
   * @see [Page Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional)
   */
  params: RouteProps["params"];
  /**
   * An object containing the search parameters of the current URL.
   *
   * @see [Layout Searchparams → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
   */
  searchParams: RouteProps["searchParams"];
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
  const id = (await params).id;
  const postData = await getPostData(id);
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <header className="flex flex-col items-center">
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/blog" className={utilStyles.colorInherit}>
            {NAME}
          </Link>
        </h2>
      </header>

      <main className="grow">
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
    </>
  );
  // #endregion render functions end
};

export type { PostPageProps };
export default PostPage;
export { generateMetadata };
