import Link from "next/link";
import Buscador from "./Buscador";

export default function Nav() {
  return (
    <nav className="bg-black sticky z-50 top-0 flex justify-between items-center px-6 py-3">
      <Link href="/">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <h1 className="text-neutral-200 text-xl font-bold">Online videos</h1>
        </div>
      </Link>
      <Buscador />
    </nav>
  );
}

const LogoIcon = () => (
  <svg
    className="fill-rose-600"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"></path>
  </svg>
);
