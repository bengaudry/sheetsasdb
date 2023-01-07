import { Component, ReactNode } from "react";
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

export class Dashboard extends Component {
  props: props;
  state: any;
  constructor(props: props) {
    super(props);
    this.props = props;
    this.state = {
      isNewProjectPopupOpened: false,
      openedProject: projects[0],
      currentTab: dashboardTabs.overview,
    };
  }

  render() {
    return (
      <div>
        <NewProject
          shown={this.state.isNewProjectPopupOpened}
          onClose={() => this.setState({ isNewProjectPopupOpened: false })}
        />
        {projects.length <= 0 ? (
          <div className="flex flex-col items-center justify-center w-full flex-1 fixed top-1/2 -translate-y-1/2 gap-6">
            <h2 className="text-4xl font-extrabold">No project yet</h2>
            <button
              className="shadow-xl border-2 border-green-500 font-semibold w-max flex flex-row items-center text-xl bg-green-500 text-white transition-colors duration-300 hover:bg-green-600 hover:border-green-600 px-10 py-3 rounded-full"
              onClick={() => this.setState({ isNewProjectPopupOpened: true })}
            >
              <h2>Create a project</h2>
            </button>
          </div>
        ) : (
          <div className="flex flex-row flex-1">
            <Sidebar
              projects={projects}
              onNewProjectClicked={() =>
                this.setState({ isNewProjectPopupOpened: true })
              }
              onChangeProject={(proj: number) => {
                this.setState({ openedProject: projects[proj] });
              }}
            />
            <div className="w-full flex flex-col">
              <nav className="w-full flex flex-row p-2 gap-2">
                <TabItem
                  isActive={
                    this.state.currentTab === dashboardTabs.overview
                      ? true
                      : false
                  }
                  name="overview"
                  onClick={() => {
                    this.setState({ currentTab: dashboardTabs.overview });
                  }}
                />
                <TabItem
                  isActive={
                    this.state.currentTab === dashboardTabs.manage
                      ? true
                      : false
                  }
                  name="manage"
                  onClick={() => {
                    this.setState({ currentTab: dashboardTabs.manage });
                  }}
                />
                <TabItem
                  name="sheet"
                  customUrl={this.state.openedProject.tables[0].url}
                />
              </nav>
              <div className="px-5 py-2">
                {this.state.currentTab === dashboardTabs.overview ? (
                  <Overview />
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
}
