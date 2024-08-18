import "./style.css";
import defaultPfp from "../../assets/default.png";
import { DialogueData } from "../../objects/DialogueData";

const transcriptList = [new DialogueData("", "Text 1", 8)];

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
                        <span className="session_view_top_bar_info_time">
                            18 Aug 2024
                        </span>
                        &#x2022;
                        {" Virtual"}
                    </div>
                </div>
                <div className="session_view_top_bar_right">
                    <img
                        className="session_view_top_bar_right_photo"
                        src={defaultPfp}
                    />
                    <span className="session_view_top_bar_right_doctor">
                        Dr. Doctor
                    </span>
                </div>
            </div>
            <div className="session_view_audio"></div>
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
                                    {transcript.timestamp}
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
