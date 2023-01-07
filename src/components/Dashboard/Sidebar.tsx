import { ProjectType } from "../../scripts/projects/projectsManager";
import { useState } from "react";

interface props {
  projects: any;
  onNewProjectClicked: CallableFunction;
  onChangeProject: CallableFunction;
}

export function Sidebar(props: props) {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedTable, setSelectedTable] = useState(0);

  return (
    <div className="border-r border-r-slate-300 px-6 py-4 md:block">
      <div className="flex flex-row items-center gap-10">
        <h1 className="hidden md:inline text-3xl font-bold">Dashboard</h1>
        <button
          title="New project"
          onClick={() => props.onNewProjectClicked()}
          className="bg-green-500 text-white font-extrabold w-10 h-10 flex flex-row items-center justify-center text-3xl rounded-full"
        >
          <svg width="20" height="20">
            <rect x="8.5" y="0" rx="1.5" width="3" height="20" fill="#fff" />
            <rect x="0" y="8.5" rx="1.5" width="20" height="3" fill="#fff" />
          </svg>
        </button>
      </div>
      <ul className="pt-5 flex flex-col gap-3">
        {props.projects.length <= 0 ? (
          <div>No project yet</div>
        ) : (
          props.projects.map((project: ProjectType, index: number) => (
            <li
              onClick={() => {
                props.onChangeProject(index, selectedTable);
                setActiveProject(index);
              }}
            >
              <div
                className={`${
                  activeProject === index
                    ? "bg-slate-200 font-semibold"
                    : "bg-transparent font-normal"
                } rounded-lg px-5 py-2 transition-colors duration-200 cursor-pointer border-2 border-slate-200 hover:bg-slate-200`}
              >
                <span>{project.name}</span>
              </div>
              <ul
                className={`${
                  activeProject === index ? "flex flex-col px-5" : "hidden"
                } `}
              >
                {project.tables.map((table, index) => (
                  <li
                    className={`${
                      index === selectedTable
                        ? "text-black font-semibold"
                        : "text-slate-400"
                    } hover:text-black cursor-pointer transition-colors`}
                    onClick={() => setSelectedTable(index)}
                  >
                    {table.name}
                  </li>
                ))}
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
