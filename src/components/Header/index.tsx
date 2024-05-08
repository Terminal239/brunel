import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Button from "../Reusable/Button";
import Overlay from "../Reusable/Overlay";

export const Header = () => {
  const { width } = useWindowSize();
  const [showMobileNav, setshowMobileNav] = useState(false);

  const mobileNav = clsx("pt -shadow fixed inset-y-0 left-28 right-0 isolate z-20 flex size-full flex-col gap-4 bg-white p-6", { "translate-x-0": showMobileNav }, { "translate-x-[100%]": !showMobileNav });

  return (
    <header className="mb-20 p-4 md:p-6">
      <div className="flex items-center justify-between rounded border p-4 pl-6 md:rounded-full md:pl-10 xl:px-5 xl:py-4 xl:pl-12">
        <div>
          <img src={"/assets/icons/company_icon.svg"} className="w-[80px] md:w-[96px] xl:w-[120px]" />
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link to={"/register"}>
            <Button type="secondary">Get Projects</Button>
          </Link>
          <Button type="primary">Onboard talent</Button>
        </div>
        <button onClick={() => setshowMobileNav((prev) => !prev)} className="flex size-[32px] items-center justify-center rounded border border-[#CACACA] p-0 md:hidden">
          <img src={"/assets/icons/menu-icon.svg"} alt="close icon" className="w-[16px] lg:w-auto" />
        </button>
        {width! < 768 && createPortal(<Overlay setShowOverlay={setshowMobileNav} showOverlay={showMobileNav} />, document.body)}
        {width! < 768 && (
          <div className={mobileNav}>
            <Link className="text-[18px]" to={"/register"}>
              Get Projects
            </Link>
            <a className="text-[18px]">Onboard talent</a>
          </div>
        )}
      </div>
    </header>
  );
};
