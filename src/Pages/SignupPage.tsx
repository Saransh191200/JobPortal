import { IconAnchor, IconArrowLeft } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const SignupPage=()=>{
    const location=useLocation();
    const navigate=useNavigate();
    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins] overflow-hidden relative">
            
            <Button my="lg" className="left-5 !absolute z-10" leftSection={<IconArrowLeft size={20}/>} onClick={()=>navigate("/")} color="brightSun.4" variant="light" >Home</Button>
               
            <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname==='/signup'?"-translate-x-1/2":"translate-x-0"}`} >
                <Login/>
                <div className={`w-1/2 h-[100vh] transition-all duration-1000 ease-in-out ${location.pathname==="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex flex-col gap-5 items-center justify-center`}>
                    <div className="flex gap-2 items-center text-bright-sun-400">
                        <IconAnchor className=" animate-spin h-16 w-16" stroke={2.25}/>
                        <div className="text-6xl font-semibold">JobHooK</div>
                    </div>
                    <div className="font-semibold text-2xl text-mine-shaft-200">Find the Job made for You</div>
                </div>
                <SignUp/>
            </div>
            
        </div>
    )

}
export default SignupPage;