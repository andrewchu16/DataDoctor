import Appointment from "../../components/appointment";
import Nav from "../../components/nav";
import { AppointmentData } from "../../objects/AppointmentData";

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
                        "Status",
                        "Desc",
                        "Location"
                    )
                }
            />
            <Nav />
        </div>
    );
};

export default LandingPage;
