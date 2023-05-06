"use client";

import React from "react";
import crypto from "crypto";
import { useRouter } from "next/navigation";

import Button from "../../components/Button";

const Rooms = () => {
  const router = useRouter();

  const onCreateRoom = () => {
    const hash = crypto.randomBytes(16).toString("hex");
    router.push(`/chat/${hash}`);
  };

  return (
    <div>
      <Button label="Create Room" type="button" onClick={onCreateRoom} />
    </div>
  );
};

export default Rooms;
