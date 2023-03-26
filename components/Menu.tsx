import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="bg-neutral-900 fixed bottom-0 w-full h-16 border">
      <Link href="/">
        <p className="text-white p-2">Home</p>
      </Link>
    </div>
  );
}
