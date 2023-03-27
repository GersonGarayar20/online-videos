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
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
      stroke-width="0"
      fill="#f14"
    ></path>
  </svg>
);
