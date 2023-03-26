import React from "react";

export default function Categorias() {
  return (
    <ul className="flex gap-2 overflow-x-auto py-4">
      <Tag titulo="All" />
      <Tag titulo="Game" />
      <Tag titulo="Naturaleza" />
      <Tag titulo="Arquitectura" />
    </ul>
  );
}

const Tag = ({ titulo }: { titulo: String }) => (
  <li className="bg-neutral-800 text-neutral-500 py-1 px-2 rounded-xl hover:text-white transition-all">
    {titulo}
  </li>
);
