import TopRight from "../../assets/TopRight.svg";
import Left from "../../assets/Left.svg";
import BottomRight from "../../assets/BottomRight.svg";
import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";

const LogIn = () => {
    return (
        <div className="log_in">
            <img className="log_in_art topright" src={TopRight} />
            <img className="log_in_art left" src={Left} />
            <img className="log_in_art bottomright" src={BottomRight} />
            <div className="log_in_content">
                <span className="log_in_title">Login</span>
                <div className="log_in_fields">
                    <span className="log_in_OHIP_number">
                        OHIP Number
                        <Input type="text" placeholder="1234567890" />
                    </span>
                    <span className="log_in_email">
                        Email
                        <Input type="text" placeholder="your@email.com" />
                    </span>
                    <span className="log_in_password">
                        Password
                        <Input type="password" placeholder="********" />
                    </span>
                </div>
                <Button type="primary" icon={""}>
                    Login
                </Button>
                <div className="log_in_signup">
                    Don't already have an account?{" "}
                    <a href="/signup">Sign Up.</a>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
