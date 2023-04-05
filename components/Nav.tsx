import Link from "next/link";
import { LogoIcon } from "./Icons";
import Buscador from "./Buscador";

export default function Nav() {
  return (
    <nav className="bg-black sticky z-50 top-0 flex justify-between items-center px-6 py-3 md:hidden ">
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
