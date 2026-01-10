import {AuthContext} from "./AuthContext";
import * as React from "react";
import type {User} from "../types/user.ts";
import type {LoginCredentials} from "../types/loginCredentials.ts";
import {authService} from "../services/authService.ts";

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState<User | null>(null);

    const login = async (credentials: LoginCredentials): Promise<void> => {
        const authenticatedUser = await authService.login(credentials);
        setUser(authenticatedUser);
    };

    const logout = (): void => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
};