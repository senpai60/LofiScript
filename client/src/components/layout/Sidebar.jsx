import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-5 py-3 rounded-xl mb-2 transition-all
     ${pathname === path ? "bg-(--accent-color) text-white" : "hover:bg-(--hover-color) hover:text-white"}`;

  return (
    <aside className="w-64 min-h-screen p-5 shadow-lg text-(--t-color) border-r border-zinc-900">
      <h1 className="text-2xl font-bold mb-6">My App</h1>

      <nav className="flex flex-col">
        <Link className={linkClass("/")} to="/">
          Home
        </Link>

        <Link className={linkClass("/problems")} to="/problems">
          Problems
        </Link>

        <Link className={linkClass("/about")} to="/about">
          About
        </Link>
      </nav>
    </aside>
  );
}
