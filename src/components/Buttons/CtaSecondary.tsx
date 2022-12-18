import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface props {
  children: ReactNode;
  className?: string;
  to: string;
}

export default function CtaSecondary(props: props) {
  return (
    <Link
      to={props.to}
      className={`${props.className} font-semibold w-max flex flex-row items-center text-xl border-2 border-green-500 bg-transparent text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-white px-10 py-3 rounded-full`}
    >
      {props.children}
    </Link>
  );
}
