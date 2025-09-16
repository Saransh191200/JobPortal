import { ActionIcon } from "@mantine/core";
import { IconExternalLink, IconShare } from "@tabler/icons-react";

const CompCard=(props:any)=>{
    return(
        <div>
            <div className="flex justify-between bg-mine-shaft-900 rounded-lg p-2 items-center hover:bg-mine-shaft-950 ">
                
                <div className="flex gap-2 items-center">
                    {/* logo */}
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.name}.png`} alt="" />
                    </div>
                    {/* text */}
                    <div>
                        {/* main heading */}
                        <div className="font-semibold">{props.name}</div>
                        {/* subheading */}
                        <div className="text-xs text-mine-shaft-300">{props.employees} Employees</div>
                    </div>
                </div>
                {/* like part */}
                <div >
                    <ActionIcon   color="brightSun.4" variant="subtle"   aria-label="Settings">
                        <IconExternalLink style={{width :'70%' , height:'70%'}} stroke={1.5}></IconExternalLink>
                     </ActionIcon>
                </div>
            </div>
            </div>
    )

}
export default CompCard;