import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface props {
  children: ReactNode;
  className?: string;
  to?: string;
  btn?: boolean;
  onBtnClick?: CallableFunction;
}

export default function CtaPrimary(props: props) {
  const className = `${props.className} border-2 border-emerald-500 w-max flex flex-row items-center bg-emerald-700 text-white transition-colors duration-300 hover:bg-emerald-600 hover:border-emerald-400 px-5 py-1 rounded-lg`;
  return props.btn ? (
    <button className={className}>
      {props.children}
    </button>
  ) : (
    <Link
      to={props.to as string}
      className={className}
    >
      <span className="text-base">{props.children}</span>
    </Link>
  );
}
