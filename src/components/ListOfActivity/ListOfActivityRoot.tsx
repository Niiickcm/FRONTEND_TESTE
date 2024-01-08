import { ReactNode } from "react";
interface ListOfActivityRootProps {
  children: ReactNode;
}
function ListOfActivityRoot({ children }: ListOfActivityRootProps) {
  return <div className="max-h-90 overflow-auto">{children}</div>;
}

export default ListOfActivityRoot;
