import { Component, ReactNode, useState } from "react";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { NewProject } from "../components/Dashboard/NewProject";
import TabItem from "../components/Dashboard/TabItem";

const projects: Array<String> = ["helloworld", "helloworld2", "helloworld3"];

interface props {
  children?: ReactNode;
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
              <h1>Project : </h1>
              <p>{this.state.openedProject}</p>
              <nav className="w-full flex flex-row p-2 gap-2">
                <TabItem isActive="true" name="overview" />
                <TabItem isActive="false" name="manage" />
                <TabItem isActive="false" name="sheet" />
              </nav>
              <div>{this.props.children}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
