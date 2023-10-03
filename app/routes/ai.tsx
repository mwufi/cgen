"use client";

import { useState, useRef, useEffect } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { SendHorizonal } from "lucide-react";

function ChatPanel({ onSubmit }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");

      const data = {
        inputText: inputValue,
      };

      onSubmit(data);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-auto mb-4 p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className="bg-blue-500 text-white rounded p-2">
            {message}
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <form className="flex" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-l-md px-4 py-2 flex-grow mr-0 focus:outline-none focus:border-blue-300"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-md border-2 border-blue-500 flex items-center justify-center px-4"
            onClick={handleSendMessage}
            type="submit"
          >
            <SendHorizonal />
          </button>
        </form>
      </div>
    </div>
  );
}

export default function TwoColumnLayout() {
  const [contentz, setContentz] = useState(`<div className="flex flex-col">
    <div>this editor ... smh</div>
    <button className="bg-red-200 rounded-lg p-2 px-4 ">click me</button>
    </div>`);

  const callAI = (data) => {
    fetch("/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // here, we'll set the iframe content
        console.log("setting contents to", data); // Outputs: "Hello, world!"
        setContentz(data.inputText);
      })
      .catch((e) => {
        console.log("errrrrr!!", e);
      });
  };

  return (
    <div className="flex h-screen">
      {/* Chat Panel */}
      <div className="flex-1 bg-gray-200 p-4 overflow-y-auto">
        <ChatPanel onSubmit={callAI} />
      </div>

      {/* Iframe Panel */}
      <div className="flex-1 p-4 flex flex-col">
        <LiveProvider code={contentz}>
          <LiveEditor />
          <LiveError />
          <div className="py-4">
            <LivePreview />
          </div>
        </LiveProvider>
      </div>
    </div>
  );
}
