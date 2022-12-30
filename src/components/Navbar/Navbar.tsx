import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ResponsiveContainer from "../Layout/ResponsiveContainer";

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <header className="fixed bg-white/75 backdrop-blur-lg w-screen top-0 left-0 h-20 flex items-center border-b border-slate-300 z-40">
      <ResponsiveContainer>
        <div className="justify-between flex flex-row items-center">
          <Link className="flex flex-row items-center gap-2" to="/">
            <img src="/icon120.png" className="w-14" />
            <h3 className="font-semibold text-xl">Sheets as Db</h3>
          </Link>
          <nav
            className={`${
              navOpened
                ? "flex lg:block translate-x-0 shadow-2xl drop-shadow-2xl "
                : "translate-x-full shadow-none drop-shadow-none"
            } fixed z-50 bg-white right-0 h-screen top-0 px-10 items-center transition-all duration-200`}
          >
            <ul className="flex flex-col lg:flex-row items-center w-max gap-10">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold"
                      : "text-slate-500 hover:text-black"
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
                      ? "text-black font-semibold"
                      : "text-slate-500 hover:text-black"
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
          <button
            onClick={() => {
              setNavOpened(!navOpened);
            }}
            className="fixed right-10 block z-50"
          >
            <div className="w-8 h-4 flex flex-col justify-between">
              <div className={`h-1 w-8 bg-slate-500 rounded-xl origin-center transition-all ${navOpened ? "rotate-45 translate-y-1.5" : ""}`}></div>
              <div className={`h-1 w-8 bg-slate-500 rounded-xl origin-center transition-all ${navOpened ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
            </div>
          </button>
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
