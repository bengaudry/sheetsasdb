import CtaPrimary from "../components/Buttons/CtaPrimary";

export function NoPage() {
  return (
    <div className="flex flex-row items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold">404</h1>
        <p className="text-6xl font-light mb-5">Page not found...</p>
        <CtaPrimary to="/home" className="m-auto shadow-xl">
          Go back home
        </CtaPrimary>
      </div>
    </div>
  );
}
