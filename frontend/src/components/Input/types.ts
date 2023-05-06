import { Dispatch } from "react";

export type InputProps = {
  placeholder?: string;
  setState: Dispatch<React.SetStateAction<string>>;
};
