import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const EmpComp=()=>{
    return(
        <div className="flex flex-wrap gap-5 justify-evenly">
            {
                talents.map((item,index)=>
                    <TalentCard key={index} {...item}/>
                )
            }
        </div>
    )
}
export default EmpComp;