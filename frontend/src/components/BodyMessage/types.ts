import { Message, User } from "../Chat/types";

export type BodyMessageProps = {
  user?: User;
  messages: Message[];
};
