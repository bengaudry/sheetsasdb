import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface props {
  children: ReactNode;
  className?: string;
  to: string;
}

export default function CtaPrimary(props: props) {
  return (
    <Link
      to={props.to}
      className={`${props.className} border-2 border-green-500 font-semibold w-max flex flex-row items-center text-xl bg-green-500 text-white transition-colors duration-300 hover:bg-green-600 hover:border-green-600 px-10 py-3 rounded-full`}
    >
      {props.children}
    </Link>
  );
}
