"use client";

import { FormEvent, useState } from "react";

export default function Buscador() {
  const [active, setActive] = useState(false);
  const [word, setWord] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (active) {
      console.log("buscando...");
    } else {
      setActive(true);
    }
  };

  return (
    <div
      className={`bg-black  ${
        active ? "fixed top-0 left-0 w-full h-screen px-6 py-3" : ""
      }`}
    >
      <form className="flex" onSubmit={submit}>
        {active && (
          <button
            type="button"
            onClick={() => setActive(false)}
            className="w-12 h-12 flex justify-center items-center"
          >
            <AtrasIcon />
          </button>
        )}

        {active ? (
          <input
            className="bg-transparent py-2 px-4 flex-1"
            type="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Buscar un video"
          />
        ) : null}

        <button
          type="submit"
          className="w-12 h-12 flex justify-center items-center"
        >
          <LupaIcon />
        </button>
      </form>
    </div>
  );
}

const LupaIcon = () => (
  <svg
    className="fill-neutral-500 hover:fill-white transition-all"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
  </svg>
);

const AtrasIcon = () => (
  <svg
    className="fill-neutral-500 hover:fill-white transition-all"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
  </svg>
);
