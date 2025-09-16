import { ActionIcon, Button, Divider } from "@mantine/core";
import {   IconBookmark, IconBookmarkFilled} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card,} from "../Data/JobDescData";
import DOMPurify from 'dompurify'
import { timeAgo } from "../Services/Utilites";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { useEffect, useState } from "react";
import { postJob } from "../Services/JobService";
import { errorNotification, successNotification } from "../Services/NotificationService";


const JobDesc=( props:any)=>{
    const user=useSelector((state:any)=>state.user);
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const data=DOMPurify.sanitize(props.description);
    const[applied,setApplied]=useState(false);
    useEffect(()=>{
        if(props.applicants?.filter((applicant:any)=>applicant.applicantId===profile.id).length>0){
            setApplied(true);
        }
        else{
            setApplied(false);
        }
    },[props])
    
    const handleSaveJob=()=>{
        let savedJobs:any=[...profile.savedJobs];
        if(savedJobs?.includes(props.id)){
            savedJobs=savedJobs?.filter((id:any)=>id!==props.id);
        }
        else{
            savedJobs=[...savedJobs,props.id];
        }
        let updatedProfile={...profile,savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));
    }

    const handleClose=()=>{
        postJob({...props,jobStatus:"CLOSED"})
            .then((res)=>{
                successNotification("Sucess","Job Closed Successfully");
            })
            .catch((err)=>{
                console.log(err);
                errorNotification("Failed","Job cannot be closed");
            })
    }

    return(
        <div className="w-2/3">
            <div className="flex justify-between">
               
                
                <div className="flex gap-3 items-center">
                    {/* logo */}
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    {/* text */}
                    <div className="flex flex-col gap-1">
                        {/* main heading */}
                        <div className="font-semibold text-2xl">{props.jobTitle}</div>
                        {/* subheading */}
                        <div className="text-lg text-mine-shaft-300"> {props.company} &#x2022; {timeAgo(props.postTime)}  &#x2022; {props.applicants?props.applicants.length:0} Applicants </div>
                    </div>
                </div>
                {/* apply now part  */}
                <div  className="flex flex-col gap-2 items-center">
                    {(props.edit|| !applied) && <Link to={props.edit?`/upload-job/${props.id}`:`/apply-job/${props.id}`}>
                        <Button size="sm" color="brightSun.4" variant="light" >{props.closed?"Reopen":props.edit?"Edit":"Apply Now"}</Button>
                    </Link>}
                    {
                        !props.edit && applied &&<Button size="sm" color="green.8" variant="light" >Applied</Button>
                    }
                    
                    {(props.edit && !props.closed )? <Button onClick={handleClose} size="sm" color="red.5" variant="light" >Close</Button>:
                    profile.savedJobs?.includes(props.id)?
                    <IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer text-bright-sun-400  "/>
                    :
                    <IconBookmark onClick={handleSaveJob} className="cursor-pointer hover:text-bright-sun-400 text-mine-shaft-300 "/>
                    }  
                </div>
                
                
                
            </div>
            <Divider   my="xl" /> 
            <div className="flex justify-between">
                {
                    card.map((item,index)=>
                        <div key={index} className="flex flex-col items-center gap-1">
                            <ActionIcon color="brightSun.4"className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                                <item.icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <div className="text-sm text-mine-shaft-300">{item.name}</div>
                            <div className="font-semibold">{props?props[item.id]:"NA"} {item.id=="packageOffered" && <>LPA</>}</div>
                        </div>
                    )
                }
            </div>
            <Divider   my="xl" />
            <div>
                <div className="text-xl font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        props?.skillsRequired?.map((skill:string,index:number)=>
                            <ActionIcon key={index} p="xs" color="brightSun.4"className="!h-fit !w-fit font-medium !text-sm" variant="light"  radius="xl" aria-label="Settings">
                                {skill}
                            </ActionIcon>
                        )
                    }
                </div>
            </div>
            <Divider   my="xl" />
            <div className="[&_h4]:font-semibold [&_h4]:text-xl [&_h4]:my-5 [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1" dangerouslySetInnerHTML={{__html:data}}>
            </div>
            <Divider   my="xl" />
            <div>
                <div  className="text-xl font-semibold mb-5">About Company</div>
                <div className="flex justify-between mb-4">
                    <div className="flex gap-3 items-center">
                        {/* logo */}
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                        </div>
                        {/* text */}
                        <div className="flex flex-col gap-1">
                            {/* main heading */}
                            <div className="font-semibold text-lg">{props.jobTitle}</div>
                            {/* subheading */}
                            <div className="text-sm text-mine-shaft-300"> 10k+ Employees </div>
                        </div>
                     </div>
                    {/* apply now part  */}
                    
                    <Link to={`/company-page/${props.company}`}>
                        <Button size="sm" color="brightSun.4" variant="light" >Company Page</Button>
                    </Link>
                    
                
                </div>
                <div className="text-mine-shaft-300 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea libero aliquam, at totam fugiat repellat impedit porro dolore, corrupti ad nam. Porro blanditiis alias expedita ullam cumque magni cupiditate eius, nemo delectus rerum.
                </div>
            </div>



             

        </div>
    )

}
export default JobDesc;