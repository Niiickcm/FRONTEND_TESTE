import { Dispatch, ReactNode, SetStateAction } from "react";

interface InformationAndFilterDesktopProps {
  options: Array<string>;
  filter: number;
  setFilter: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

function InformationAndFilterDesktop({
  options,
  filter,
  setFilter,
  children,
}: InformationAndFilterDesktopProps) {
  return (
    <div className="flex justify-between w-full h-16 px-6 text-sm leading-tight text-gray-700 align-middle bg-white rounded-b-lg shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline dark:text-gray-300">
      {children}
      <div className="hidden my-auto gap-x-5 sm:flex">
        {options.map((item: any, i: number) => (
          <p
            className={
              (i === filter ? "text-blue-600 " : "") +
              "  hover:font-bold cursor-pointer"
            }
            key={item}
            onClick={() => {
              setFilter(i);
            }}
          >
            {item}
          </p>
        ))}
      </div>{" "}
    </div>
  );
}

export default InformationAndFilterDesktop;
