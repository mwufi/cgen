import { json } from "@remix-run/node";

const secrets = [
  {
    name: "button",
    value: `<div className="flex flex-col">
  <div>this editor ... smh</div>
  <button className="bg-red-200 rounded-lg p-2 px-4 ">click me</button>
  </div>`,
  },
  {
    name: "checkbox",
    value: `<div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    `,
  },
];

const getRandomSecretValue = () => {
  const randomIndex = Math.floor(Math.random() * secrets.length);
  return secrets[randomIndex].value;
};

export async function action({ request }) {
  // Here, you can handle data fetching, database operations, etc.
  const requestData = await request.json();
  console.log("v3 - here is your random value", getRandomSecretValue()); // Outputs: "Hello, world!"

  let data = {
    message: "ok",
    inputText: getRandomSecretValue(),
  };
  console.log("sending", data);
  return json(data);
}
