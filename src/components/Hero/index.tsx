import MaxWidthWrapper from "../Reusable/Container";
import StyledText from "../Reusable/StyledText";
import HeroIllustration from "./HeroIllustration";
import HeroText from "./HeroText";

export const Hero = () => {
  return (
    <section className="relative">
      <MaxWidthWrapper className="px-0 pb-32 sm:px-12 sm:pb-32 md:px-16 md:pb-32">
        <div className="mb-28 flex flex-col gap-2 text-center">
          <StyledText className="text-highlight-green">Success stories</StyledText>
          <h1>
            Every success journey <br /> we've encountered.
          </h1>
        </div>
        <div className="grid items-center justify-center gap-0 md:gap-24 xl:grid-cols-8">
          <HeroIllustration />
          <HeroText />
        </div>
        <img className="absolute  -right-8 top-1/3 -z-10 w-[256px] md:top-1/4 md:w-auto lg:bottom-56" src={"/hero-vertor-illustration.svg"} alt="background-image" />
      </MaxWidthWrapper>
    </section>
  );
};
