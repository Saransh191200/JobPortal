import { useParams } from "react-router-dom";
import { jobList } from "../Data/JobsData";
import JobsCard from "../FindJobs/JobsCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/JobService";



const RecommendedJob=()=>{
    const {id}=useParams();
    const[jobList,setJobList]=useState([{}]);
    useEffect(()=>{
        getAllJobs()
        .then((res)=>setJobList(res))
        .catch((err)=>{throw err})

    })
    return(
        <div >
            <div className="text-xl font-semibold mb-5 text-center">Recommended Jobs</div>
            <div className="flex flex-col flex-wrap gap-5 items-center">
            {
                jobList?.map((job:any,index:number)=> index<6 && id!==job.id && <JobsCard  key={index} {...job} />)
            }
            </div>

        </div>
    )

}
export default RecommendedJob;