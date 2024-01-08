import { ReactNode } from "react";

interface ListOfActivityContainerProps {
  children: ReactNode;
}

function ListOfActivityContainer({ children }: ListOfActivityContainerProps) {
  return (
    <>
      <div
        className={`flex w-full h-16 px-6 text-lg leading-tight text-gray-700 align-middle bg-white dark:bg-input-dark  shadow appearance-none focus:outline-none focus:shadow-outline dark:text-gray-300  `}
      >
        {children}
      </div>
    </>
  );
}

export default ListOfActivityContainer;
