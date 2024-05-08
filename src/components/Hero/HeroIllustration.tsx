import FloatingBox from "../Reusable/FloatingBox";

const HeroIllustration = () => {
  return (
    <div className="relative mb-32 xl:col-span-5 xl:mb-0">
      <img src={"/hero-image.png"} alt="girl surprised" className="mx-auto w-[256px] md:w-[512px] xl:w-auto" />
      <FloatingBox isParallax={true} className="-left-10 top-6 w-[146px] rounded-3xl bg-white p-4 md:-left-20 md:top-24 md:w-[216px] md:p-5 xl:left-0 xl:w-[267px] xl:p-7">
        <img src={"/percent-increase.svg"} alt="reducton in execution time" className="-ml-4 -mt-4 w-[60px] md:w-[120px] xl:-ml-10 xl:-mt-10 xl:w-auto" />
        <p className="text-[12px] md:text-base xl:text-[18px]">Achieved reduction in project execution time by optimising team availability</p>
      </FloatingBox>
      <FloatingBox isParallax={true} className="-left-8 bottom-2 flex w-[196px] items-center gap-4 rounded-full bg-white p-2 pr-8 md:-left-12 md:bottom-12 md:w-[245px] md:p-4 xl:left-16">
        <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-icon-background md:size-[52px]">
          <img className="size-[24px] xl:size-[32px]" src={"/rocket.svg"} alt="icon of a rocket" />
        </div>
        <div className="min-w-max">
          <span className="font-semibold uppercase md:text-2xl">10 Days</span>
          <p className="text-[12px] md:text-base xl:text-[18px]">Staff Deployment</p>
        </div>
      </FloatingBox>
      <FloatingBox isParallax={true} className="-bottom-20 -right-10 w-[156px] rounded-3xl bg-floating-box-1 p-4  text-white md:-bottom-8 md:-right-16 md:w-[256px] md:p-6 md:pb-8 lg:rounded-[28px] xl:right-0 xl:w-[290px] xl:p-8 xl:pb-10">
        <img src={"/statistic.svg"} className="mb-4 w-[96px] md:w-[180px] xl:mb-5 xl:w-auto" />
        <p className="text-[12px] text-[#CCCCCC] md:text-base xl:text-[18px]">Reduced client expenses by saving on hiring and employee costs.</p>
      </FloatingBox>
    </div>
  );
};

export default HeroIllustration;
