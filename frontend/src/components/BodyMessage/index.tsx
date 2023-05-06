"use client";

import React, { FC, useState } from "react";

import data from "./data";

import styles from "./index.module.scss";
import { BodyMessageProps } from "./types";

const BodyMessage: FC<BodyMessageProps> = ({ user }) => {
  return (
    <>
      {user && (
        <div className={styles.container}>
          {data.map((message, index) => (
            <div
              key={index}
              className={`${
                message.username === user?.username ? styles.userMessage : null
              }`}
            >
              <div className={styles.message}>
                <span>{message.name}</span>
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BodyMessage;
