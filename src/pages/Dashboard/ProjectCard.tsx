type props = {
  name: string;
  nbOfSheets: number;
  onClick?: CallableFunction;
};

export function ProjectCard(props: props) {
  return (
    <div
      className="flex flex-row justify-between bg-neutral-700/50 px-7 py-3 rounded-md border border-neutral-600 cursor-pointer hover:bg-neutral-700/100 transition-colors w-96 h-36"
      onClick={() => props.onClick}
    >
      <div>
        <p className="font-semibold">{props.name}</p>
        <p className="font-normal text-sm text-neutral-400">
          Sheets : {props.nbOfSheets}
        </p>
      </div>
    </div>
  );
}
