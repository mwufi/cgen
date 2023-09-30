import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import posts from "~/posts";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { ContextMenuDemo } from "~/components/pages/ContextMenuDemo";
import { PopoverDemo } from "~/components/pages/PopoverDemo";
import { OriginalPopoverDemo } from "~/components/pages/OriginalPopoverDemo";

export const meta: MetaFunction = () => [{ title: "The App" }];

export function loader() {
  return { posts };
}

function NewsWebsite({ newsArticles }) {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <header className="bg-gray-800 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">News Today</h1>
      </header>

      <main className="p-6">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="mb-6 border-b-2 border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {article.summary}
            </p>
            <a href={article.link} className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </main>

      <footer className="bg-gray-800 text-white p-6 mt-10">
        <p>
          &copy; {new Date().getFullYear()} News Today. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function TransactionTracker({ transactions }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Transaction Tracker</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-700 dark:text-gray-300">
            <thead>
              <tr>
                <th className="border-b py-3 px-6 text-left">Date</th>
                <th className="border-b py-3 px-6 text-left">Description</th>
                <th className="border-b py-3 px-6 text-left">Category</th>
                <th className="border-b py-3 px-6 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="py-3 px-6">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6">{transaction.description}</td>
                  <td className="py-3 px-6">{transaction.category}</td>
                  <td
                    className={`py-3 px-6 text-right ${
                      transaction.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    ${transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TransactionTracker2({ transactions }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Transaction Tracker</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-700 dark:text-gray-300">
            <thead>
              <tr>
                <th className="border-b py-3 px-6 text-left">Date</th>
                <th className="border-b py-3 px-6 text-left">Description</th>
                <th className="border-b py-3 px-6 text-left">Category</th>
                <th className="border-b py-3 px-6 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="py-3 px-6">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6">{transaction.description}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium 
                      ${categoryBadgeColor(transaction.category)}`}
                    >
                      {transaction.category}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-6 text-right ${
                      transaction.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    ${transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function categoryBadgeColor(category) {
  switch (category) {
    case "Food & Dining":
      return "bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-300";
    case "Income":
      return "bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-300";
    case "Shopping":
      return "bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-300";
    case "Bills & Utilities":
      return "bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-300";
    default:
      return "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
  }
}

export default function Index() {
  const user = useOptionalUser();
  const { posts } = useLoaderData();

  const sampleTransactions = [
    {
      date: "2023-01-01",
      description: "Starbucks",
      category: "Food & Dining",
      amount: -5.0,
    },
    {
      date: "2023-01-01",
      description: "Starbucks",
      category: "Food & Dining",
      amount: -5.0,
    },
    {
      date: "2023-01-01",
      description: "Starbucks",
      category: "Food & Dining",
      amount: -5.0,
    },
    {
      date: "2023-01-02",
      description: "Paycheck",
      category: "Income",
      amount: 1500.0,
    },
    // ... other transactions
  ];

  return (
    <div className="border p-5">
      <OriginalPopoverDemo />
    </div>
  );
}
