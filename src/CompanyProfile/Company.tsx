import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import JobsComp from "./JobsComp";
import EmpComp from "./EmpComp";

const Company=()=>{
    
    return(
        <div className="w-3/4">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="w-36 h-36 rounded-3xl -bottom-1/4 absolute left-5 p-2 border-mine-shaft-950 border-8 bg-mine-shaft-950" src="/Icons/Google.png" alt="" />
                
            </div>
            <div className="px-3 py-1 mt-12 flex flex-col gap-1">
                    <div className=" ml-7 text-3xl flex justify-between font-semibold">
                        Google
                        <Avatar.Group>
                            <Avatar src="avatar-9.png" />
                            <Avatar src="avatar1.png" />
                            <Avatar src="avatar2.png" />
                            <Avatar>+11k</Avatar>
                        </Avatar.Group>
                    </div>
                    
                    <div className="flex gap-2 ml-3 text-lg text-mine-shaft-400 items-center">
                        <IconMapPin className="h-5 w-5" stroke={1.5}/> 
                        <span>Banglore, India</span>
                    </div>
            </div>
            <Divider   my="xl" /> 
            <div>
                <Tabs keepMounted={true} color="yellow" variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List className="[&_button]:text-lg mb-5 [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
                    <Tabs.Panel value="jobs"><JobsComp/></Tabs.Panel>
                    <Tabs.Panel value="employees"><EmpComp/></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )

}
export default Company;