interface props {
  projects: any;
}

export function Sidebar (props:props) {
  return (
    <div className="border-r border-r-slate-300 px-6 py-4">
        <div className="flex flex-row items-center gap-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button title="New project" className="bg-green-500 text-white font-extrabold w-10 h-10 flex flex-row items-center justify-center text-3xl rounded-full">
            <svg width="20" height="20">
              <rect x="7.5" y="0" rx="2" width="5" height="20" fill="#fff" />
              <rect x="0" y="7.5" rx="2" width="20" height="5" fill="#fff" />
            </svg>
          </button>
        </div>
        <ul>
          {props.projects.map((project:any) => (
            <li>{project}</li>
          ))}
        </ul>
      </div>
  )
}