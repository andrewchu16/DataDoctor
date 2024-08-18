import { DialogueData } from "./DialogueData";

export class TranscriptData {
    constructor(
        public appointmentId: number,
        public filePath: string,
        public summary: string,
        public dialogue: DialogueData[],
        public patient: string,
        public doctor: string
    ) {}
}
