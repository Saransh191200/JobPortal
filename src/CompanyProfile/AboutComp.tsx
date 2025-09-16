
import { companyData } from "../Data/CompanyData";

const AboutComp=()=>{
    const company:{[key:string]:any}=companyData;
    return (
        <div className="flex flex-col gap-5 p-3">
            {
                Object.keys(company).map((keys,index)=>
                    keys!=='Name' &&<div  key={index}>
                        <div className="font-semibold text-xl mb-3">{keys}</div>
                        {keys!=="Website"&& <div className="text-sm text-mine-shaft-300 text-justify">{keys!=="Specialties"?company[keys]:company[keys].map((item:string,index:number)=><span> &bull; {item}</span>)}</div>} 
                        {keys==="Website"&& <a href={`${company[keys]}`} target="_blank" className="text-sm text-bright-sun-400 text-justify">{company[keys]}</a>}

                    </div>
                )
            }

        </div>
    )

}
export default AboutComp;