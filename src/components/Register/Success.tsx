import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../Reusable/Container";
import StyledText from "../Reusable/StyledText";

const REDIRECT_TIME = 5;
export const Success = () => {
  const [timer, setTimer] = useState(REDIRECT_TIME);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: number | undefined;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      navigate("/");
    }

    return () => clearInterval(interval);
  }, [timer, navigate]);

  return (
    <div>
      <div className="mb-16 flex h-[80px] items-center rounded-full px-4 md:h-[128px] md:px-14">
        <img src={"/company_icon.png"} alt="company logo" className="w-[102px] lg:w-auto" />
      </div>
      <MaxWidthWrapper width={718} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={"/success.svg"} alt="icon success" className="mx-auto mb-10 size-[80px]" />
        <div className="mb-16 text-center">
          <StyledText className="mb-4 text-highlight-green">Registration Form</StyledText>
          <h1 className="mb-6">Congratulations</h1>
          <p className="font-medium leading-normal md:text-[20px] lg:text-[27px]">Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
        </div>
      </MaxWidthWrapper>
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center font-[20px] md:text-left">
        Redirecting you to Homepage in <span className="font-bold text-button">{timer} Seconds</span>
      </p>
    </div>
  );
};
