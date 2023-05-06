import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { HeaderProps } from "./types";

import styles from "./index.module.scss";

const Header: FC<HeaderProps> = ({ room }) => {
  return (
    <div className={styles.container}>
      <div className={styles.roomIdIconContainer}>
        <FaArrowLeft />
        <h1>{room.id}</h1>
      </div>
      <button className={styles.settingsBtn}>
        <span />
        <span />
        <span />
      </button>
    </div>
  );
};

export default Header;
