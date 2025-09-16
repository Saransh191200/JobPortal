import { ActionIcon } from "@mantine/core";
import { IconBriefcase, IconCheck, IconMapPin, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import UserSelectInput from "./UserSelectInput";
import fields1 from "../Data/ProfileData";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const Info=()=>{
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const user=useSelector((state:any)=>state.user);
    const [edit,setEdit]=useState(false);
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitile: '', company: '', location:'' },
        
    });
    const handleEdit=()=>{
        if(!edit){
            setEdit(true);
            form.setValues({jobTitile:profile.jobTitile,company:profile.company,location:profile.location})
        }
        else{
            setEdit(false);
        }
    }
    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile, ...form.getValues()};
        dispatch(changeProfile(updatedProfile));
        successNotification("Success","Profile updated successfully");
        console.log(updatedProfile);

    }
    
    return(
        <>
                    <div className=" text-3xl flex justify-between font-semibold">
                        {user.name}
                        <div>
                            {edit&&
                            <ActionIcon onClick={()=>handleSave()}  size="lg" color="green.8" variant="subtle" aria-label="Settings">
                                <IconCheck className="h-4/5 w-4/5 "/>
                                {/* <IconX className="h-4/5 w-4/5 "/> */}
                            </ActionIcon>}
                            
                            <ActionIcon onClick={()=>handleEdit()}  size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle" aria-label="Settings">
                                {edit?<IconX className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 "/>}
                            </ActionIcon>
                        </div>
                    </div>
                    {edit?<>
                    <div className="flex [&>*]:w-1/2 gap-10">
                        <UserSelectInput form={form} name="jobTitile" {...fields1[0]}/>
                        <UserSelectInput form={form} name="company" {...fields1[1]}/>
                    </div>
                    <div className="w-1/2">
                        <UserSelectInput form={form} name="location" {...fields1[2]}/>
                    </div>
                    </>:
                    <>
                    <div className="text-xl flex items-center gap-2"> 
                        <IconBriefcase className="h-5 w-5" stroke={1.5}/>
                        {profile.jobTitile} &bull; {profile.company}
                    </div>
                    <div className="flex gap-2 text-lg text-mine-shaft-400 items-center">
                        <IconMapPin className="h-5 w-5" stroke={1.5}/> 
                        <span>{profile.location}</span>
                    </div>
                    </>

                    }
        </>
    )


}
export default Info;