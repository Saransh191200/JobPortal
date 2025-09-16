import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob=()=>{
    return(
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400 ">Find your <span >Dream</span> <span>Job</span> with us</div>
                <div className="text-mine-shaft-200 text-lg"> Good Life Begins with a Good Company. Start explore thosands of job in one place</div>
                <div className="flex gap-3">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100" variant="unstyled" label="Job Title" placeholder="Software Engineer"/>
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="full time"/>
                    <div className="flex justify-center items-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%] p-2 "/>
                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/Boy.png" alt="" />
                    {/* right card */}
                    <div className=" animate-pulse absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-lg">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">50K+ got Job</div>
                        <Avatar.Group>
                          <Avatar src="avatar1.png" />
                          <Avatar src="avatar2.png" />
                          <Avatar src="avatar-9.png" />
                          <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    {/* left card */}
                    <div className=" animate-pulse absolute -left-5 w-fit top-[28%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-lg gap-3 flex flex-col"> 
                        <div className="flex gap-2 items-center ">
                            <div className="w-10 h-10  p-1 bg-mine-shaft-900 rounded-lg">
                                <img src="/Google.png" alt="" />
                            </div>
                            <div className="text-mine-shaft-100 text-sm">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">Banglore</div>
                            </div>
                        </div>
                        <div className="flex gap-5 text-mine-shaft-200 text-xs justify-around">
                            <span> 1 day ago</span>
                            <span>100+Applicants</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default DreamJob;