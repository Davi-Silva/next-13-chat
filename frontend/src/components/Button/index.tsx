import React, { FC } from "react";
import { ButtonProps } from "./types";

import styles from "./index.module.scss";

const Button: FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
