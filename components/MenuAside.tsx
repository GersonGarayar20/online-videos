import Link from "next/link";
import {
  CollectionIcon,
  CompassIcon,
  HomeIcon,
  LogoIcon,
  UsersIcon,
} from "./Icons";

export default function MenuAside() {
  return (
    <aside className="w-60 md:block hidden">
      {/* <Link href="/">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <h1 className="text-neutral-200 text-xl font-bold">Online videos</h1>
        </div>
      </Link>
 */}
      <nav className="p-4">
        <ul className="flex flex-col gap-4">
          <Link href="/">
            <button className="group flex items-center gap-2">
              <HomeIcon />
              <p className="text-neutral-500 text-sm group-hover:text-white">
                Home
              </p>
            </button>
          </Link>
          <Link href="/">
            <button className="group flex items-center gap-2">
              <CompassIcon />
              <p className="text-neutral-500 text-sm group-hover:text-white">
                Explore
              </p>
            </button>
          </Link>
          <Link href="/">
            <button className="group flex items-center gap-2">
              <UsersIcon />
              <p className="text-neutral-500 text-sm group-hover:text-white">
                Channels
              </p>
            </button>
          </Link>
          <Link href="/">
            <button className="group flex items-center gap-2">
              <CollectionIcon />
              <p className="text-neutral-500 text-sm group-hover:text-white">
                Library
              </p>
            </button>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
