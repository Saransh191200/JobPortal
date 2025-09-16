import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents=()=>{
    return(
        <div className="p-5 ">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold mb-5 mx-9">Talents</div>
                <Sort/>
            </div>
            <div className="mt-5 flex gap-7 justify-evenly flex-wrap ">
                {
                   talents.map((content,index)=>
                        <TalentCard key={index} {...content} />
                    )
                }
            </div> 
            
            
        </div>
    )

}
export default Talents;