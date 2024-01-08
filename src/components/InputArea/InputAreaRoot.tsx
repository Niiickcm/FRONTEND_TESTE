import { ReactNode } from "react";

interface InputAreaRootProps {
  children: ReactNode;
}

function InputAreaRoot({ children }: InputAreaRootProps) {
  return (
    <div
      id="#input"
      className="flex w-full h-16 px-6 my-12 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
    >
      {children}
    </div>
  );
}

export default InputAreaRoot;
