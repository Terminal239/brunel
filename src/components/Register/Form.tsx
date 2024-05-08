import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import Button from "../Reusable/Button";
import MaxWidthWrapper from "../Reusable/Container";

const Form = () => {
  const navigate = useNavigate();
  const { data: name, element: NameInput } = useInput({ name: "name", placeholder: "Enter your name", type: "text" });
  const { data: email, element: EmailInput, showError: emailError } = useInput({ name: "email", placeholder: "Enter your email", type: "email", errorMessage: "Enter a valid email address" });

  const handleSubmit = (name: string, email: string) => {
    console.log(name, email);

    const flags = "gm";
    const pattern = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}";
    const regexPattern = new RegExp(pattern, flags);

    if (!email.match(regexPattern)) {
      emailError();
      return;
    }

    navigate("/success");
  };

  return (
    <MaxWidthWrapper width={417} className="flex flex-col gap-6 md:gap-12">
      <form className="flex flex-col gap-2 md:gap-6">
        {NameInput}
        {EmailInput}
      </form>
      <Button disabled={name.length == 0 || email.length == 0} onClick={() => handleSubmit(name, email)} type="primary">
        Submit
      </Button>
    </MaxWidthWrapper>
  );
};

export default Form;
