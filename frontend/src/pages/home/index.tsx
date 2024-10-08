import Appointment from "../../components/appointment";
import PendingCard from "../../components/pendingCard";
import ReadyCard from "../../components/readyCard";
import { AppointmentData } from "../../objects/AppointmentData";
import { DialogueData } from "../../objects/DialogueData";
import defaultPfp from "../../assets/default.png";
import "./style.css";
import { useEffect } from "react";

const appointmentList = [
    new AppointmentData(
        0,
        0,
        0,
        Date.now() + 350000,
        0,
        "asd",
        "Name",
        "Virtual",
        "Summary",
        [new DialogueData("0", "Text", 123)],
        "Accepted"
    ),
    new AppointmentData(
        0,
        0,
        0,
        Date.now() + 398200,
        0,
        "asd",
        "Name",
        "Virtual",
        "Summary",
        [new DialogueData("0", "Text", 123)],
        "Accepted"
    ),
    new AppointmentData(
        0,
        0,
        0,
        Date.now() + 550232,
        0,
        "asd",
        "Name",
        "Virtual",
        "Summary",
        [new DialogueData("0", "Text", 123)],
        "Accepted"
    ),
    new AppointmentData(
        0,
        0,
        0,
        Date.now() + 872300,
        0,
        "asd",
        "Name",
        "Virtual",
        "Summary",
        [new DialogueData("0", "Text", 123)],
        "Accepted"
    ),
];

const currentAppointment = new AppointmentData(
    0,
    0,
    0,
    Date.now() + 850000,
    Date.now() + 900000,
    "asd",
    "Name",
    "Virtual",
    "Summary",
    [new DialogueData("0", "Text", 123)],
    "Accepted"
);

const pendingAppointment = new AppointmentData(
    0,
    0,
    0,
    Date.now(),
    Date.now() + 850000,
    "asd",
    "Name",
    "Virtual",
    "Summary",
    [new DialogueData("0", "Text", 123)],
    "Accepted"
);

const Home = () => {
    useEffect(() => {
        document.querySelectorAll(".navbar_item").forEach((item) => {
            item.classList.remove("active");
        });

        document.querySelector(".navbar_item.home")?.classList.add("active");
    }, []);
    return (
        <div className="home">
            <div className="home_top_bar">
                <span className="home_top_bar_greet">
                    Hello, <b>Carla</b>
                </span>
                <img className="home_top_bar_profile" src={defaultPfp} />
            </div>
            <div className="section home_get_ready">
                <div className="section_header">Get Ready</div>
                <ReadyCard appointment={currentAppointment} />
            </div>
            <div className="section home_pending">
                <div className="section_header">Pending Appointments</div>
                <PendingCard appointment={pendingAppointment} />
            </div>
            <div className="section home_upcoming">
                <div className="section_header">Upcoming Appointment</div>
                <div className="appointment_list">
                    {appointmentList.map((appointment) => (
                        <Appointment
                            key={appointment.id}
                            appointment={appointment}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
