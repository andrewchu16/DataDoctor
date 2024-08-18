import { useEffect } from "react";
import Appointment from "../../components/appointment";
import { AppointmentData } from "../../objects/AppointmentData";
import { DialogueData } from "../../objects/DialogueData";
import "./style.css";

const appointmentList = [
  new AppointmentData(
    0,
    0,
    0,
    0,
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
    0,
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
    0,
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
    0,
    0,
    "asd",
    "Name",
    "Virtual",
    "Summary",
    [new DialogueData("0", "Text", 123)],
    "Accepted"
  ),
];

const Sessions = () => {
  useEffect(() => {
    // remove the active class from all .navbar_items
    document.querySelectorAll(".navbar_item").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(".navbar_item.sessions")?.classList.add("active");

  }, []);

  return (
    <div className="sessions">
      <div className="sessions_top_bar">
        <span className="sessions_top_bar_greet">Sessions</span>
      </div>
      <div className="section sessions_upcoming">
        <div className="section_header">Upcoming Appointment</div>
        <div className="appointment_list">
          {appointmentList.map((appointment) => (
            <Appointment key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
