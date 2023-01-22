import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface props {
  children: ReactNode;
  className?: string;
  to: string;
  btn?: boolean;
}

export default function CtaSecondary(props: props) {
  return props.btn ? (
    <button>
      {props.children}
    </button>
  ) : (
    <Link
      to={props.to}
      className={`${props.className} border-2 border-neutral-700 w-max flex flex-row items-center bg-neutral-800 text-white transition-colors duration-300 hover:bg-neutral-700 hover:border-neutral-600 px-5 py-1 rounded-lg`}
    >
      <span className="text-base">{props.children}</span>
    </Link>
  );
}
