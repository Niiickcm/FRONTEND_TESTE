import { ReactNode } from "react";

interface InformationAndFilterRootProps {
  children: ReactNode;
}

function InformationAndFilterRoot({ children }: InformationAndFilterRootProps) {
  return <>{children}</>;
}

export default InformationAndFilterRoot;
