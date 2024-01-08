interface InformationAndFilterMobileProps {
  options: any;
  filter: any;
  setFilter: any;
}

function InformationAndFilterMobile({
  options,
  filter,
  setFilter,
}: InformationAndFilterMobileProps) {
  return (
    <div className="flex justify-center w-full h-16 px-6 mt-5 text-sm leading-tight text-gray-700 align-middle bg-white rounded-lg shadow appearance-none gap-x-5 sm:hidden dark:bg-input-dark focus:outline-none focus:shadow-outline dark:text-gray-300 ">
      {options.map((item: any, i: number) => (
        <p
          className={
            (i === filter ? "text-blue-600 " : "") +
            "  hover:font-bold cursor-pointer my-auto"
          }
          key={item}
          onClick={(e) => {
            setFilter(i);
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default InformationAndFilterMobile;
