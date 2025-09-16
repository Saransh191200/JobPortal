import { IconBookmark ,IconBookmarkFilled,IconCalendar,IconClockHour3} from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { timeAgo } from "../Services/Utilites";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

const CardHist=(props:any)=>{
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const user=useSelector((state:any)=>state.user);
    
    const handleSaveJob=()=>{
        let savedJobs=[...profile.savedJobs];
        if(profile.savedJobs?.includes(props.id)){
            savedJobs=savedJobs.filter((id:any)=>id!==props.id);
        }
        else{
            savedJobs=[...savedJobs,props.id];
        }
        let updatedProfile={...profile,savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));

    }
    return(
    <div className=" bg-mine-shaft-900 p-4 w-72 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-200 ease-in-out ">
        {/* 1st division */}
            <div className="flex justify-between">
                
                <div className="flex gap-2 items-center">
                    {/* logo */}
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    {/* text */}
                    <div>
                        {/* main heading */}
                        <div className="font-semibold">{props.jobTitle}</div>
                        {/* subheading */}
                        <div className="text-xs text-mine-shaft-300"> {props.company} &#x2022; {props.applicants?props.applicants.length:0} Applicants </div>
                    </div>
                </div>
                {/* like part */}
                {profile.savedJobs?.includes(props.id)?
                    <IconBookmarkFilled onClick={handleSaveJob} className=" text-bright-sun-400  "/>
                    :
                    <IconBookmark onClick={handleSaveJob} className=" hover:text-bright-sun-400 text-mine-shaft-300 "/>
                    } 
                
            </div>
            {/* 2nd division */}
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            {/* 3rd division */}
            <div>
                <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.about}
                </Text>
            </div>
            <Divider color="brightSun.3" size="xs"  />
            {/* 4th division */}
            <div className="flex items-center justify-between">
                <div className="font-semibold text-mine-shaft-200"> &#8377; {props.packageOffered} LPA</div>
                <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                    <IconClockHour3 className="h-5 w-5" stroke={1.5}/>{props.applied?"Applied":props.offered?"Interviewed":"Posted"} {timeAgo(props.postTime)}
                </div>
            </div>
            {
                props.offered&&<div>
                    <Divider className="mb-1" color="brightSun.3" size="xs"  />
                    <div className="flex [&>*]:w-1/2 [&>*]:p-2">
                        <div> <Button  color="brightSun.4" variant="outline" fullWidth>Accept</Button></div>
                        <div> <Button  color="brightSun.4" variant="light" fullWidth>Delete</Button></div>
                    </div>
                </div>
            }
            {
                props.interviewing && <div>
                    <Divider className="mb-1" color="brightSun.3" size="xs"  />
                    <div className="flex gap-2">
                        <IconCalendar className=" text-bright-sun-400 h-5 w-5"/>
                        Sun, 1 January, &bull; <span className="text-mine-shaft-400">10:00 AM</span>
                    </div>
                </div>
            }
            <Link to={`/jobs/${props.id}`}>
                <Button fullWidth  color="brightSun.4" variant="outline" >View Job</Button>
            </Link>
    </div>
    )

}
export default CardHist ;