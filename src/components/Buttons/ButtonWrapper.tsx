import { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}

export default function ButtonWrapper(props: props) {
  return (
    <div
      className={`flex flew-row items-center gap-4 h-fit ${props.className}`}
    >
      {props.children}
    </div>
  );
}
