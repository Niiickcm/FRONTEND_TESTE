import { Dispatch, ReactNode, SetStateAction } from "react";

interface InputAreaFormProps {
  children: ReactNode;
  handleSubmit: any;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

function InputAreaForm({
  handleSubmit,
  children,
  input,
  setInput,
}: InputAreaFormProps) {
  return (
    <form
      className="flex-1"
      onSubmit={(e) => {
        {
          handleSubmit(e, input);
          setInput("");
        }
      }}
    >
      {children}
    </form>
  );
}

export default InputAreaForm;
