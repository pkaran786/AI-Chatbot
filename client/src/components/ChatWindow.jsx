import React, { useState } from "react";
import axios from "axios";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await axios.post("http://localhost:5000/api/chat", {
      message: input,
    });

    const botMsg = { role: "bot", text: res.data.reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="border h-96 overflow-y-scroll p-4 rounded bg-gray-100 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.role === 'user' ? 'bg-blue-200' : 'bg-green-100'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        placeholder="Say something in Spanish..."
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white p-2 w-full rounded"
      >
        Send
      </button>
    </div>
  );
}

export default ChatWindow;
