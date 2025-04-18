"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen _center">
      <h2 className="section_title">Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
