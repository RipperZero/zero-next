import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

type PostData = {
  date: string;
  title: string;
};

const postsDirectory = join(process.cwd(), "posts");

const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map<{ id: string } & PostData>((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as PostData),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

const getPostData = async (id: string) => {
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as PostData),
  };
};

// const getAllPostIds = () => {
//   const fileNames = readdirSync(postsDirectory);

//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// };

export { getSortedPostsData, getPostData };
