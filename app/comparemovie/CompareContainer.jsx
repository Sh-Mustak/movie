"use client";
import React from "react";
import CompareResult from "./CompareResult";
import EmptyCompareBox from "./EmptyCompareBox";

export default function CompareContainer({
  boxes,
  handleRemove,
  handleUpdate,
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {boxes.map((box) =>
        box.movie ? (
          <CompareResult
            key={box.id}
            movie={box.movie}
            handleRemove={() => handleRemove(box.id)}
          />
        ) : (
          <EmptyCompareBox
            key={box.id}
            id={box.id}
            handleRemove={() => handleRemove(box.id)}
            handleUpdate={handleUpdate}
          />
        )
      )}
    </div>
  );
}
