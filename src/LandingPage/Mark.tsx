import { Divider } from "@mantine/core";
import { useLocation } from "react-router-dom";

const Mark=()=>{
    const location=useLocation();
    return(location.pathname!=="/signup"  && location.pathname!=="/login"?
        <div className="p-5 bg-mine-shaft-950 font-['poppins'] ">
            <Divider size="xs" />
            <div className="text-center mt-2 pt-2 mb-3 [&>a]:text-bright-sun-400 text-lg font-semibold text-mine-shaft-300 ">
            Designed & Developed By  
            <a className="hover:un" target="_blank" href="https://www.linkedin.com/feed"> Smarth Phutela.</a>
            </div>
            
        </div>:<></>
    )

}
export default Mark;