import { Link } from "react-router-dom";
import MaxWidthWrapper from "../Reusable/Container";
import StyledText from "../Reusable/StyledText";
import Form from "./Form";

export const Register = () => {
  return (
    <div>
      <div className="mb-24 flex h-[80px] items-center justify-between rounded-full px-4 md:h-[128px] md:px-14 lg:mb-16">
        <img src={"/assets/icons/company_icon.png"} alt="company logo" className="w-[80px] md:w-[102px] lg:w-auto" />
        <Link to={"/"} className="flex size-[32px] items-center justify-center rounded-full border border-[#CACACA] p-0 md:size-[48px] lg:size-[64px]">
          <img src={"/assets/icons/close-icon.svg"} alt="close icon" className="w-[24px] md:w-[32px] lg:w-auto" />
        </Link>
      </div>
      <MaxWidthWrapper width={588} className="p-6">
        <div className="mb-16 text-center">
          <StyledText className="mb-4 text-highlight-green">Registration Form</StyledText>
          <h1>Start your success Journey here!</h1>
        </div>
        <Form />
      </MaxWidthWrapper>
    </div>
  );
};
