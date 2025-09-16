import { IconCalendar, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { DateInput, TimeInput } from "@mantine/dates";
import { getProfile } from "../Services/ProfileService";
import { getUser } from "../Services/UserService";
import { useSelector } from "react-redux";
import { changeAppStatus } from "../Services/JobService";
import { errorNotification, successNotification } from "../Services/NotificationService";
import { formatInterviewTime, showResume } from "../Services/Utilites";


const TalentCard=(props:any)=>{
    const {id}=useParams();
    const [opened, { open, close }] = useDisclosure(false);
    const [app,{open:openApp ,close:closeApp}]=useDisclosure(false);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime]=useState<any>(null);
    const ref=useRef<HTMLInputElement>(null);
    // const profile=useSelector((state:any)=>state.profile);
    const[profile,setProfile]=useState<any>({})
   
    useEffect(()=>{
        if(props.applicantId){
            getProfile(props.applicantId)
                .then((res)=>{
                    setProfile(res);
                })
                .catch((err)=>{
                    console.log(err); 
                })
        }
        else{
            setProfile(props);
        }
    },[props])
    const handleOffer=(status:string)=>{
        // application class obj
        let interview:any ={id,applicantId:profile?.id,applicationStatus:status}
        if(status==="INTERVIEWING"){
            const [hours,minutes]=time.split(":").map(Number);
            date?.setHours(hours,minutes);
            interview={...interview,interviewTime:date}

        }
        
        changeAppStatus(interview)
            .then((res)=>{
                if(status==="INTERVIEWING"){
                    successNotification("Interview Scheduled","Interview Scheduled Sucessfully");
                }
                else if(status==="OFFERED"){
                    successNotification("Job Offered","Job Offered Successfully")
                }
                else{
                    successNotification("Rejected","Rejected Successfully")
                }

                window.location.reload();
                close();
            })
            .catch((err)=>{
                console.log(err);
                errorNotification("Error",err.response.data.errorMessage);
            })
        
    }
    return(<div className=" bg-mine-shaft-900 p-4 w-96 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-200 ease-in-out hover:[&>.jump]:animate-bounce">
        {/* 1st division */}
            <div className="flex justify-between">
                
                <div className="flex gap-2 items-center"> 
                    {/* logo */}
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar size="lg" src={profile.picture?`data:image/jpeg;base64, ${profile.picture}`:"/avatar2.png"} alt="/avatar-9.png" />
                    </div>
                    {/* text */}
                    <div>
                        {/* main heading */}
                        <div className="font-semibold text-lg ">{props.name}</div>
                        {/* subheading */}
                        <div className="text-sm text-mine-shaft-300">{profile?.jobTitile} &#x2022; {profile?.company} </div>
                    </div>
                </div>
                {/* like part */}
                
                <div >
                    <IconHeart className=" jump text-mine-shaft-300 animate-bounce"/>
                </div>
            </div>
            {/* 2nd division */}
            {/* checkkk */}
            <div className="flex gap-2">
            {
                profile.skills?.map((skill:any,index:any)=> index<4 &&
                    <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
                <div>{skill}</div>
                
                    </div>)
            }
            </div>
            
            {/* 3rd division */}
            <div>
                <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{profile?.about}
                </Text>
            </div>
            <Divider color="brightSun.3" size="xs"  />
            {/* 4th division */}
            {/* invited changes */}
                {
                    props.invited?<div className="flex gap-3 text-sm text-mine-shaft-200 items-center">
                        <IconCalendar className="h-5 w-5"/>
                        Interview : {formatInterviewTime(props.interviewTime)}
                    </div>:<div className="flex items-center justify-between">
                        <div className="font-semibold text-mine-shaft-200">23 LPA</div>
                        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                            <IconMapPin className="h-5 w-5" stroke={1.5}/> 
                            <span>{profile?.location}</span>
                        </div>
                    </div>
                    
                }
            
            <Divider color="brightSun.3" size="xs"  />
            <div className="flex [&>*]:w-1/2 [&>*]:p-2">
                {
                !props.invited &&<>
                    <Link to={`/talent-profile/${profile?.id}`}>
                        <Button  color="brightSun.4" variant="outline" fullWidth>Profile</Button>
                    </Link>
                    <div>
                        {props.posted?<Button onClick={open} rightSection={<IconCalendar className="h-5 w-5"/>} color="brightSun.4" variant="light" fullWidth>Schedule</Button>:<Button color="brightSun.4" variant="light" fullWidth>Message</Button>}
                    </div>
                </>
                }
                {
                    props.invited && <>
                    <div> <Button onClick={()=>handleOffer("OFFERED")} color="brightSun.4" variant="outline" fullWidth>Accept</Button></div>
                    <div> <Button onClick={()=>handleOffer("REJECTED")} color="brightSun.4" variant="light" fullWidth>Reject</Button></div>
                    </>
                }
            </div>
            {
                (props.invited || props.posted) && <Button onClick={openApp} autoContrast  color="brightSun.4" variant="filled" fullWidth>View Application</Button>
            }
            <Modal opened={opened} onClose={close}  centered title="Schedule Interview">
                {/* Modal content */}
                <div className="flex flex-col gap-5">
                    <DateInput
                        minDate={new Date()} value={date} onChange={setDate} label="Date" placeholder="Enter Date"
                    />
                    <TimeInput label="Time" value={time} onChange={(event:any)=>setTime(event.currentTarget.value)} ref={ref} onClick={() => ref.current?.showPicker()} />
                    <Button onClick={()=>handleOffer("INTERVIEWING")} color="brightSun.4" variant="light" fullWidth>Schedule</Button>
                </div>
            </Modal>
            <Modal opened={app} onClose={closeApp}  centered title="Application">
                {/* Modal content */}
                <div className="flex flex-col gap-5">
                    <div>
                        Email : &emsp; <a className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={`mailto:${props.email}`}>{props.email}</a>
                    </div>
                    <div>
                        Website : &emsp; <a target="_blank" className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={`mailto:${props.email}`}>{props.website}</a>
                    </div>
                    <div>
                        Resume : &emsp; <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={()=>showResume(props.resume)}>{props.name}</span>
                    </div>
                    <div>
                        Cover Letter : &emsp; <span >{props.coverLetter}</span>
                    </div>
                </div>
            </Modal>
            
        </div>
    )
}
export default TalentCard;