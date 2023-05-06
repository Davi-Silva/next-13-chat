import { FC, FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import styles from "./index.module.scss";
import { ChatInputProps } from "./types";

const ChatInput: FC<ChatInputProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.length > 0) {
      sendMessage(message);

      setMessage("");
    }
  };

  const onChange = (e: any) => {
    const value = e.currentTarget.value;
    setMessage(value);
  };

  return (
    <div className={styles.container}>
      <form action="POST" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={message} />
        <button type="submit">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
