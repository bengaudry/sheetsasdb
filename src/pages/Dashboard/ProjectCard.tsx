type props = {
  name: string;
  nbOfSheets?: number;
  onClick?: CallableFunction;
};

export function ProjectCard(props: props) {
  return (
    <div
      className={`${
        props.name === "New project"
          ? "bg-emerald-700/50 border-emerald-600 hover:bg-emerald-700/75 flex flex-row items-center justify-center"
          : "bg-neutral-700/50 border-neutral-600 hover:bg-neutral-700/100"
      } px-7 py-3 rounded-md border cursor-pointer transition-colors w-full h-36`}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        }
      }}
    >
      <div>
        {props.name === "New project" ? (
          <p className="block w-max text-emerald-200 text-2xl font-semibold">
            {props.name}
          </p>
        ) : (
          <div>
            <p className="font-semibold">{props.name}</p>
            <p className="font-normal text-sm text-neutral-400">
              Sheets : {props.nbOfSheets}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
