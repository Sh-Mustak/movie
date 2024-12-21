"use client";

import useSearchContext from "./context/Context";
import SearchResults from "./searchresult/page";

export default function Test({ children }) {
  const { searchValue } = useSearchContext();
  console.log(searchValue);
  const searchValuee = "avatar";
  return (
    <>
      {searchValuee ? (
        <SearchResults searchValue={searchValuee} />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
