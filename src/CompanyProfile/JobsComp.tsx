import { jobList } from "../Data/JobsData";
import JobsCard from "../FindJobs/JobsCard";

const JobsComp=()=>{
 return(
    <div className="flex flex-wrap gap-7 mt-10 justify-evenly">
        {
            jobList.map((item,index)=>
                <JobsCard key={index} {...item} />
            )
        }
    </div>
 )
}
export default JobsComp;