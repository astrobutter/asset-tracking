"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CameraModal({title}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="rounded-[15px] p-4 bg-[#1b1e23] flex flex-col gap-[1rem] hover:cursor-pointer hover:bg-[#333942] transition-colors duration-300"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/cam-thumbnail-1.png"
          width={500}
          height={500}
          alt="cam-1"
          className="rounded-[10px]"
        />
        <div className="text-[1.5rem] font-semibold">{title}</div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999]">
          <div className="relative bg-[#1b1e23] rounded-[15px] max-w-4xl w-full p-4 pt-[2.5rem]">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            <video
              src="/iddemo.mp4"
              autoPlay
              loop
              muted
              controls
              playsInline
              className="w-full rounded-[10px] object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
