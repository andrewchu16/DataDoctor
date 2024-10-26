import { useEffect } from "react";
import Nav from "../../components/nav";

const Profile = () => {
    useEffect(() => {
        document.querySelectorAll(".navbar_item").forEach((item) => {
            item.classList.remove("active");
          });


        document.querySelector(".navbar_item.profile")?.classList.add("active");
      }, []);
      
    return <div className="profile">
        <Nav />
    </div>;
};

export default Profile;
