interface props {
  title: string;
  content: string;
  isImportant: string;
}

export default function HomePagePros(props: props) {
  return (
    <li className={generateClasses(props.isImportant)}>
      <div>
        <h3 className="text-3xl font-bold mb-4">{props.title}</h3>
        <p className="text-lg">{props.content}</p>
      </div>
    </li>
  );
}

function generateClasses(isImportant: string) {
  const BASE =
    "w-96 h-72 bg-white p-8 rounded-2xl text-left border-2 border-slate-300 flex items-center shadow-lg";
  const IMPORTANT = "scale-110";

  if (isImportant === "true") {
    return BASE + " " + IMPORTANT;
  } else {
    return BASE;
  }
}
