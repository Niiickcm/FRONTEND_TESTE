import { ReactNode } from "react";
interface ListOfActivityRootProps {
  children: ReactNode;
}
function ListOfActivityRoot({ children }: ListOfActivityRootProps) {
  return <div>{children}</div>;
}

export default ListOfActivityRoot;
