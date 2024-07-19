import { Metadata, ResolvingMetadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { Date } from "../../_internal/components";
import { NAME } from "../../_internal/constants/constants";
import { getPostData } from "../../_internal/lib/posts";
import utilStyles from "../../_internal/styles/utils.module.css";

type RouteProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const generateMetadata = async (
  routeProps: RouteProps,
  _parentResolvingMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  const postData = await getPostData(routeProps.params.id);

  return {
    title: postData.title,
  };
};

type PostPageProps = { params: { id: string } };

const PostPage: AsyncFC<PostPageProps> = async ({ params }) => {
  const postData = await getPostData(params.id);

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

export default PostPage;
export { generateMetadata };
