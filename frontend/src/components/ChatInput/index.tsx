import React, { FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import styles from "./index.module.scss";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(message);
  };

  const onChange = (e: any) => {
    const value = e.currentTarget.value;
    setMessage(value);
  };

  return (
    <div className={styles.container}>
      <form action="POST" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
