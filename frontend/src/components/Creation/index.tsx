"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Input from "../Input";
import Button from "../Button";
import styles from "./index.module.scss";
import { setLocalStorage } from "@/utils/localStorage";

const Creation = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name?.length > 0 && username?.length > 0) {
      setLocalStorage("user", { name, username });

      router.push("/rooms");
    }
  };

  return (
    <form className={styles.form} method="POST" onSubmit={onSubmit}>
      <h1 className={styles.heading}>Register</h1>
      <Input placeholder="Name" setState={setName} />
      <Input placeholder="Username" setState={setUsername} />
      <Button label="Submit" type="submit" />
    </form>
  );
};

export default Creation;
