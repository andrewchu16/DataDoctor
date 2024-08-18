import TopRight from "../../assets/TopRight.svg";
import Left from "../../assets/Left.svg";
import BottomRight from "../../assets/BottomRight.svg";
import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";

const SignUp = () => {
    return (
        <div className="sign_up">
            <img className="sign_up_art topright" src={TopRight} />
            <img className="sign_up_art left" src={Left} />
            <img className="sign_up_art bottomright" src={BottomRight} />
            <div className="sign_up_content">
                <span className="sign_up_title">Sign Up</span>
                <div className="sign_up_fields">
                    <span className="sign_up_full_name">
                        Full Name
                        <Input type="text" placeholder="First Last" />
                    </span>
                    <span className="sign_up_OHIP_number">
                        OHIP Number
                        <Input type="text" placeholder="1234567890" />
                    </span>
                    <span className="sign_up_email">
                        Email
                        <Input type="text" placeholder="your@email.com" />
                    </span>
                    <span className="sign_up_password">
                        Password
                        <Input type="password" placeholder="********" />
                    </span>
                </div>
                <Button type="primary" icon={""}>
                    Sign Up
                </Button>
                <div className="sign_up_login">
                    Already have an account? <a href="/login">Log in.</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
