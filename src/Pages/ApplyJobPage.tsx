import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";

const ApplyJobPage=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const [job,setJob]=useState<any>(null)
    useEffect(()=>{
        getJob(id)
        .then((res)=>setJob(res))
        .catch((err)=>{throw err})

    },[id])
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <div className="">
                
                <Button leftSection={<IconArrowLeft size={20}/>} onClick={()=>navigate(-1)} color="brightSun.4" variant="light" > Back</Button>
               
            </div>
            <div>
                <ApplyJobComp {...job} />
            </div>
            
            
        </div>
    )
}
export default ApplyJobPage;