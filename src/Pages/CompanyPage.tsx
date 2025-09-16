import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <div className="">
                <Link className="my-4 inline-block" to="/jobs">
                    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light" > Back</Button>
                </Link>
            </div> 
        <div className="flex gap-5">
            <Company/>
            <SimilarCompanies/>
        </div>
            
            
            
            
        </div>
    )

}
export default CompanyPage;