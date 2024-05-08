import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  type: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: (...args: unknown[]) => unknown;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, className, type, disabled, onClick }) => {
  let typeSpecific = "";
  switch (type) {
    case "primary":
      typeSpecific = "btn-primary";
      break;
    case "secondary":
      typeSpecific = "btn-secondary";
      break;
  }

  const classes = clsx(typeSpecific, className);

  return (
    <button disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
