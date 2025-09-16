import {  Button, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import { useEffect } from "react";
import { setProfile } from "../Slices/ProfileSlice";

const Header=() =>{
    const dispatch=useDispatch();
    const user=useSelector((state:any)=>state.user)
    useEffect(()=>{
        if(!user){
            return;
        }
        else{
            getProfile(user.profileId)
            .then((data:any)=>dispatch(setProfile(data)))
            .catch((err:any)=>{console.log(err)})

        }
        
    },[])
    const location=useLocation();
    return( location.pathname!=="/signup"  && location.pathname!=="/login" ?
        <div className="text-white text-center  bg-mine-shaft-900 w-full h-20 flex justify-between px-6 items-center">
            <div className="flex gap-2 items-center text-bright-sun-400">
                <IconAnchor className=" animate-spin h-8 w-10" stroke={2.25}/>
                <div className="text-3xl font-semibold">JobHooK</div>
            </div>

            {NavLinks()}

            
            <div className="flex items-center gap-3 ">
                
                
                {user?<ProfileMenu/>:
                <Link to="/login">
                    <Button variant="subtle" color="brightSun.4">Login</Button>
                </Link>}
                {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5}/>
                </div> */}
                
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="brightSun.4" offset={6} size={7} processing>
                    <IconBell stroke={1.5}/>
                </Indicator>
                </div>
            
            </div>
        </div>:<></>
    )
}
export default Header;