import clsx from "clsx";
import { createPortal } from "react-dom";

interface Props {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay: React.FC<Props> = ({ showOverlay, setShowOverlay }) => {
  const classes = clsx("fixed inset-0 z-10 overflow-hidden bg-black/10", { "translate-x-0": showOverlay }, { "translate-x-[100%]": !showOverlay });
  return createPortal(<div onClick={() => setShowOverlay(false)} className={classes}></div>, document.body);
};

export default Overlay;
