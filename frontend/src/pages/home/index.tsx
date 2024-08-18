import ReadyCard from "../../components/readyCard";
import { AppointmentData } from "../../objects/AppointmentData";

const Home = () => {
    return (
        <div className="home">
            <div className="home_top_bar">
                <h1>Hello, </h1>
            </div>
            <div className="home_get_ready">
                <ReadyCard
                    appointment={
                        new AppointmentData(
                            0,
                            0,
                            0,
                            0,
                            0,
                            "Status",
                            "Desc",
                            "Virtual"
                        )
                    }
                />
            </div>
            <div className="home_pending"></div>
            <div className="home_upcoming"></div>
        </div>
    );
};

export default Home;
