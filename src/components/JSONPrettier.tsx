import { FakeWindow } from "./FakeWindow/FakeWindow";

interface JSONPrettierProps {
  value: string;
}

export function JSONPrettier(props: JSONPrettierProps) {
  const val = props.value.split("\n");
  return (
    <FakeWindow dark>
      <pre className="lg:px-6 px-4 py-5 text-sm">
        <code className="language-javascript" data-lang="javascript">
          {val.map((val, index) => (
            <div className="flex flex-row items-center">
              <div className="hidden lg:block lg:w-16 w-10 select-none text-slate-500 text-right lg:pr-8">
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
