import { Divider } from "@mantine/core";
import SearchBar1 from "../FindTalent/SearchBar1";
import Talents from "../FindTalent/Talents";

const FindTalentPage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Divider  size="xs" mx="md" />
            <SearchBar1/>
            <Divider  size="xs" mx="md" />
            <Talents/>
            
            
            
            
            
        </div>
    )

}
export default FindTalentPage;