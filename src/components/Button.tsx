"use client";
import React from "react";

function Button({
  click,
  text,
}: {
  click: React.MouseEventHandler;
  text: string;
}) {
  return (
    <button
      onClick={click}
      className="mt-4 bg-slate-100 w-[50%] text-black font-bold py-2 px-4 rounded hover:bg-slate-900 hover:text-white"
    >
      {text}
    </button>
  );
}

export default Button;
