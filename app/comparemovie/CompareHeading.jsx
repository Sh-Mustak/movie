import React from "react";

export default function CompareHeading() {
  return (
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Compare Movies</h1>
      <button class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
        Add Movie +
      </button>
    </div>
  );
}
