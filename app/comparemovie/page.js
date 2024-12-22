"use client";
import React, { useState } from "react";
import CompareHeading from "./CompareHeading";
import CompareContainer from "./CompareContainer";

export default function CompareMovie() {
  const [boxes, setBoxes] = useState([]);

  // Add an empty box
  const addBox = () => {
    const newBox = { id: Date.now(), movie: null }; // Initially empty
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  // Remove a box
  const removeBox = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  // Replace a box with selected movie data
  const updateBoxWithMovie = (id, movie) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) => (box.id === id ? { ...box, movie } : box))
    );
  };

  return (
    <main className="container mx-auto px-4 pt-24 pb-8">
      <CompareHeading handleCount={addBox} />
      <CompareContainer
        boxes={boxes}
        handleRemove={removeBox}
        handleUpdate={updateBoxWithMovie}
      />
    </main>
  );
}
