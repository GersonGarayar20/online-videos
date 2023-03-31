"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface CardVideoProps {
  id: string;
  title: string;
  url: string;
}
export default function CardVideo({ id, title, url }: CardVideoProps) {
  const [isHover, setIsHover] = useState(false);
  const [active, setActive] = useState(false);

  const videoRef = useRef<any>();

  const handleEnter = () => setIsHover(true);
  const handleLeave = () => setIsHover(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isHover) setActive(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
      setActive(false);
    };
  }, [isHover]);

  useEffect(() => {
    active ? videoRef.current.play() : videoRef.current.pause();
  }, [active]);

  return (
    <div onMouseLeave={handleLeave}>
      <Link href={`/playvideo/${id}`}>
        <video
          ref={videoRef}
          onMouseEnter={handleEnter}
          className={`w-full ${active ? "" : "rounded-2xl"} transition-all`}
          src={url}
        ></video>

        <div className="py-3 flex gap-4">
          <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
          <div className="flex-1">
            <p className="text-neutral-300">{title}</p>
            <p className="text-neutral-400 text-sm">Descripcion</p>
          </div>
          <button className="w-12 h-12 flex justify-center items-center">
            <PuntosIcon />
          </button>
        </div>
      </Link>
    </div>
  );
}

const PuntosIcon = () => (
  <svg
    className="fill-neutral-500 hover:fill-white transition-all"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
  </svg>
);
