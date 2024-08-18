import Button from "../../components/button";
import TopRight from "../../assets/TopRight.svg";
import Left from "../../assets/Left.svg";
import BottomRight from "../../assets/BottomRight.svg";
import "./style.css";

const LandingPage = () => {
    return (
        <div className="landing_page">
            <img className="landing_page_art topright" src={TopRight} />
            <img className="landing_page_art left" src={Left} />
            <img className="landing_page_art bottomright" src={BottomRight} />
            <div className="landing_page_content">
                <span className="landing_page_title">
                    Bridging families and doctors together.
                </span>
                <span className="landing_page_subtitle">
                    I dunno what to write here guys.
                    <br />
                    Please help.
                </span>
                <Button icon="" type="primary">
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default LandingPage;
