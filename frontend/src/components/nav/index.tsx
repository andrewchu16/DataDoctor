import "./style.css";

const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar_item home active">
                <span className="material-symbols-outlined">home</span>
                <span className="navbar_item_text">Home</span>
            </div>
            <div className="navbar_item sessions">
                <span className="material-symbols-outlined">description</span>
                <span className="navbar_item_text">Session</span>
            </div>
            <div className="navbar_item schedule">
                <span className="material-symbols-outlined">
                    calendar_add_on
                </span>
                <span className="navbar_item_text">Schedule</span>
            </div>
            <div className="navbar_item profile">
                <span className="material-symbols-outlined">
                    account_circle
                </span>
                <span className="navbar_item_text">Profile</span>
            </div>
        </div>
    );
};

export default Nav;
