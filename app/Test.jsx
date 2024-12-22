"use client";

import useSearchContext from "./context/Context";
import SearchResults from "./searchresult/page";

export default function Test({ children }) {
  const { searchValue } = useSearchContext();

  return (
    <>
      {searchValue ? (
        <SearchResults searchValue={searchValue} />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
