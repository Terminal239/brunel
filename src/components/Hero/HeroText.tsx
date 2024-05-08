import Button from "../Reusable/Button";

const HeroText = () => {
  return (
    <div className="mx-auto w-[296px] text-center md:w-[456px] xl:col-span-3 xl:mx-0 xl:text-left">
      <h2 className="mb-8 xl:mb-12">Enhance fortune 50 company’s insights teams research capabilities</h2>
      <div className="mb-20 flex justify-center gap-4 xl:mb-32 xl:justify-start">
        <div className="carousel-item active"></div>
        <div className="carousel-item"></div>
        <div className="carousel-item"></div>
      </div>
      <Button type="primary" className="mx-auto flex items-center gap-4 xl:mx-0">
        Explore More <img src={"/assets/icons/right-arrow.svg"} alt="icon right arrow" />
      </Button>
    </div>
  );
};

export default HeroText;
