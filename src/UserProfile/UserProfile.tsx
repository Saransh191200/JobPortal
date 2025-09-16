import { Avatar, Divider, FileInput, Overlay,} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile } from "../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { successNotification } from "../Services/NotificationService";
import { useEffect } from "react";

const UserProfile=(props:any)=>{
    const dispatch=useDispatch();
    const user=useSelector((state:any)=>state.user);
    const profile=useSelector((state:any)=>state.profile);
    const { hovered, ref } = useHover();
    // const[edit,setEdit]=useState([false,false,false,false,false])
    
    // const [about, setAbout] = useState("As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.");
    const handleFileChange=async(image:any)=>{
        let picture:any=await getBase64(image);
        console.log(picture);
        let updatedProfile={...profile,picture:picture.split(',')[1]};
        dispatch(changeProfile(updatedProfile));
        successNotification("Sucess","Profile Picture updated suceessfully");

    }
    const getBase64=(file:any)=>{
        return new Promise((resolve,reject)=>{
            const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>resolve(reader.result);
            reader.onerror=error=>reject(error);
        })
    }
    // useEffect(()=>{
    //     window.location.reload(1);
    // },[])
    // useEffect(()=>{
    //     console.log(profile);
    //     getProfile(user.profileId)
    //     .then((data:any)=>dispatch(setProfile(data)))
    //     .catch((err:any)=>{console.log(err)})
        
    // },[])
    return(
        <div className="w-4/5 mx-auto">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <div ref={ref as React.LegacyRef<HTMLDivElement>} className="flex items-center justify-center -bottom-1/3 absolute left-3">
                    <Avatar className="!w-48 !h-48 rounded-full -bottom-1/3  border-mine-shaft-950 border-8" src={profile.picture?`data:image/jpeg;base64, ${profile.picture}`:"/avatar1.png"} alt="" />
                    {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75}/>}
                    {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16"/>}
                    {hovered && <FileInput onChange={handleFileChange} className="absolute w-full z-[301] [&_*]:!rounded-full [&_*]:!h-full !h-full" variant="transparent" size="lg" radius="xl" accept="image/png,image/jpeg"/>}
                </div>
            </div>
            <div className="px-3 py-1 mt-20 flex flex-col gap-1">
                <Info />
            </div>
            <Divider   my="xl" /> 
            <div className="px-3">
                <About/>
            </div>
            <Divider   my="xl" />

            <div className="px-3">
                <Skills/>
            </div>
            <Divider   my="xl" />
            <div className="px-3">
                <Experience/>
            </div>
            <Divider   my="xl" />
            <div className="px-3">
                <Certificate/>
                
            </div>

        </div>
    )
}
export default UserProfile;