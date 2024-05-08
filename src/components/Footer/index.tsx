import MaxWidthWrapper from "../Reusable/Container";

export const Footer = () => {
  return (
    <footer className="p-4 pt-0 md:p-6 xl:p-8">
      <MaxWidthWrapper className="flex flex-col items-center justify-between rounded bg-footer-background p-6 md:flex-row md:rounded-[24px] md:px-10 md:py-12 lg:rounded-[40px] xl:px-12 xl:py-14">
        <div className="mb-4 flex items-center gap-2.5 md:mb-0">
          <img className="size-[16px] xl:size-[20px]" src={"/assets/icons/copyright.svg"} alt="copyright symbol" />
          <span className="text-[14px] font-medium leading-[1.1] text-button md:text-base xl:text-[18px]">Talup 2023. All rights reserved</span>
        </div>
        <div className="flex items-center gap-8 lg:gap-14">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
