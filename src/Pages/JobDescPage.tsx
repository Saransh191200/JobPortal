import { Button} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJob from "../JobDesc/RecommendedJob"; 
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";


const JobDescPage=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const [job,setJob]=useState<any>(null);
    useEffect(()=>{
        window.scrollTo(0,0);
        getJob(id)
        .then((res)=>setJob(res))
        .catch((err)=>{throw err})
    },[id])

    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <div className="">
                {/* <Link className="my-5 inline-block" to="/find-jobs"> */}
                    <Button onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light" > Back</Button>
                {/* </Link> */}
            </div>
            <div className="mt-10">
                <div className="flex gap-5 justify-around">
                    <JobDesc  {...job}/>
                    <RecommendedJob/>
                </div>
            </div>
            

            
            
            
        </div>
    )
}
export default JobDescPage;