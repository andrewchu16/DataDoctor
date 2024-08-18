import { useContext, createContext, ReactNode, useState } from "react";
import { defaultUser, AuthUser } from "../objects/AuthUser";

interface AuthContextType {
    email: string;
    accessToken: string;
    authenticated: boolean;
    ready: boolean;
    user: AuthUser;
    setEmail: (email: string) => void;
    setAccessToken: (accessToken: string) => void;
    setAuthenticated: (authenticated: boolean) => void;
    setUser: (user: AuthUser) => void;
    setReady: (ready: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [email, setEmail] = useState<string>("");
    const [accessToken, setAccessToken] = useState<string>("");
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [ready, setReady] = useState<boolean>(false);
    const [user, setUser] = useState<AuthUser>(defaultUser);

    return (
        <AuthContext.Provider
            value={{
                email,
                accessToken,
                authenticated,
                user,
                ready,
                setEmail,
                setAccessToken,
                setAuthenticated,
                setUser,
                setReady,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
