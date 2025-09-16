import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultipleInput from "./MultipleInput";
import { useState } from "react";

const SearchBar=()=>{
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return(
        <div className="flex px-5 py-8 "> 
            {
                
                dropdownData.map((item,index)=><>
                    <div key={index} className="w-1/5 "><MultipleInput {...item}/></div>
                    <Divider mr="xs" size="xs" orientation="vertical"/>
                </>
                )
                
            }
            <div className="w-1/5  text-sm mb-1 [&_.mantine-Slider-label]:!translate-y-10">
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
export default SearchBar;