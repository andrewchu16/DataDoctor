import { AppointmentData } from "../../objects/AppointmentData";
import Button from "../button";
import "./style.css";

type PendingCardProps = {
    appointment: AppointmentData;
};

const PendingCard: React.FC<PendingCardProps> = ({ appointment }) => {
    return (
        <div className="pending_card">
            <div className="pending_card_info">
                <div className="pending_card_header">
                    <span className="pending_card_info_doctor">
                        {appointment.doctorId}
                    </span>
                </div>
                <span className="pending_card_info_description">
                    {appointment.name}
                </span>
                <div className="pending_card_info_footer">
                    <span className="pending_card_info_time">
                        {new Date(appointment.startTime).toLocaleTimeString()}
                    </span>
                    &#x2022;
                    <span className="pending_card_info_location">
                        {appointment.place}
                    </span>
                    &#x2022;
                    <span className="pending_card_info_duration">
                        {(appointment.endTime - appointment.startTime) / 10000}{" "}
                        {" mins"}
                    </span>
                </div>
            </div>
            <div className="pending_card_action">
                <Button icon="check" type="primary">
                    {""}
                </Button>
                <Button icon="close" type="secondary">
                    {""}
                </Button>
            </div>
        </div>
    );
};

export default PendingCard;
