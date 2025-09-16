import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const About=()=>{
    const dispatch=useDispatch();
    const[edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const[about,setAbout]=useState("");
    const handleEdit=()=>{
        if(!edit){
            setEdit(true);
            setAbout(profile?.about);
        }
        else{
            setEdit(false);
        }
    }
    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile,about:about};
        dispatch(changeProfile(updatedProfile));
        successNotification("Success","About updated successfully");

    }
    return(
        <>
        <div className="text-2xl font-semibold mb-3 flex justify-between items-center ">
                    About
                   <div>
                        {edit&&
                        <ActionIcon onClick={()=>handleSave()} size="lg" color="green.8" variant="subtle" aria-label="Settings">
                            <IconCheck className="h-4/5 w-4/5 "/>
                             {/* <IconX className="h-4/5 w-4/5 "/> */}
                        </ActionIcon>
                        }
                            
                        <ActionIcon onClick={()=>handleEdit()}  size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle" aria-label="Settings">
                            {edit?<IconX className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 "/>}
                        </ActionIcon>
                    </div>

                    
                </div>
                {
                    edit? <Textarea
                    placeholder="Enter about youself..."
                    autosize
                    minRows={3}
                    value={about}
                    onChange={(event) => setAbout(event.currentTarget.value)}
                    />:
                    <div className="text-sm text-mine-shaft-300 text-justify">{profile?.about}</div>

                }
        </>
    )

}
export default About;