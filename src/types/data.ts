import { ReactNode } from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "gold" | "default";
  className?: string;
  children: ReactNode;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => void;
};
