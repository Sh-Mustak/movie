"use client";

import useSearchContext from "@/app/context/Context";
import SearchResults from "@/app/searchresult/page";

export default function Test({ children }) {
  const { searchValue } = useSearchContext();
  console.log(searchValue.length);
  // const searchValuee = "avatar";
  return (
    <>
      {searchValue?.length > 0 ? (
        <SearchResults searchValue={searchValue} />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
