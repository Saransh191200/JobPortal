import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../Services/ProfileService";

const Profile=(props:any)=>{
    const {id}=useParams();
    const[profile,setProfile]=useState<any>({});
    useEffect(()=>{
        window.scrollTo(0,0);
        getProfile(id)
            .then((res)=>{
                setProfile(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[id])
    return(
        <div className="w-2/3">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src={profile.picture?`data:image/jpeg;base64, ${profile.picture}`:"/avatar1.png"} alt="" />
                
            </div>
            <div className="px-3 py-1 mt-16 flex flex-col gap-1">
                    <div className=" text-3xl flex justify-between font-semibold">
                        {profile?.name}
                        <Button color="brightSun.4" variant="light" >Message</Button>
                    </div>
                    <div className="text-xl flex items-center gap-2"> 
                        <IconBriefcase className="h-5 w-5" stroke={1.5}/>
                        {profile?.jobTitile} &bull; {profile?.company}
                    </div>
                    <div className="flex gap-2 text-xs text-mine-shaft-400 items-center">
                        <IconMapPin className="h-5 w-5" stroke={1.5}/> 
                        <span>{profile?.location}</span>
                    </div>
            </div>
            <Divider   my="xl" /> 
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 ">About</div>
                <div className="text-sm text-mine-shaft-300 text-justify">{profile?.about}
                </div>
            </div>
            <Divider   my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 ">Skills</div>
                <div className=" flex flex-wrap gap-2">
                    {
                        profile?.skills?.map((item:any,index:any)=>
                            <div key={index} className="bg-bright-sun-300 rounded-3xl text-bright-sun-400 px-3 py-1 bg-opacity-15 text-sm font font-medium hover:animate-bounce transition duration-100 ease-in-out">{item}</div>
                        )
                    }
                    
                </div>
            </div>
            <Divider   my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 ">Experience</div>
                <div className="flex flex-col gap-7">
                    {
                        profile?.experiences?.map((exp:any,index:any)=><ExpCard key={index} {...exp}/>)
                    }
                </div>
                
            </div>
            <Divider   my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 ">Certifications</div>
                <div className="flex flex-col gap-7">
                    {
                        profile?.certifications?.map((certi:any,index:any)=><CertCard key={index} {...certi}/>)
                    }
                </div>
                
            </div>

        </div>
    )
}
export default Profile;