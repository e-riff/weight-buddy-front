import type { LoginCredentials } from "../types/loginCredentials";
import type { User } from "../types/user";

export const authService = {
    login: async (
        credentials: LoginCredentials
    ): Promise<User> => {
        const { nickname, password } = credentials;

        if (nickname === "Super-Laëti" && password === "password") {
            return {
                id: "1",
                nickname: "Super-Laëti",
            };
        }

        throw new Error("INVALID_CREDENTIALS");
    },
};
