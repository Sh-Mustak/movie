"use client";
import React, { useState, useMemo } from "react";
import CompareHeading from "./CompareHeading";
import CompareContainer from "./CompareContainer";

export default function CompareMovie() {
  const [count, setCount] = useState(0);

  // Memoizing the count value to optimize re-renders
  const memoizedCount = useMemo(() => count, [count]);

  return (
    <main className="container mx-auto px-4 pt-24 pb-8">
      <CompareHeading handleCount={() => setCount((prev) => prev + 1)} />
      <CompareContainer
        count={memoizedCount}
        handleCount={() => setCount((prev) => prev - 1)}
      />
    </main>
  );
}
