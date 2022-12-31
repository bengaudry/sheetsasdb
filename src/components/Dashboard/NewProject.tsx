import { ReactNode } from "react";

export function NewProject(props: {
  shown?: boolean;
  onClose: CallableFunction;
}) {
  return (
    <div
      className={
        props.shown
          ? "w-screen h-screen fixed bg-black/30 z-50 top-0 left-0 transition-colors duration-300 px-10 py-5"
          : "w-0 h-0"
      }
      onClick={() => props.onClose()}
    >
      <div
        className={
          props.shown
            ? "bg-white w-3/5 h-3/4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 drop-shadow-2xl rounded-xl border border-slate-300 opacity-100 transition-opacity duration-300"
            : "opacity-0"
        }
      >
        <footer className="absolute bottom-0 right-0 px-10 py-5 flex flex-row gap-5 border-t border-slate-300 w-full justify-end">
          <button
            onClick={() => props.onClose()}
            className="font-semibold w-max flex flex-row items-center text-base border-2 border-green-500 bg-transparent text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-white px-8 py-2 rounded-full"
          >
            Fermer
          </button>
          <button
            onClick={() => props.onClose()}
            className="font-semibold flex flex-row items-center bg-green-500 text-white transition-colors duration-300 hover:bg-green-600 px-8 py-2 rounded-full"
          >
            Créer un projet
          </button>
        </footer>
      </div>
    </div>
  );
}
