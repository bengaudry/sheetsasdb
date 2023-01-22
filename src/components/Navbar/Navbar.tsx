import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ResponsiveContainer from "../Layout/ResponsiveContainer";
import CtaPrimary from "../Buttons/CtaPrimary";
import CtaSecondary from "../Buttons/CtaSecondary";

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <header className="fixed bg-neutral-900/75 text-white backdrop-blur w-screen top-0 left-0 h-16 flex items-center border-b border-neutral-700 z-40">
      <ResponsiveContainer>
        <div className="justify-between flex flex-row items-center">
          <div className="flex flex-row items-center gap-10">
            <Link className="flex flex-row items-center gap-2" to="/">
              <img src="/icon120-transparent.svg" className="w-10" />
              <h3 className="font-semibold text-xl">Sheets as Db</h3>
            </Link>
            <div className="flex flex-row items-center gap-5">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:text-emerald-400"
                    : "text-neutral-500 hover:text-emerald-400 font-semibold"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:text-emerald-400"
                    : "text-neutral-500 hover:text-emerald-400 font-semibold"
                }
                to="/docs"
              >
                Docs
              </NavLink>
            </div>
          </div>
          <nav
            className={`${
              navOpened
                ? "flex lg:block translate-x-0 shadow-2xl drop-shadow-2xl"
                : "translate-x-full shadow-none drop-shadow-none lg:translate-x-0"
            } fixed z-50 bg-white right-0 h-screen top-0 px-10 items-center transition-all duration-200 lg:static lg:w-auto lg:h-auto lg:shadow-none lg:drop-shadow-none lg:px-0 lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row items-center w-max gap-10">
              <li className="flex flex-row gap-3">
                <CtaSecondary to="/signin">Sign in</CtaSecondary>

                <CtaPrimary to="/dashboard" className="">
                  Dashboard
                </CtaPrimary>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => {
              setNavOpened(!navOpened);
            }}
            className="fixed right-10 block z-50 lg:hidden"
          >
            <div className="w-8 h-4 flex flex-col justify-between">
              <div
                className={`h-1 w-8 bg-slate-500 rounded-xl origin-center transition-all ${
                  navOpened ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-8 bg-slate-500 rounded-xl origin-center transition-all ${
                  navOpened ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
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
