import { MouseEvent } from "react";

interface ListOfActivityTextStatusProps {
  idx: string;
  status: boolean;
  text: string;
  checked: (e: MouseEvent<HTMLDivElement>) => void;
}

function ListOfActivityTextStatus({
  idx,
  status,
  text,
  checked,
}: ListOfActivityTextStatusProps) {
  return (
    <p
      data-index={idx}
      className="flex flex-1 w-full my-auto align-middle border-none cursor-pointer input hover:text-blue-600"
      onClick={(e) => checked(e)}
    >
      {status ? <span className="line-through">{text}</span> : text}
    </p>
  );
}

export default ListOfActivityTextStatus;
