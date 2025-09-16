import { Button} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";
import { useEffect, useState } from "react";
import { getAllProfiles } from "../Services/ProfileService";

const TalentProfile=()=>{
    const navigate=useNavigate();
    const [talents,setTalents]=useState<any>([{}])
    useEffect(()=>{
        getAllProfiles()
            .then((res)=>{
                setTalents(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[])
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <div className="">
            
                <Button my="sm" onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light" > Back</Button>
            
           
            </div>
            
            
            <div className="flex gap-5">
                <Profile />
                <RecommendedTalent talents={talents}/>
            </div>
            
        </div>
    )
}
export default TalentProfile;