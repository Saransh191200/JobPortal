import { profile } from "../Data/TalentData";
import UserProfile from "../UserProfile/UserProfile";

const ProfilePage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <UserProfile/>
        </div>
    )

}
export default ProfilePage;