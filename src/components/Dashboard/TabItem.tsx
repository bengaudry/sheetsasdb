interface props {
  name: string;
  isActive?: boolean;
  customUrl?: string;
  onClick?: CallableFunction;
}

export default function TabItem(props: props) {
  return props.customUrl === undefined ? (
    <button
      className={`
        ${
          props.isActive
            ? "bg-neutral-700 px-4 py-1 rounded-lg transition-colors duration-100 font-semibold"
            : "bg-transparent px-4 py-1 rounded-lg transition-colors duration-100"
        }
      `}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        }
      }}
    >
      {capitalize(props.name)}
    </button>
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
