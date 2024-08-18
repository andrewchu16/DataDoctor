import Appointment from "../../components/appointment";
import Nav from "../../components/nav";
import { AppointmentData } from "../../objects/AppointmentData";
import { DialogueData } from "../../objects/DialogueData";

const LandingPage = () => {
    return (
        <div className="landing_page">
            <Appointment
                appointment={
                    new AppointmentData(
                        0,
                        0,
                        0,
                        0,
                        0,
                        "asd",
                        "Name",
                        "Virtual",
                        "Summary",
                        [new DialogueData("0", "Text", 123)],
                        "Accepted"
                    )
                }
            />
            <Nav />
        </div>
    );
};

export default LandingPage;
