export class DialogueData {
    constructor(
        public id: string,
        public text: string,
        public timestamp: number,
        public speaker: "doctor" | "patient"
    ) {}
}