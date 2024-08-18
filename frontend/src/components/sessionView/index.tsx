import "./style.css";
import defaultPfp from "../../assets/default.png";
import { DialogueData } from "../../objects/DialogueData";

const transcriptList = [
    new DialogueData("id1", "Hello. My name is Dr. Wei. How may I help you today?", 1631234567),
    new DialogueData("id2", "Hi. Thank you for meeting with me today.", 1631234568),
    new DialogueData("id3", "Gladly.", 1631234569),
    new DialogueData("id4", "I would like to discuss treatment regarding my upper back.", 1631234570),
    new DialogueData("id5", "For sure. Let's start with a few diagnostic exercises", 1631234571),
    new DialogueData("id6", "Sure, let's continue.", 1631234572),
    new DialogueData("id7", "What specific symptoms are you experiencing in your upper back?", 1631234573),
    new DialogueData("id8", "Have you had any previous injuries or medical conditions related to your upper back?", 1631234574),
    new DialogueData("id9", "Let's proceed with a physical examination to assess your condition.", 1631234575),
    new DialogueData("id10", "Based on your symptoms and medical history, it seems like you may be experiencing muscle strain or tension in your upper back. I recommend trying some stretching exercises and applying heat or cold packs to alleviate the discomfort. If the pain persists or worsens, it would be best to schedule a follow-up appointment for further evaluation.", 1631234576)
];

const SessionView = () => {
  return (
    <div className="session_view">
      <div className="session_view_title">Session View</div>
      <div className="session_view_top_bar">
        <div className="session_view_top_bar_left">
          <span className="session_view_top_bar_description">
            Allergy Testing
          </span>
          <div className="session_view_top_bar_info">
            <span className="session_view_top_bar_info_time">18 Aug 2024</span>
            &#x2022;
            {" Virtual"}
          </div>
        </div>
        <div className="session_view_top_bar_right">
          <img className="session_view_top_bar_right_photo" src={defaultPfp} />
          <span className="session_view_top_bar_right_doctor">Dr. Wei</span>
        </div>
      </div>
      <audio controls className=""></audio>
      <div className="session_view_summary">
        <div className="session_view_section_title">Summary</div>
        <div className="session_view_section_content">
          Summary of transcript here
        </div>
      </div>
      <div className="session_view_transcripts">
        <div className="session_view_section_title">Transcripts</div>
        <div className="session_view_section_content">
          {transcriptList.map((transcript) => {
            return (
                <div className="session_view_transcript">
                    <span className="session_view_transcript_timestamp">
                        {new Date((transcript.timestamp - transcriptList[0].timestamp)* 1000).toISOString().substr(14, 5)}
                    </span>
                    <span className="session_view_transcript_text">
                        {transcript.text}
                    </span>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SessionView;
