import { HTMLInputTypeAttribute, ReactNode, useState } from "react";

interface Props {
  name: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  placeholder: string;
  errorMessage?: string;
}

interface Export {
  element: ReactNode;
  data: string;
  showError: () => void;
}

const ERROR_DISPLAY_TIME = 5000;
const useInput = ({ name, type, placeholder, className, errorMessage }: Props): Export => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState("");

  const showError = () => {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, ERROR_DISPLAY_TIME);
  };

  const element = (
    <div className="w-full">
      <input className={`${className}`} type={type} name={name} value={data} placeholder={placeholder} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setData(event.target.value)} />
      {isError && (
        <div className="mt-3 flex items-center gap-2 text-base text-error">
          <img className="size-[20px]" src={"/assets/icons/error.svg"} alt="icon error" /> <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );

  return { element, data, showError };
};

export default useInput;
