"use client";

import { useState, useRef, useEffect } from "react";

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
function Iframe({contents}) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if(iframeRef.current === null) return;

    const iframeContentWindow = iframeRef.current.contentWindow;

    const script1 = document.createElement("script");
    script1.src = "https://unpkg.com/react@17/umd/react.development.js";
    script1.type = "text/javascript";
    iframeContentWindow.document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://unpkg.com/react-dom@17/umd/react-dom.development.js";
    script2.type = "text/javascript";
    iframeContentWindow.document.head.appendChild(script2);

    // Load TailwindCSS
    const tailwindLink = document.createElement("link");
    tailwindLink.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    tailwindLink.rel = "stylesheet";
    iframeContentWindow.document.head.appendChild(tailwindLink);

    // Add more scripts or styles if needed

    script2.onload = () => {
      iframeContentWindow.ReactDOM.render(
        iframeContentWindow.React.createElement(
          "div",
          { className: "px-4 bg-blue-100" },
          contents || "Calendar content goes here or the Calendar component itself",
        ),
        iframeRef.current.contentDocument.body,
      );
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{ width: "100%", height: "400px", border: "none" }}
    ></iframe>
  );
}

export default function TwoColumnLayout() {
  const contentz = `<div className="flex h-screen">
{/* Chat Panel */}
<div className="flex-1 bg-red-200 p-4 overflow-y-auto">
hello world
</div>
</div>`;

  return (
    <div className="flex h-screen">
      {/* Chat Panel */}
      <div className="flex-1 bg-gray-200 p-4 overflow-y-auto">
        <ChatPanel />
      </div>

      {/* Iframe Panel */}
      <div className="flex-1 p-4">
        <Iframe contents={contentz} />
      </div>
    </div>
  );
}
