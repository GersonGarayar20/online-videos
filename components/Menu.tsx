import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="bg-neutral-900 fixed bottom-0 w-full h-20 flex justify-center items-center rounded-t-3xl">
      <Link href="/">
        <button className="group flex flex-col items-center">
          <HomeIcon />
          <p className="text-neutral-500 text-sm group-hover:text-white">
            Home
          </p>
        </button>
      </Link>
    </div>
  );
}

const HomeIcon = () => (
  <svg
    className="fill-neutral-500 w-8 h-8 group-hover:fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path>
  </svg>
);
