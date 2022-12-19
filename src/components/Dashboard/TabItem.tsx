import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface props {
  name: string;
  isActive: string;
}

export default function TabItem(props: props) {
  return (
    <NavLink
      className={({isActive}) => (isActive ? "bg-slate-200 px-4 py-1 rounded-lg transition-colors duration-100" : "bg-white px-4 py-1 rounded-lg transition-colors duration-100")}
      to={`/dashboard/${props.name}`}
    >
      {capitalize(props.name)}
    </NavLink>
  );
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}
