import { ActionFunction, json } from "@remix-run/node";

const secrets = [
  {
    name: "button",
    value: `<div className="flex flex-col">
  <div>this editor ... smh</div>
  <button className="bg-red-200 rounded-lg p-2 px-4 ">click me</button>
  </div>`,
  },
  {
    name: "input",
    value: `<div className="flex flex-col">
  <div>this editor ... smh</div>
  <input className="bg-red-200 rounded-lg p-2 px-4 " />
  </div>`,
  },
  {
    name: "textarea",
    value: `<div className="flex flex-col">
  <div>this editor ... smh</div>
  <textarea className="bg-red-200 rounded-lg p-2 px-4 " />
  </div>`,
  },
];

const getRandomSecretValue = () => {
  const randomIndex = Math.floor(Math.random() * secrets.length);
  return secrets[randomIndex].value;
};

export async function action({ request }) {
  // Here, you can handle data fetching, database operations, etc.
  const requestData = await request.json();
  console.log("v2 - I HEEEEEARD", requestData.inputText); // Outputs: "Hello, world!"

  let data = {
    message: "ok",
    inputText: requestData.inputText,
  };
  console.log("sending", data);
  return json(data);
}
