import { Sidebar } from "../components/Dashboard/Sidebar";
import TabItem from "../components/Dashboard/TabItem";

const projects = ["Menus", "Allergics"];

export function Dashboard() {
  return (
    <div className="flex flex-row">
      <Sidebar projects={projects}/>
      <div className="w-full flex flex-col">
        <nav className="w-full flex flex-row p-2 gap-2">
          <TabItem isActive="true">Overview</TabItem>
          <TabItem isActive="false">Manage</TabItem>
          <TabItem isActive="false">Sheet </TabItem>
        </nav>
      </div>
    </div>
  );
}
