export class AppointmentData {
    constructor(
        public id: number,
        public doctorId: number,
        public patientId: number,
        public startTime: number,
        public endTime: number,
        public status: string,
        public description: string,
        public location: string
    ) {}
}
