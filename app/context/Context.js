'use client'
import { createContext, useContext } from "react";

export const SearchContext = createContext();
const useSearchContext = () => {
    return useContext(SearchContext);
}
export default useSearchContext