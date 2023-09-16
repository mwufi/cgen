import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

function HNArticle({ title, url, points, user, time }) {
  return (
    <ul className="bg-white border rounded-md shadow">
      <li className="border-b p-2 hover:bg-gray-50">
        <div className="flex items-center gap-2">
          <a href={url} className="text-orange-600 hover:underline">
            {title}
          </a>
          <span
            className="text-gray-400 text-sm mr-auto"
          >
            {url}
          </span>
          <span className="text-sm text-gray-400">
            {points} points by <Link to="#" className="hover:underline">{user}</Link> {time} ago
          </span>
        </div>
      </li>
    </ul>
  );
}

export default function Index() {
  const user = useOptionalUser();

  // Add more sample posts for demonstration purposes.
  const posts = [
    {
      title: "Java 21 makes me like Java again",
      url: "wscp.dev",
      points: 100,
      user: "user1",
      time: "1 hour",
    },
    {
      title: "Why Python is awesome",
      url: "github.com/kbre93",
      points: 50,
      user: "user2",
      time: "2 hours",
    },
    {
      title: "Exploring Rust for Web Development",
      url: "github.com/jesseduffield",
      points: 70,
      user: "user3",
      time: "3 hours",
    },
    // ... Add more samples up to 10 or any desired number.
  ];

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="flex flex-col w-full max-w-screen-md">
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
