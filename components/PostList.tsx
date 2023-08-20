import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul 
      className={cx("grid grid-cols-1 md:grid-cols-3 gap-4", "divide-y md:divide-y-0", "divide-gray-200", "dark:divide-gray-700")}
    >
      {posts.map((post, index) => {
        return (
          <li 
            className="py-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800" 
            key={index}
          >
            <article className="p-4 border rounded-md hover:border-transparent">
              
              {/* Display the image from the frontmatter */}
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-40 rounded-md object-cover mb-4" />
              )}
              
              <time className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}>
                {formatDate(post.date)}
              </time>
              <h2 className="font-bold text-xl">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description ? (
                <div className="mt-3">
                  <Prose>
                    <p>{post.description}</p>
                  </Prose>
                </div>
              ) : null}
              {post.tags ? (
                <ul className="mt-4 flex flex-wrap space-x-2">
                  {post.tags.slice(0, 5).map((tag, index) => { // Only show the top 5 tags
                    return (
                      <li key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
          </li>
        );
      })}
    </ul>
  );
};
