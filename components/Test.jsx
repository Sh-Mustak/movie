"use client";

import useSearchContext from "@/app/context/Context";
import SearchResults from "@/app/searchresult/page";
import { useEffect, useState } from "react";

export default function Test({ children }) {
  const { searchValue } = useSearchContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (searchValue?.length > 0) {
      setLoading(false); // Stop loading once results are available
    } else {
      setLoading(false); // Stop loading if there are no results
    }
  }, [searchValue]);

  return (
    <>
      {loading ? (
        <div className="text-gray-500">Loading...</div> // Show loading text or spinner
      ) : searchValue?.length > 0 ? (
        <SearchResults searchValue={searchValue} />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
