export class PatientData {
    constructor(
        public id: number,
        public email: string,
        public pfp: string, // base64 encoded
        public appointments: string[]
    ) {}
}
