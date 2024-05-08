import MaxWidthWrapper from "../Reusable/Container";
import StyledText from "../Reusable/StyledText";
import Accordion from "./Accordion";

export const FAQ = () => {
  return (
    <section className="mb-12 p-4 md:p-8">
      <MaxWidthWrapper className="relative rounded border bg-accordion-content p-6 md:rounded-[24px] md:p-12 lg:rounded-[40px] lg:p-16 xl:px-24 xl:pt-20">
        <StyledText className="mb-4 text-center text-highlight-gray lg:mb-4 xl:mb-12 xl:text-left">What’s on your mind</StyledText>
        <div className="flex flex-col xl:flex-row">
          <p className="mb-8 flex-1 text-center text-[24px] font-semibold text-button md:text-[40px] lg:mb-10 lg:text-[48px] xl:mb-0 xl:text-left xl:text-[60px]">Ask Questions</p>
          <Accordion />
        </div>
        <img className="absolute -right-24 -top-20 rotate-180 scale-[0.5] xl:-bottom-20" src={"/accordion-illustration.svg"} alt="an arrow facing north-east" />
      </MaxWidthWrapper>
    </section>
  );
};
