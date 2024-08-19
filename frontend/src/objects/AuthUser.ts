interface AuthUser {
    email: string;
    password: string;
}

const defaultUser: AuthUser = {
    email: "email@example.com",
    password: "password",
};

export { defaultUser };
export type { AuthUser };
