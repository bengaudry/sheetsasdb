import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-neutral-900 text-neutral-100">
        <Outlet />
      </main>
    </>
  );
}
