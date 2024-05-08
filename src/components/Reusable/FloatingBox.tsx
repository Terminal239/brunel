import clsx from "clsx";
import { ReactNode } from "react";
import { Parallax } from "react-scroll-parallax";

interface Props {
  className?: string;
  children: ReactNode;
  isParallax: boolean;
}

const FloatingBox: React.FC<Props> = ({ children, className, isParallax }) => {
  const classes = clsx("floating-container-shadow absolute", className);

  if (isParallax)
    return (
      <Parallax speed={-4} className={classes}>
        {children}
      </Parallax>
    );

  return <div className={classes}>{children}</div>;
};

export default FloatingBox;
