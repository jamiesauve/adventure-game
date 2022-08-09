import type { Component } from 'solid-js';

import './chat.scss';

interface Message {
  text: string;
}


const Chat: Component = () => {
  const messages: Message[] = [
    { text: "message 1" },
    { text: "message 2" },
    { text: "message 3" },
  ]

  return (
    <div class="chat">
      <div class="message-feed">
        {messages.map(message => (
          <div class="message">
            {message.text}
          </div>
        ))}
      </div>

      <div
        class="input-area"
      >
        <textarea
          class="message-input"
        />

        <button
          class="send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
