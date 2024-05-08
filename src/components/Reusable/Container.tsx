import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  width?: number;
}

const DEFAULT = 1360;
const MaxWidthWrapper: React.FC<Props> = ({ className, width, children }) => {
  const classes = clsx(`mx-auto`, className);
  return (
    <div className={classes} style={{ maxWidth: width ? width : DEFAULT }}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
