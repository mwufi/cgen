import { ActionFunction, json } from "@remix-run/node";

export let action: ActionFunction = async ({ request }) => {
  // Here, you can handle data fetching, database operations, etc.
  const requestData = await request.json();
  console.log("I HEEEEEARD", requestData.inputText); // Outputs: "Hello, world!"

  let data = { message: "Hello, world!", inputText: requestData.inputText };
  return json(data);
};

export default function SomeDataEndpoint() {
  // This won't be executed since we're just using this route as an API endpoint.
  return null;
}
