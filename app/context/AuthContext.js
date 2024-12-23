'use client'
import { createContext, useContext } from "react";
export const AuthContext = createContext();
const useAuthContext = () => {
    return useContext(AuthContext);
}
export default useAuthContext;