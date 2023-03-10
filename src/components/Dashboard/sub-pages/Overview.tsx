import { useState } from "react";
import { ProjectTables } from "../../../scripts/projects/projectsManager";

interface props {
  table: ProjectTables;
}

export function Overview(props: props) {
  const [apiKey, setApiKey] = useState("e65qz5f4d-5cqsd545-45ds45qsd");
  const [copyBtnText, setCopyBtnText] = useState("Copy");
  return (
    <div>
      <label
        htmlFor="api-key-input"
        className="font-semibold text-lg block mb-1"
      >
        Your Api key
      </label>
      <div className="flex flex-row gap-3">
        <div
          id="api-key-input"
          className="w-full md:w-max border-2 border-slate-300 rounded-lg px-3 py-1 text-slate-500 outline-none truncate"
        >
          {apiKey}
        </div>
        <button
          className={`${
            copyBtnText === "Copy" ? "bg-slate-200 text-black" : "bg-green-500 text-white"
          }
          w-32 break-keep md:w-max px-3 bg-slate-200 rounded-lg font-semibold md:hover:bg-green-500 md:hover:text-white transition-all hover:shadow-md`}
          onClick={() => {
            setCopyBtnText("Copied !");
            window.setTimeout(() => {
              setCopyBtnText("Copy");
            }, 2000);
            navigator.clipboard.writeText(apiKey);
          }}
        >
          {copyBtnText}
        </button>
      </div>
      <p className="text-slate-500 mb-3 block text-sm md:text-normal">
        This key is private, be careful not to share it with anyone
      </p>

      <div className="w-full md:w-max px-5 py-4 bg-green-100/20 border border-green-300 rounded-xl font-mono text-sm">
        <span className="text-red-500">const</span> apiKey{" "}
        <span className="text-red-500">=</span>{" "}
        <span className="text-blue-400">"{apiKey}"</span>;<br />
        <span className="text-red-500">const</span> url{" "}
        <span className="text-red-500">=</span>{" "}
        <span className="text-blue-400">
          "https://sheetsasdb-4dc95.web.app/api?pr=pr&sh=
          {props.table.name.replaceAll(" ", "-").toLocaleLowerCase()}"
        </span>
        ;<br />
        <span className="text-purple-500">fetch</span>(url, {"{"}
        <br />
        &nbsp;&nbsp;method: <span className="text-blue-400">'GET'</span>,<br />
        &nbsp;&nbsp;headers: {"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;apiKey:{" "}
        <span className="text-blue-400">"{apiKey}"</span>
        <br />
        &nbsp;&nbsp;{"}"}
        <br />
        {"}"})<br />
        &nbsp;&nbsp;.<span className="text-purple-500">then</span>((
        <span className="text-orange-400">response</span>){" "}
        <span className="text-red-500">=&gt;</span>{" "}
        <span className="text-orange-400">response</span>.
        <span className="text-purple-500">json</span>())
        <br />
        &nbsp;&nbsp;.<span className="text-purple-500">then</span>((
        <span className="text-orange-400">json</span>){" "}
        <span className="text-red-500">=&gt;</span> {"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-slate-400">// Do something with the data</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;console.
        <span className="text-purple-500">log</span>(
        <span className="text-orange-400">json</span>.feuille1S);
        <br />
        {"}"});
      </div>
    </div>
  );
}
