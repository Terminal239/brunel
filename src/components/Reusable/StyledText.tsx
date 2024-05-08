import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

const StyledText: React.FC<Props> = ({ children, className: color }) => {
  const classes = clsx("styled", color);
  return <p className={classes}>{children}</p>;
};

export default StyledText;
