import { createContext } from "react";
import type {User} from "../types/user.ts";
import type {LoginCredentials} from "../types/loginCredentials.ts";

export type AuthContextValue = {
    user: User | null;
    login: (credentials: LoginCredentials) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
    undefined
);