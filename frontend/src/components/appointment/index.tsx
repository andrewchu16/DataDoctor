import "./style.css";
import { AppointmentData } from "../../objects/AppointmentData";

type AppointmentProps = {
    appointment: AppointmentData;
};

const colorList = ["purple", "turquoise", "yellow"];

const Appointment: React.FC<AppointmentProps> = ({ appointment }) => {
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
                        {appointment.startTime}
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
