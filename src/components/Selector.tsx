import { useState } from "react";

type props = {
  options: Array<option>;
  onChange: CallableFunction;
};

type option = {
  name: string;
};

export function Selector(props: props) {
  const [selectorOpened, setSelectorOpened] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-slate-200 w-max px-5 py-2 rounded-full flex flex-row gap-5 cursor-pointer select-none"
        onClick={() => setSelectorOpened(!selectorOpened)}
      >
        <span className="font-semibold">Choisir</span>
        <span className="block rotate-180 font-bold">^</span>
      </div>
      <div className={`${selectorOpened ? "block pt-2" : "hidden"}`}>
        <ul className="flex flex-col bg-slate-100 px-5 py-2 rounded-lg absolute left-0 w-40">
          {props.options.map((option: option) => (
            <li>{option.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
