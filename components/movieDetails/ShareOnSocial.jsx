import Image from "next/image";
import Link from "next/link";

export default function ShareOnSocial({ image, title, description }) {
  const currentURL = typeof window !== "undefined" ? window.location.href : "";
  const encodedURL = encodeURIComponent(currentURL);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  return (
    <div className="mb-12 flex items-center gap-12">
      <h3 className="text-gray-400 mb-2">Share on social media</h3>
      <div className="flex flex-wrap gap-4">
        {/* Facebook Share */}
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&quote=${encodedDescription}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            src="http://facebook.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={32}
            width={32}
          />
          <p className="text-sm">Facebook</p>
        </Link>

        {/* Twitter Share */}
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            src="http://x.com/favicon.ico"
            alt="Twitter"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={32}
            width={32}
          />
          <p className="text-sm">X</p>
        </Link>

        {/* LinkedIn Share */}
        <Link
          href={`https://www.linkedin.com/shareArticle?url=${encodedURL}&title=${encodedTitle}&summary=${encodedDescription}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            src="http://linkedin.com/favicon.ico"
            alt="LinkedIn"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={32}
            width={32}
          />
          <p className="text-sm">LinkedIn</p>
        </Link>
      </div>
    </div>
  );
}
