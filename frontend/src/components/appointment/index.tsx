import "./style.css";
import { AppointmentData } from "../../objects/AppointmentData";

type AppointmentProps = {
    appointment: AppointmentData;
};

const colorList = ["purple", "turquoise", "yellow"];

const Appointment: React.FC<AppointmentProps> = ({ appointment }) => {
    const formatDate = (date: string): string => {
        const options = { day: '2-digit', month: 'short' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    return (
        <div className="appointment">
            <div
                className={`appointment_icon ${
                    colorList[Math.floor(Math.random() * colorList.length)]
                }`}
            >
                <span className="material-symbols-outlined">video_call</span>
            </div>
            <div className="appointment_info">
                <span className="appointment_info_doctor">
                    With {appointment.doctorId}
                </span>
                <span className="appointment_info_description">
                    {appointment.name}
                </span>
                <div className="appointment_info_footer">
                    <span className="appointment_info_date">
                        {formatDate(appointment.startTime)}
                    </span>
                    &#x2022;
                    <span className="appointment_info_location">
                        {appointment.place}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
