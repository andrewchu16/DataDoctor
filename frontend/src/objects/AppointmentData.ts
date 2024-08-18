import { DialogueData } from "./DialogueData";

export class AppointmentData {
    constructor(
        public id: number,
        public startTime: number,
        public endTime: number,
        public audioData: string, // base64 encoded
        public name: string,
        public place: "Virtual" | "In-person",
        public summary: string,
        public transcript: DialogueData[],
        public status: "Pending" | "Accepted" | "Rejected"
    ) {}
}
