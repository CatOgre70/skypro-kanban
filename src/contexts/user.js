import {createContext} from "react";
import {getUserDataFromLocalStorage} from "../localstorageops.js";

export const UserContext = createContext(getUserDataFromLocalStorage());
