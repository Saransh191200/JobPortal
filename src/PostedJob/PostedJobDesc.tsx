import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc=(props:any)=>{
    return(
        <div className="mt-5 w-3/4 px-5">
            {props.jobTitle?<>
            <div className="font-semibold text-2xl flex items-center px-4 gap-2">
                {props.jobTitle}  
                <Badge variant="light" color="brightSun.4">{props.jobStatus}</Badge>
            </div>
            <div className="mb-5 font-medium px-4">{props.location}</div>
            
            <div>
                <Tabs autoContrast keepMounted={true} color="brightSun.4" variant="outline" radius="md" defaultValue="overview">
                    <Tabs.List className=" mb-5 [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400 ">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="overview" className="[&>div]:w-full">  <JobDesc {...props} edit closed={props.jobStatus=="CLOSED"}/></Tabs.Panel>
                    <Tabs.Panel value="applicants">
                    <div className="flex flex-wrap gap-5 justify-around ">
                        {

                            

                            props.applicants?.filter((x:any)=>x.applicationStatus==="APPLIED").map((item:any,index:any)=>
                                
                                <TalentCard key={index} {...item} posted/>
                            )
                        }
                    </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="flex flex-wrap justify-around gap-5">
                        {
                            props.applicants?.filter((x:any)=>x.applicationStatus==="INTERVIEWING").map((item:any,index:any)=>
                                
                                <TalentCard key={index} {...item} invited/>
                            )
                        }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered">
                        <div className="flex flex-wrap justify-around gap-5">
                        {
                            props.applicants?.filter((x:any)=>x.applicationStatus==="OFFERED").map((item:any,index:any)=>
                                
                                <TalentCard key={index} {...item} offered/>
                            )
                        }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="rejected">
                        <div className="flex flex-wrap justify-around gap-5">
                        {
                            props.applicants?.filter((x:any)=>x.applicationStatus==="REJECTED").map((item:any,index:any)=>
                                
                                <TalentCard key={index} {...item} rejected/>
                            )
                        }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
            </>: <div className="text-3xl font-bold animate-pulse flex justify-center min-h-[70vh] items-center">No Job Selected</div> }
            
        </div>
    )
}
export default PostedJobDesc;