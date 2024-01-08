import { Dispatch, SetStateAction } from "react";

interface InputAreaInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

function InputAreaInput({ input, setInput }: InputAreaInputProps) {
  return (
    <input
      className="w-full h-16 border-none input dark:bg-input-dark dark:text-gray-300"
      id="username"
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Digite uma tarefa e aperte enter"
    />
  );
}

export default InputAreaInput;
