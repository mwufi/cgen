"use client";

import { useState } from "react";

function ChatPanel() {
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

      fetch("/api/completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message); // Outputs: "Hello, world!"
        });
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
        <form className="flex space-x-2" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="flex-grow rounded p-2 border"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded p-2"
            onClick={handleSendMessage}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default function TwoColumnLayout() {
  return (
    <div className="flex h-screen">
      {/* Chat Panel */}
      <div className="flex-1 bg-gray-200 p-4 overflow-y-auto">
        <ChatPanel />
      </div>

      {/* Iframe Panel */}
      <div className="flex-1 p-4">
        <iframe
          src="https://example.com"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
}
