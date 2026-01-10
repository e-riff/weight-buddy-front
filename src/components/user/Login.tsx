import {useState} from "react";
import type {LoginCredentials} from "../../types/loginCredentials.ts";
import {useAuth} from "../../hooks/useAuth.ts";

export const Login = () => {
    const [loginFormState, setLoginFormState] = useState<LoginCredentials>({
        nickname: "",
        password: "",
    });
    const [isPending, setIsPending] = useState<boolean>(false);
    const { login } = useAuth();


    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        setIsPending(true);

        try {
            await login(loginFormState);
        } catch (error) {
            alert('NON')
            console.log(error);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <>
            <div>Login</div>
            <form
                aria-busy={isPending}
                onSubmit={handleSubmit}>
                <label htmlFor="nickname">Pseudo</label>
                <input
                    type="text"
                    id="nickname"
                    value={loginFormState.nickname}
                    placeholder="super-Laëti"
                    disabled={isPending}
                    required
                    minLength={3}
                    onChange={(event) => setLoginFormState({
                        ...loginFormState,
                        nickname: event.target.value,
                    })}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="********"
                    value={loginFormState.password}
                    disabled={isPending}
                    required
                    minLength={8}
                    onChange={(event) => setLoginFormState({
                        ...loginFormState,
                        password: event.target.value,
                    })}/>

                <button type="submit" disabled={isPending}>
                    {isPending ? "Soumission..." : "Envoyer"}
                </button>
            </form>
        </>
    );
};