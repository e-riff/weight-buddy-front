import {useState} from "react";

type LoginFormState = {
    nickname: string;
    password: string;
};

export const Login = () => {
    const [loginFormState, setLoginFormState] = useState<LoginFormState>({
        nickname: "",
        password: "",
    });
    const [isPending, setIsPending] = useState<boolean>(false);

    return (
        <>
            <div>Login</div>
            <form
                aria-busy={isPending}
                onSubmit={(event) => {
                event.preventDefault();
                setIsPending(true);
            }}>
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