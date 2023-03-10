interface props {
  title: string;
  content: string;
  isImportant: string;
}

export function HomePagePros(props: props) {
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
    "w-96 h-72 p-8 rounded-2xl text-left border-2 border-neutral-700 flex items-center shadow-lg";
  const IMPORTANT = "lg:scale-110";

  if (isImportant === "true") {
    return BASE + " " + IMPORTANT;
  } else {
    return BASE;
  }
}
