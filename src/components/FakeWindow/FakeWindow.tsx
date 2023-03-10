import { ReactNode } from "react";

interface FakeWindowProps {
  light?: boolean;
  dark?: boolean;
  children: ReactNode;
}

export function FakeWindow(props: FakeWindowProps) {
  return (
    <div className="w-screen lg:w-fit px-5">
      <div
        className={`${props.dark ? "bg-neutral-800 border-neutral-700 " : ""} ${
          props.light ? "bg-slate-100 border-slate-300 " : " "
        } rounded-xl shadow-xl border-2 overflow-hidden`}
      >
        <div
          className={`${props.dark ? "bg-neutral-800 border-neutral-700 " : ""} ${
            props.light ? "bg-slate-100 border-slate-300 " : " "
          } w-full p-2 border-b-2 flex items-center gap-1 rounded-t-xl`}
        >
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
