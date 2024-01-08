import { MouseEvent } from "react";
import Cross from "../../images/icon-cross.svg";

interface ListOfActivityRemoveItemProps {
  idx: string;
  removeOne: (e: MouseEvent<HTMLButtonElement>) => void;
}

function ListOfActivityRemoveItem({
  idx,
  removeOne,
}: ListOfActivityRemoveItemProps) {
  return (
    <button
      className="w-6 h-6 my-auto ml-6 "
      data-index={idx}
      onClick={(e) => removeOne(e)}
    >
      <img src={Cross} alt="LogoCross" />
    </button>
  );
}

export default ListOfActivityRemoveItem;
