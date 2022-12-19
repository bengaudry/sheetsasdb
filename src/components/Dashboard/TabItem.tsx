import { ReactNode } from "react";

interface props {
  children: ReactNode;
  isActive: string;
}

export default function TabItem(props: props) {
  return (
    <button
      className={`${
        props.isActive === "true" ? "bg-slate-200" : "bg-white"
      } px-4 py-1 rounded-lg`}
    >
      {props.children}
    </button>
  );
}
