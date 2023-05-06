import React, { ChangeEvent, FC } from "react";
import styles from "./index.module.scss";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ placeholder, setState }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
