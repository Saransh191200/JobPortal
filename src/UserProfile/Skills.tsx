import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const Skills=()=>{
    const dispatch=useDispatch();
    const[edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const[skills,setSkills]=useState<string[]>([])
    const handleEdit=()=>{
        if(!edit){
            setEdit(true);
            setSkills(profile.skills);

        }
        else{
            setEdit(false);
        }
    }
    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile,skills:skills}
        dispatch(changeProfile(updatedProfile));
        successNotification("Success","Skills updated Successfully");

    }
    return(
        <>
            <div className="text-2xl font-semibold mb-3 flex justify-between items-center "> 
                    Skills
                    <div>
                    {edit&&
                        <ActionIcon onClick={()=>handleSave()} size="lg" color="green.8" variant="subtle" aria-label="Settings">
                            <IconCheck className="h-4/5 w-4/5 "/>
                             {/* <IconX className="h-4/5 w-4/5 "/> */}
                        </ActionIcon>}
                            
                        <ActionIcon onClick={()=>handleEdit()}  size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle" aria-label="Settings">
                            {edit?<IconX className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 "/>}
                        </ActionIcon>
                    </div>
                    
            </div>
                {
                    edit?<TagsInput value={skills} onChange={setSkills} 
                    label="Press Enter to submit a skill" placeholder="Add Skill"
                    splitChars={[',', ' ', '|']}/>:
                    <div className=" flex flex-wrap gap-2">
                    {
                        profile?.skills?.map((item:any,index:any)=>
                            <div key={index} className="bg-bright-sun-300 rounded-3xl text-bright-sun-400 px-3 py-1 bg-opacity-15 text-sm font font-medium hover:animate-bounce transition duration-100 ease-in-out cursor-pointer">{item}</div>
                        )
                    }
                    
                    </div>    
                }
        </>
    )
}
export default Skills;