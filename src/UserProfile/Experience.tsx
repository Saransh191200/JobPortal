import { ActionIcon } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ExpInput from "./ExpInput";
import UserExpCard from "./UserExpCard";

const Experience=()=>{
    const profile=useSelector((state:any)=>state.profile);
    const[edit,setEdit]=useState(false);
    const[addExp,setAddExp]=useState(false);
    const handleEdit=()=>{
        setEdit(!edit)
    }
    return(
        <>
        <div className="text-2xl font-semibold mb-5 flex justify-between items-center">
                    Experience
                    <div>
                        <ActionIcon onClick={()=>setAddExp(true)}  size="lg" color="brightSun.4" variant="subtle" aria-label="Settings">
                            <IconPlus className="h-4/5 w-4/5 "/>
                        </ActionIcon>

                        <ActionIcon onClick={()=>handleEdit()}  size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle" aria-label="Settings">
                            {edit?<IconX className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 "/>}
                        </ActionIcon>
                    </div>
                    

                </div>
                <div className="mb-5">
                    {
                    addExp&&<ExpInput add setEdit={setAddExp}/>
                    }
                </div>
                <div className="flex flex-col gap-7">
                    {
                        profile?.experiences?.map((exp:any,index:any)=><UserExpCard key={index} {...exp} index={index} edit={edit}/>)
                    }
                </div>
        </>
    )

}
export default Experience;