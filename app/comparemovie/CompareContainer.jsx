"use client";
import React, { useState } from "react";
import CompareResult from "./CompareResult";
import EmptyCompareBox from "./EmptyCompareBox";

export default function CompareContainer({ count, handleCount }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <CompareResult />
      {Array(count)
        .fill()
        .map((_, index) => (
          <EmptyCompareBox key={index} handleCount={handleCount} />
        ))}
    </div>
  );
}
