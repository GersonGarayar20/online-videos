import Link from "next/link";
import Buscador from "./Buscador";

export default function Nav() {
  return (
    <nav className="bg-black sticky z-50 top-0 flex justify-between items-center px-6 py-3">
      <Link href="/">
        <h1 className="text-neutral-200 text-xl">Online videos</h1>
      </Link>
      <Buscador />
    </nav>
  );
}
