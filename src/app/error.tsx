"use client";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="bg-slate-950 text-stone-700 text-center h-svh">
      <h3>Some thing went wrong in your app</h3>
      <p>{error.message}</p>
      <button type="button" onClick={reload}>
        Try Again
      </button>
    </div>
  );
}

export default Error;
