interface props {
  children: React.ReactNode;
  parentClassName?: string;
  childrenClassName?: string;
  id?: string;
}

export default function ResponsiveContainer(props: props) {
  return (
    <div className={`${props.parentClassName} w-full px-5`} id={props.id}>
      <div className={`${props.childrenClassName} max-w-7xl mx-auto w-full`}>{props.children}</div>
    </div>
  );
}
