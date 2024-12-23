import Image from "next/image";
import React from "react";

export default function ShareOnSocial() {
  return (
    <div className="mb-12 flex  items-center gap-12 ">
      <h3 className="text-gray-400 mb-2">Share on social media</h3>
      <div className="flex flex-wrap gap-4">
        <button className="text-center cursor-pointer">
          <Image
            src="http://facebook.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={288}
            width={192}
          />
          <p className="text-sm">Facebook</p>
        </button>

        <button className="text-center cursor-pointer">
          <Image
            src="http://x.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={288}
            width={192}
          />
          <p className="text-sm">X</p>
        </button>

        <button className="text-center cursor-pointer">
          <Image
            src="http://linkedin.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={288}
            width={192}
          />
          <p className="text-sm">Linkedin</p>
        </button>
      </div>
    </div>
  );
}
