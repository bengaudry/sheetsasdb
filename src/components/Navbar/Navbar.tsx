import { Link, NavLink } from "react-router-dom";
import ResponsiveContainer from "../Layout/ResponsiveContainer";

export default function Navbar() {
  return (
    <header className="fixed bg-white w-full top-0 left-0 h-20 flex items-center border-b border-slate-300 z-50">
      <ResponsiveContainer>
        <div className="justify-between flex flex-row items-center">
          <Link className="flex flex-row items-center gap-2" to="/">
            <img src="/icon120.png" className="w-14" />
            <h3 className="font-semibold text-xl">Sheets as Db</h3>
          </Link>
          <nav>
            <ul className="flex flex-row items-center w-max gap-10">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "active-nav-item text-black font-semibold"
                      : "text-slate-500"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "active-nav-item text-black font-semibold"
                      : "text-slate-500"
                  }
                  to="/docs"
                >
                  Docs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    activeClassName({
                      onlyBase: "font-normal",
                      base: "flex flex-row items-center bg-green-500 text-white transition-colors duration-300 hover:bg-green-600 px-6 py-2 rounded-full",
                      active: "font-semibold",
                      isActive: isActive,
                    })
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </ResponsiveContainer>
    </header>
  );
}

interface activeClassNameParameters {
  onlyBase?: string;
  base: string;
  active: string;
  isActive: boolean;
}

function activeClassName(para: activeClassNameParameters) {
  if (para.isActive) {
    return para.active + " " + para.base;
  } else {
    return para.base + " " + para.onlyBase;
  }
}
