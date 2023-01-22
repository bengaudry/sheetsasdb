import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface props {
  children: ReactNode;
  className?: string;
  to?: string;
  btn?: boolean;
  onBtnClick?: CallableFunction;
  danger?: boolean;
}

export default function CtaPrimary(props: props) {
  const className = `${props.className} ${
    props.danger
      ? "border-red-500 bg-red-700 hover:bg-red-600 hover:border-red-400"
      : "border-emerald-500 bg-emerald-700 hover:bg-emerald-600 hover:border-emerald-400"
  } border-2  w-max flex flex-row items-center text-white transition-colors duration-300 px-5 py-1 rounded-lg`;
  return props.btn ? (
    <button
      className={className}
    >
      {props.children}
    </button>
  ) : (
    <Link
      to={props.to as string}
      className={className}
      onClick={() => props.onBtnClick}
    >
      <span className="text-base">{props.children}</span>
    </Link>
  );
}
