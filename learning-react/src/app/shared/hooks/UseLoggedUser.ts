import { useContext } from "react";
import { LoggedUserContext } from "../contexts";

export const useLoggetUser = () => {
    return useContext(LoggedUserContext);
}