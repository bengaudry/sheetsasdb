interface props {
  value: string;
}

export function JavascriptPrettier(props: props) {
  return (
    <div>
      <div className="lg:px-6 px-4 py-5 text-sm bg-slate-100 rounded-xl w-max">
        {props.value
            .replaceAll("&rbrace;", "}")
            .replaceAll("&lbrace;", "{")
            .replaceAll("&gt;", ">")
            .replaceAll("\n", '<br/>')
          }
      </div>
    </div>
  );
}
