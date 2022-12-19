import { FakeWindow } from "./FakeWindow/FakeWindow";

interface JSONPrettierProps {
  value: string;
}

export function JSONPrettier(props: JSONPrettierProps) {
  const val = props.value.split("\n");
  return (
    <FakeWindow dark>
      <pre className="px-6 py-5">
        <code className="language-javascript" data-lang="javascript">
          {val.map((val, index) => (
            <div className="flex flex-row items-center">
              <div className="w-16 select-none text-slate-500 text-right pr-8">
                {index + 1}
              </div>
              <span>{val}</span>
            </div>
          ))}
        </code>
      </pre>
    </FakeWindow>
  );
}
