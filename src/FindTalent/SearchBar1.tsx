import { Divider, Input, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import { useState } from "react";
import MultipleInput from "../FindJobs/MultipleInput";
import { searchField } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar1=()=>{
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return(
        <div className="flex px-5 py-8  items-center"> 
            <div className="flex items-center ">
                <div className="mr-10 flex items-center">
                    <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><IconUserCircle size=  {25}/></div>
                    <Input className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name" />
                </div>
                <Divider mr="xs" size="xs" orientation="vertical"/>
                
            </div>
            {
                searchField.map((content,index)=><>
                    <div key={index} className="w-1/5 "><MultipleInput {...content}/></div>
                    <Divider mr="xs" size="xs" orientation="vertical"/>
                </>
                )
                
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between ">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <RangeSlider className="pt-2" size="xs" color="brightSun.4" value={value} onChange={setValue} 
                    labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                }} />
                
            </div>
        </div>
    )

}
export default SearchBar1;