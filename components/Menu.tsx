import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div
      style={{ borderRadius: "3em 3em 0 0" }}
      className="bg-neutral-800 fixed bottom-0 w-full h-24 flex justify-evenly items-center"
    >
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
      <Link href="/">
        <button className="bg-rose-600 -translate-y-8 hover:scale-110 flex justify-center items-center w-16 h-16 rounded-full shadow-lg transition-all">
          <PlusIcon />
        </button>
      </Link>
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
    </div>
  );
}

const HomeIcon = () => (
  <svg
    className="fill-neutral-500 w-8 h-8 group-hover:fill-white group-hover:scale-110 transition-all"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path>
  </svg>
);

const CompassIcon = () => (
  <svg
    className="fill-neutral-500 w-8 h-8 group-hover:fill-white group-hover:scale-110 transition-all"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3 13-8 2 2-8 8-2-2 8z"></path>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const CollectionIcon = () => (
  <svg
    className="fill-neutral-500 w-8 h-8 group-hover:fill-white group-hover:scale-110 transition-all"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 6h14v2H5zm2-4h10v2H7z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg
    className="fill-neutral-500 w-8 h-8 group-hover:fill-white group-hover:scale-110 transition-all"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path>
    <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path>
  </svg>
);

const PlusIcon = () => (
  <svg
    className="fill-neutral-300 w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
  </svg>
);
