interface props {
  onClose?: CallableFunction;
  children: any;
  shown?: boolean;
}

export function Popup(props: props) {
  return (
    <div
      className={`${
        props.shown ? "block" : "hidden"
      } fixed w-screen h-screen bg-black/50 backdrop-blur-sm top-0 left-0 z-50 py-5 px-5 flex flex-row items-center justify-center`}
      onClick={() => {
        if (props.onClose !== undefined) {
          props.onClose();
        }
      }}
    >
      <div className="bg-neutral-900 px-8 py-5 border-2 border-neutral-600 rounded-xl h-max w-full md:w-1/2">
        {props.children}
      </div>
    </div>
  );
}
