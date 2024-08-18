import { AppointmentData } from "../../objects/AppointmentData";
import "./style.css";
import defaultPfp from "../../assets/default.png";
import Button from "../button";

type ReadyCardProps = {
    appointment: AppointmentData;
};

const ReadyCard: React.FC<ReadyCardProps> = ({ appointment }) => {
    return (
        <div className="ready_card">
            <span className="ready_card_title">{appointment.name}</span>
            <div className="ready_card_subtitle">
                <span className="ready_card_start">
                    {appointment.startTime}
                </span>
                &#x2022;
                <span className="ready_card_location">{appointment.place}</span>
                &#x2022;
                <span className="ready_card_duration">
                    {appointment.endTime - appointment.startTime}.
                </span>
            </div>
            <div className="ready_card_profile">
                <img className="ready_card_profile_image" src={defaultPfp} />
                <span className="ready_card_profile_name">
                    {appointment.patientId}
                </span>
            </div>
            <Button icon="call" type="primary">
                Call
            </Button>
        </div>
    );
};

export default ReadyCard;
