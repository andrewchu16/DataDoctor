import { useEffect } from "react";
import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";

const Schedule = () => {
    useEffect(() => {
        // remove the active class from all .navbar_items
        document.querySelectorAll(".navbar_item").forEach((item) => {
            item.classList.remove("active");
        });
        document
            .querySelector(".navbar_item.schedule")
            ?.classList.add("active");
    }, []);

    const addAppointment = () => {
        setTimeout(() => {
            window.location.href = "/home";
        }, 300);
    };

    return (
        <div className="schedule">
            <div className="schedule_top_bar">
                <span className="schedule_top_bar_greet">
                    Schedule an Appointment
                </span>
            </div>
            <div className="section schedule_upcoming">
                <div className="appointment_form">
                    <div className="schedule_appointment_name">
                        Appointment Name
                        <Input type="text" placeholder="Appointment Name" />
                    </div>
                    <div className="schedule_appointment_date">
                        Date & Time
                        <Input type="datetime-local" placeholder="Start Time" />
                    </div>
                    <div className="schedule_appointment_place">
                        Place
                        <select>
                            <option value="virtual">Virtual</option>
                            <option value="in-person">In Person</option>
                        </select>
                    </div>
                    <div className="schedule_appointment_doctor">
                        Doctor Name
                        <Input type="text" placeholder="Dr. Doctor" />
                    </div>
                </div>
                <Button
                    type="primary"
                    onClick={addAppointment}
                    icon="edit_calendar"
                >
                    Add Appointment
                </Button>
            </div>
        </div>
    );
};

export default Schedule;
