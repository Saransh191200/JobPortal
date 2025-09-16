import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { footerlinks } from "../Data/Data";
import { useLocation } from "react-router-dom";



const Footer=()=>{
    const location=useLocation();
    return(
        location.pathname!=="/signup" && location.pathname!=="/login"?
        <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
            {/* left side div */}
            <div className="w-1/4 flex flex-col gap-4 ml-3">
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-6 w-6" stroke={2.25}/>
                    <div className="text-xl font-semibold">JobHooK</div>
                </div>
                <div className="text-sm text-mine-shaft-300"> Job portal with user profiles, skill updates, certifictaion, work experience and admin job posting </div>
                <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:rounded-full [&>div]:p-2 hover:[&>div]:cursor-pointer  hover:[&>div]:bg-mine-shaft-700">
                    <div><IconBrandFacebook ></IconBrandFacebook></div>
                    <div><IconBrandInstagram></IconBrandInstagram></div>
                    <div><IconBrandX></IconBrandX></div>
                </div>
            </div>
            {/* outer loop */}
            {
                footerlinks.map((content,index)=>
                <div key={index}>
                    <div className="text-lg font-semibold mb-4 text-bright-sun-400">{content.title}</div>
                    {/* inner loop  */}
                    {
                        content.link.map((item,index)=> 
                        <div  key={index} className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">
                            {item}
                        </div>)
                    }

                </div>
                )
            }
            
        </div>:<></>
    )
}
export default Footer;