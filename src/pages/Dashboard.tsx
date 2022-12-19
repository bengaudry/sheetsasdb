import TabItem from "../components/Dashboard/TabItem";

const projects = [
  "Menus",
  "Allergics"
]

export function Dashboard() {
  return (
    <div className="flex flex-row">
      <div className="border-r border-r-slate-300 px-6 py-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button>New Project</button>
        <ul>
          {projects.map((project) => (<li>{project}</li>))}
        </ul>
      </div>
      <div className="w-full flex flex-col">
        <nav className="w-full flex flex-row p-2 gap-2">
          <TabItem isActive="true">Preview</TabItem>
          <TabItem isActive="false">Manage</TabItem>
          <TabItem isActive="false">Sheet </TabItem>
        </nav>
      </div>
    </div>
  );
}