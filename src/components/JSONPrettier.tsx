interface JSONPrettierProps {
  value: string;
}

export function JSONPrettier(props: JSONPrettierProps) {
  const val = props.value.split("\n")
  return (
    <div className="bg-slate-800 rounded-xl shadow-xl border-2 border-slate-500">
      <div className="w-full p-2 border-b-2 border-slate-500 flex items-center gap-1">
        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <pre className="px-6 py-5">
        <code className="language-javascript" data-lang="javascript">
          {val.map((val, index) => (
            <div className="flex flex-row items-center">
              <div className="w-16 select-none text-slate-500 text-right pr-8">{index}</div>
              <span>{val}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
