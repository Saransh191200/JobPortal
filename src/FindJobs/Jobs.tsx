import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import Sort from "./Sort";
import { getAllJobs } from "../Services/JobService";

const Jobs=()=>{
    const [jobList,setJobList]=useState([{}]);
    useEffect(()=>{
        getAllJobs()
        .then((res)=>{
            setJobList(res);
        })
        .catch((err)=>{throw err});
    },[])
    return(
        <div className="p-5  ">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold mb-5 mx-9">Recommended Jobs</div>
                <Sort/>
            </div>
            <div className="mt-5  flex gap-5 justify-evenly  flex-wrap ">
                {
                    jobList.map((item,index)=>
                        <JobsCard key={index} {...item} />
                    )
                }
            </div>
            
        </div>
    )

}
export default Jobs;