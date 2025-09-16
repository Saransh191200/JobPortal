import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CertiInput from "./CertiInput";
import UserCertCard from "./UserCertCard";

const Certificate=()=>{
    const profile=useSelector((state:any)=>state.profile);
    const [edit,setEdit]=useState(false);
    const[addCerti,setAddCerti]=useState(false);
    const handleEdit=()=>{
        setEdit(!edit);
    }
    return (
        <>
        <div className="text-2xl font-semibold mb-5 flex justify-between items-center">
                    Certifications
                    <div>
                        <ActionIcon onClick={()=>setAddCerti(true)}  size="lg" color="brightSun.4" variant="subtle" aria-label="Settings">
                                <IconPlus className="h-4/5 w-4/5 "/>
                        </ActionIcon>
                        <ActionIcon onClick={handleEdit}  size="lg" color="brightSun.4" variant="subtle" aria-label="Settings">
                            {edit?<IconX className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 "/>}
                        </ActionIcon>
                    </div>
                </div>
                
                <div className="flex flex-col gap-7">
                    {
                        profile?.certifications?.map((certi:any,index:any)=><UserCertCard key={index} {...certi} index={index} edit={edit}/>)
                    }
                </div>
                <div className="mt-5">
                {
                    addCerti && <CertiInput add setEdit={setAddCerti}/>
                }
                </div>
        </>
    )

}
export default Certificate;