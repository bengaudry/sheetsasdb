import { NavLink } from "react-router-dom";

interface props {
  name: string;
  isActive: string;
  customUrl?: string;
}

export default function TabItem(props: props) {
  return props.customUrl === undefined ? (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-slate-200 px-4 py-1 rounded-lg transition-colors duration-100"
          : "bg-transparent px-4 py-1 rounded-lg transition-colors duration-100"
      }
      to={`/dashboard/${props.name}`}
    >
      {capitalize(props.name)}
    </NavLink>
  ) : (
    <a
      className={
        "bg-transparent px-4 py-1 rounded-lg transition-colors duration-100"
      }
      href={props.customUrl}
      target="_blank"
    >
      {capitalize(props.name)}
    </a>
  );
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}
