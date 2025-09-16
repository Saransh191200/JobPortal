import { similar } from "../Data/CompanyData";
import CompCard from "./CompCard";


const SimilarCompanies=()=>{
    return(
        <div className="w-1/4">
            <div className="font-semibold text-xl mb-5">Similar Companies</div>
            <div className="flex flex-col gap-5 ">
                {
                    similar.map((item,index)=><CompCard key={index} {...item}/>)
                }
            </div>
           
        </div>
    )
}
export default SimilarCompanies;