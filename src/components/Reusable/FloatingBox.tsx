import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const FloatingBox: React.FC<Props> = ({ children, className }) => {
  const classes = clsx("floating-container-shadow absolute", className);

  return <div className={classes}>{children}</div>;
};

export default FloatingBox;
