import "./style.css";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
    return (
        <div className="navbar">
            <Link to="/home" className="navbar_item home">
                <span className="material-symbols-outlined">home</span>
                <span className="navbar_item_text">Home</span>
            </Link>
            <Link to="/sessions" className="navbar_item sessions">
                <span className="material-symbols-outlined">description</span>
                <span className="navbar_item_text">Session</span>
            </Link>
            <Link to="/schedule" className="navbar_item schedule">
                <span className="material-symbols-outlined">
                    calendar_add_on
                </span>
                <span className="navbar_item_text">Schedule</span>
            </Link>
            <Link to="/profile" className="navbar_item profile">
                <span className="material-symbols-outlined">
                    account_circle
                </span>
                <span className="navbar_item_text">Profile</span>
            </Link>
        </div>
    );
};

export default Nav;

// const Nav = () => {
//     return (
//         <div className="navbar">
//             <div className="navbar_item home active">
//                 <span className="material-symbols-outlined">home</span>
//                 <span className="navbar_item_text">Home</span>
//             </div>
//             <div className="navbar_item sessions">
//                 <span className="material-symbols-outlined">description</span>
//                 <span className="navbar_item_text">Session</span>
//             </div>
//             <div className="navbar_item schedule">
//                 <span className="material-symbols-outlined">
//                     calendar_add_on
//                 </span>
//                 <span className="navbar_item_text">Schedule</span>
//             </div>
//             <div className="navbar_item profile">
//                 <span className="material-symbols-outlined">
//                     account_circle
//                 </span>
//                 <span className="navbar_item_text">Profile</span>
//             </div>
//         </div>
//     );
// };

// export default Nav;
