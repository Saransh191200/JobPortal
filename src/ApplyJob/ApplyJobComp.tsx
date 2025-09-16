import {  Divider, rem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { Notification} from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../Services/Utilites";
import ApplicationForm from "./ApplicationForm";

const ApplyJobComp=(props:any)=>{
    const[preview,setPreview]=useState(false);
    const[submit,setSubmit]=useState(false);
    const[sec,setSec]=useState(5);
    const navigate=useNavigate();

    const handlePreview=()=>{
        setPreview(!preview);
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const handleSubmit=()=>{
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x==0)navigate('/find-jobs');
            
        },1000)
    }
    return(
        <>

        <div className="w-2/3 mx-auto">

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
            <Divider   my="xl" />
            {/* <div className="text-xl font-semibold mb-5">Submit Your Application</div>
            <div className="flex flex-col gap-5">

                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview ?"text-mine-shaft-300 font-bold":""}`} label="Full Name" withAsterisk placeholder="Enter name"/>
                    <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview ?"text-mine-shaft-300 font-semibold":""}`} label="Email" withAsterisk  placeholder="Enter email"/>
                </div>

                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview ?"text-mine-shaft-300 font-semibold":""}`} label="PhoneNumber"  hideControls min={0} max={100000000} withAsterisk placeholder="Enter Phone number"/>
                    <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview ?"text-mine-shaft-300 font-semibold":""}`} label="Personal Website" withAsterisk  placeholder="Enter url"/>
                </div>

                <div>
                    <FileInput
                        readOnly={preview}
                        variant={preview?"unstyled":"default"} className={`${preview ?"text-mine-shaft-300 font-semibold":""}`}
                        withAsterisk
                        label="Attach your Resume"
                        leftSection={<IconPaperclip stroke={1.5}/>}
                        placeholder="Your Resume"
                    />
                </div>
                <div>
                    <Textarea
                        readOnly={preview}
                        variant={preview?"unstyled":"default"} className={`${preview ?"text-mine-shaft-300 font-semibold":""}`}
                        placeholder="Write about Yourself"
                        label="Cover Letter"
                        withAsterisk
                        autosize
                        minRows={4}
                    />
                </div>
                <div className="">
                    { 
                     !preview && <Button onClick={handlePreview} color="brightSun.4" variant="light" >Preview</Button>
                    }
                    {
                        preview && <div className="flex gap-10 [&>*]:w-1/2">
                            <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline" >Edit</Button>
                            <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light" >Submit</Button>
                        </div>
                    }
                    
                    
                </div>

                
            </div> */}
            <ApplicationForm/>
            
        </div>
       
        
        </>
        
    )

}
export default ApplyJobComp;