import Link from "next/link";
import {
  CollectionIcon,
  CompassIcon,
  HomeIcon,
  PlusIcon,
  UsersIcon,
} from "./Icons";

export default function Menu() {
  return (
    <nav
      style={{ borderRadius: "3em 3em 0 0" }}
      className="bg-neutral-800 fixed z-40 bottom-0 w-full md:hidden"
    >
      <ul className="w-full flex justify-evenly items-center">
        <Link href="/">
          <button className="group flex flex-col items-center gap-1">
            <HomeIcon />
            <p className="text-neutral-500 text-sm group-hover:text-white">
              Home
            </p>
          </button>
        </Link>
        <Link href="/">
          <button className="group flex flex-col items-center gap-1">
            <CompassIcon />
            <p className="text-neutral-500 text-sm group-hover:text-white">
              Explore
            </p>
          </button>
        </Link>
        <div className="md:hidden">
          <Link href="/">
            <button className="md:hidden bg-rose-600 -translate-y-8 hover:scale-110 flex justify-center items-center w-16 h-16 rounded-full shadow-lg transition-all">
              <PlusIcon />
            </button>
          </Link>
        </div>
        <Link href="/">
          <button className="group flex flex-col items-center gap-1">
            <UsersIcon />
            <p className="text-neutral-500 text-sm group-hover:text-white">
              Channels
            </p>
          </button>
        </Link>
        <Link href="/">
          <button className="group flex flex-col items-center gap-1">
            <CollectionIcon />
            <p className="text-neutral-500 text-sm group-hover:text-white">
              Library
            </p>
          </button>
        </Link>
      </ul>
    </nav>
  );
}
