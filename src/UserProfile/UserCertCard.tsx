import { ActionIcon, Button } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import CertiInput from "./CertiInput";
import { formatDate } from "../Services/Utilites";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const UserCertCard=(props:any)=>{
    const profile=useSelector((state:any)=>state.profile);
    const dispatch=useDispatch();
    const handleDelete=()=>{
        let certi=[...profile.certifications];
        certi.splice(props.index,1);
        let updatedProfile={...profile,certifications:certi};
        dispatch(changeProfile(updatedProfile));
        successNotification("Deleted","Certification deleted successfully");


    }
    return(
<>
{
<div>
<div className="flex  items-center justify-between">
        
    <div className="flex gap-2 items-center">
        {/* logo */}
        <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
        </div>
        {/* text */}
        <div>
            {/* main heading */}
           <div className="font-semibold">{props.name}</div>
            {/* subheading */}
            <div className="text-sm text-mine-shaft-300"> {props.issuer} </div>
        </div>
    </div>
    {/* like part */}
    <div className="flex gap-3 items-center">
        <div className="flex flex-col items-end" >
            <div className="text-sm text-mine-shaft-300">{formatDate(props.issueDate)}</div>
            <div className="text-sm text-mine-shaft-300">{props.certificateId}</div>
        </div>
        {
        props.edit && <ActionIcon onClick={handleDelete} color="red.8" variant="subtle" aria-label="Settings">
        <IconTrash className="h-4/5 w-4/5 " stroke={1.5}/>
        </ActionIcon>
        }
    </div>
</div>


</div>
}
    
 </>
    )

}
export default UserCertCard;