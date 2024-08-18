interface AuthUser {
    email: string;
    accessToken?: string;
}

const defaultUser: AuthUser = {
    email: "email@example.com",
    accessToken: "",
};

export { defaultUser };
export type { AuthUser };
