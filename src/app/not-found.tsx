"use client";
import { usePathname } from "next/navigation";
import React from "react";

function NoFound() {
  const pathname = usePathname();
  return (
    <>
      <h1>404 Error</h1>
      <h3>Not Found</h3>
      <p> this path {pathname.toString()} is not Found</p>
    </>
  );
}

export default NoFound;
