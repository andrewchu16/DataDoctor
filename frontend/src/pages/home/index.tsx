import ReadyCard from "../../components/readyCard";
import { AppointmentData } from "../../objects/AppointmentData";
import { DialogueData } from "../../objects/DialogueData";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home_top_bar">
                <h1>Hello, </h1>
            </div>
            <div className="section home_get_ready">
                <div className="section_header">Get Ready</div>
                <ReadyCard
                    appointment={
                        new AppointmentData(
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
            </div>
            <div className="section home_pending">
                <div className="section_header">Pending Appointments</div>
            </div>
            <div className="section home_upcoming"></div>
        </div>
    );
};

export default Home;
