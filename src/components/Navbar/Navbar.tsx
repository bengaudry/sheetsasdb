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
              navOpened ? "flex lg:block translate-x-0 shadow-2xl drop-shadow-2xl " : "translate-x-full shadow-none drop-shadow-none"
            } fixed z-50 bg-white right-0 h-screen top-0 p-10 justify-center transition-all duration-300`}
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
            {navOpened ? "Close" : "Menu"}
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
