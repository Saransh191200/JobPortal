import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import CardHist from "./CardHist";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/JobService";
import { useSelector } from "react-redux";

const JobHistory=()=>{
    // const user=useSelector((state:any)=>state.user);
    const profile=useSelector((state:any)=>state.profile);
    const[activeTab,setActiveTab]=useState<any>('APPLIED');
    const[jobList,setJobList]=useState<any>([{}]);
    const[showList,setShowList]=useState<any>([{}])
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res);
            setShowList(res.filter((job:any)=>{
                let found=false;
                job.applicants?.forEach((applicant:any)=>{
                    if(applicant.applicantId==profile.id && applicant.applicationStatus=="APPLIED"){
                        found=true;
                    }
                })
                return found;
            }));
        })
        .catch((err)=>{console.log(err)});
    },[])
    const handleTabChange=(value:string|null)=>{
        setActiveTab(value);
        if(value=="SAVED"){
            console.log("Saved Jobs:", profile.savedJobs);
            setShowList(jobList.filter((job:any)=>profile.savedJobs?.includes(job.id)));
            
        }
        else{
            setShowList(jobList.filter((job:any)=>{
                let found=false;
                job.applicants?.forEach((applicant:any)=>{
                    if(applicant.applicantId==profile.id && applicant.applicationStatus==value){
                        found=true;
                    }
                })
                return found;
            }));
            
        }
    }
    return(
        <div>
            <div className="text-2xl font-semibold mb-5">Job History</div>
            <div>
                <Tabs value={activeTab} onChange={handleTabChange} keepMounted={true} color="yellow" variant="outline" radius="lg" >
                    <Tabs.List className="[&_button]:text-lg mb-5 [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value={activeTab}>
                        <div className="mt-5 flex gap-5 flex-wrap ">
                            {
                            showList.map((item:any,index:number)=>
                                <CardHist key={index} {...item} {...{[activeTab.toLowerCase()]:true}} />
                            )
                            }
                        </div>
                    </Tabs.Panel>
                    
                </Tabs>
            </div>
        </div>
    )

}
export default JobHistory;