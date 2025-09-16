import { useParams } from "react-router-dom";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import { Key } from 'react';

const RecommendedTalent=(props:any)=>{
    const {id}=useParams();
    return(
        <div>
            <div className="text-xl font-semibold mb-5">Recommended Talent</div>
            <div className="flex flex-col flex-wrap gap-5">
                {
                    props?.talents.map((member:any,index:any)=> index<6 && id!=member.id && <TalentCard key={index} {...member}/>)
                }
            </div>
        </div>

    )
    

}
export default RecommendedTalent;