import React from "react";

export default function Loading() {
  return (
    <div class="flex w-48 h-[288px] rounded-lg cursor-pointer hover:scale-105 transition-transform">
      <div class="w-48 h-[288px] rounded-lg bg-zinc-800 relative">
        <div class="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
          <div class="animate-pulse w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-[length:200%_100%] animate-[shimmer_.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
