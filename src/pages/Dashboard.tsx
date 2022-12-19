import { ReactNode } from "react";
import { Sidebar } from "../components/Dashboard/Sidebar";
import TabItem from "../components/Dashboard/TabItem";

const projects = ["Menus", "Allergics"];

interface props {
  children?: ReactNode;
}

export function Dashboard(props:props) {
  return (
    <div className="flex flex-row">
      <Sidebar projects={projects} />
      <div className="w-full flex flex-col">
        <nav className="w-full flex flex-row p-2 gap-2">
          <TabItem isActive="true" name="overview" />
          <TabItem isActive="false" name="manage" />
          <TabItem isActive="false" name="sheet" />
        </nav>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
