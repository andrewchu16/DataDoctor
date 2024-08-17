interface User {
    email: string;
    accessToken?: string;
}

const defaultUser: User = {
    email: "email@example.com",
    accessToken: "",
};

export { defaultUser };
export type { User };
