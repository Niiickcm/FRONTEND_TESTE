import Circle from "../../images/circle.svg";
import Checked from "../../images/circle-cheked.svg";
import { MouseEvent } from "react";

interface ListOfActivityCheckButtonProps {
  idx: string;
  status: boolean;
  checked: (e: MouseEvent<HTMLButtonElement>) => void;
}

function ListOfActivityCheckButton({
  idx,
  status,
  checked,
}: ListOfActivityCheckButtonProps) {
  return (
    <button
      data-index={idx}
      className="w-6 h-6 my-auto mr-6"
      onClick={(e) => checked(e)}
    >
      <img src={!status ? Circle : Checked} alt="LogoCentang" />
    </button>
  );
}

export default ListOfActivityCheckButton;
