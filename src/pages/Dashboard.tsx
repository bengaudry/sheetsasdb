import { useState, ReactNode } from "react";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { NewProject } from "../components/Dashboard/NewProject";
import TabItem from "../components/Dashboard/TabItem";
import { ProjectType } from "../scripts/projects/projectsManager";
import { Overview } from "../components/Dashboard/sub-pages/Overview";
import { Manage } from "../components/Dashboard/sub-pages/Manage";

const projects: Array<ProjectType> = [
  {
    name: "Students",
    tables: [
      {
        name: "Sheet 1",
        url: "https://docs.google.com/spreadsheets/d/16JXfe-DQ4qt-9VoUI2WDRxZdaj-5pJ5IONoutE3VpI0/edit#gid=0",
      },
      {
        name: "Sheet 2",
        url: "https://docs.google.com/spreadsheets/d/16JXfe-DQ4qt-9VoUI2WDRxZdaj-5pJ5IONoutE3VpI0/edit#gid=0",
      },
    ],
  },
  {
    name: "Clients",
    tables: [
      {
        name: "Sheet 1",
        url: "https://docs.google.com/spreadsheets/d/16JXfe-DQ4qt-9VoUI2WDRxZdaj-5pJ5IONoutE3VpI0/edit#gid=0",
      },
    ],
  },
];

interface props {
  children?: ReactNode;
}

export enum dashboardTabs {
  overview,
  manage,
}

export function Dashboard(props: props) {
  const [isNewProjectPopupOpened, setIsNewProjectPopupOpened] = useState(false);
  const [openedProject, setOpenedProject] = useState(projects[0]);
  const [currentTab, setCurrentTab] = useState(dashboardTabs.overview);
  const [currentTable, setCurrentTable] = useState(openedProject.tables[0]);

  return (
    <div>
      <NewProject
        shown={isNewProjectPopupOpened}
        onClose={() => setIsNewProjectPopupOpened(false)}
      />
      {projects.length <= 0 ? (
        <div className="flex flex-col items-center justify-center w-full flex-1 fixed top-1/2 -translate-y-1/2 gap-6">
          <h2 className="text-4xl font-extrabold">No project yet</h2>
          <button
            className="shadow-xl border-2 border-green-500 font-semibold w-max flex flex-row items-center text-xl bg-green-500 text-white transition-colors duration-300 hover:bg-green-600 hover:border-green-600 px-10 py-3 rounded-full"
            onClick={() => setIsNewProjectPopupOpened(true)}
          >
            <h2>Create a project</h2>
          </button>
        </div>
      ) : (
        <div className="flex flex-row flex-1">
          <Sidebar
            projects={projects}
            onNewProjectClicked={() => {
              setIsNewProjectPopupOpened(true);
            }}
            onChangeProject={(proj: number, table: any) => {
              setOpenedProject(projects[proj]);
              setCurrentTable(openedProject.tables[table]);
            }}
          />
          <div className="w-full flex flex-col">
            <nav className="w-full flex flex-row p-2 gap-2">
              <TabItem
                isActive={currentTab === dashboardTabs.overview ? true : false}
                name="overview"
                onClick={() => {
                  setCurrentTab(dashboardTabs.overview);
                }}
              />
              <TabItem
                isActive={currentTab === dashboardTabs.manage ? true : false}
                name="manage"
                onClick={() => {
                  setCurrentTab(dashboardTabs.manage);
                }}
              />
              <TabItem name="sheet" customUrl={openedProject.tables[0].url} />
            </nav>
            <div className="px-5 py-2">
              {currentTab === dashboardTabs.overview ? (
                <Overview table={currentTable}/>
              ) : (
                <Manage />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
