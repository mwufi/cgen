import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import posts from "~/posts";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export function loader() {
  return { posts };
}

function TweetInput({ onTweet }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="What's happening?"
      ></textarea>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Tweet
      </button>
    </div>
  );
}
function HNArticle({ title, url, points, user, time }) {
  return (
    <ul className="bg-white border rounded-md shadow p-3">
      <li className="hover:bg-gray-50 p-2">
        <div className="flex gap-2 items-center">
          {/* Voting section */}
          <div className="flex flex-col items-center mr-4">
            <button className="mb-1 text-gray-400 hover:text-orange-600">
              ▲
            </button>
            <button className="mt-1 text-gray-400 hover:text-orange-600">
              ▼
            </button>
          </div>

          {/* Title and URL */}
          <div className="flex flex-col flex-grow">
            <a href={url} className="text-orange-600 hover:underline mb-1">
              {title}
            </a>
            <span className="text-gray-400 text-sm">{url}</span>
          </div>

          {/* Points, user info */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-600">
              {points} comments | by{" "}
              <Link to="#" className="text-gray-800 hover:underline">
                {user}
              </Link>{" "} | {" "}
              {time} ago
            </span>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default function Index() {
  const user = useOptionalUser();
  const { posts } = useLoaderData();

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="flex flex-col w-full max-w-screen-md">
        <TweetInput onTweet={null} />
        {posts.map((post) => (
          <HNArticle
            title={post.title}
            url={post.url}
            points={post.points}
            user={post.user}
            time={post.time}
          />
        ))}
      </div>
    </main>
  );
}
