import { useState } from "react";
import { JavascriptPrettier } from "../../JavascriptPrettier";

export function Overview() {
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
        <input
          id="api-key-input"
          type="text"
          value={apiKey}
          className="w-72 border-2 border-slate-300 rounded-lg px-3 py-1 text-slate-500 outline-none focus:text-black"
        />
        <button
          className="px-5 bg-slate-200 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all hover:shadow-lg"
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
      <p className="text-slate-500 mb-3 block">
        This key is private, be careful not to share it with anyone
      </p>

      <div className="px-5 py-4 bg-green-100/50 border border-green-400 rounded-xl w-max font-mono">
        <span className="text-red-500">const</span> apiKey{" "}
        <span className="text-red-500">=</span>{" "}
        <span className="text-blue-400">"{apiKey}"</span>;<br />
        <span className="text-red-500">const</span> url{" "}
        <span className="text-red-500">=</span>{" "}
        <span className="text-blue-400">
          "https://api.sheetsasdb.co/${apiKey}"
        </span>
        ;<br />
        <span className="text-purple-500">fetch</span>(url, {"{"}
        <br />
        &nbsp;&nbsp;method: <span className="text-blue-400">'GET'</span>,<br />
        &nbsp;&nbsp;headers: {"{"}
        {"}"}
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
