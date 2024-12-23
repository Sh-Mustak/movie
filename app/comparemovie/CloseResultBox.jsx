"use client";

export default function CloseResultBox({ handleRemove }) {
  return (
    <div className="flex justify-end mb-4">
      <button onClick={handleRemove} className="text-gray-400 hover:text-white">
        ✕
      </button>
    </div>
  );
}
