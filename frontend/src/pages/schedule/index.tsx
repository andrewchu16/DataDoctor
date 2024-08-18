import { useEffect } from "react";
import "./style.css";
import Input from "../../components/input";

const Schedule = () => {
  useEffect(() => {
    // remove the active class from all .navbar_items
    document.querySelectorAll(".navbar_item").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(".navbar_item.schedule")?.classList.add("active");

  }, []);

  const addAppointment = () => {
    setTimeout(() => {
      window.location.href = "/home";
    }, 300);
  }

  return (
    <div className="schedule">
      <div className="schedule_top_bar">
        <span className="schedule_top_bar_greet">Schedule an Appointment</span>
      </div>
      <div className="section schedule_upcoming">
        <div className="section_header">Appointment</div>
        <div className="appointment_form">
          <Input type="text" placeholder="Appointment Name" />
          <Input type="datetime-local" placeholder="Start Time" />
          <select>
            <option value="virtual">Virtual</option>
            <option value="in-person">In Person</option>
          </select>
          <Input type="text" placeholder="Doctor" />
          <button onClick={addAppointment}>Add Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
