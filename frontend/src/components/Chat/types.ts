export type ChatProps = {
  room: { [key: string]: any };
};

export type User = {
  username: string;
  name: string;
};

export type Message = { username: string; name: string; message: string };
