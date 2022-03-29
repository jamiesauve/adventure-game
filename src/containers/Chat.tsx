import type { Component } from 'solid-js';

import styles from './chat.module.css';

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
    <div class={styles.chatWindow}>
      <div class={styles.messageFeed}>
        {messages.map(message => (
          <div class={styles.message}>
            {message.text}
          </div>
        ))}
      </div>

      <div
        class={styles.inputArea}
      >
        <textarea
          class={styles.messageInput}
        />

        <button
          class={styles.sendButton}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
