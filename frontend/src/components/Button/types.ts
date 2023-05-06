export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick?: () => void;
};
