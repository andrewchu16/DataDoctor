export class UserData {
    constructor(
        public id: number,
        public displayName: string,
        public userType: "doctor" | "patient",
        public profilePicture: string
    ) {}
}
