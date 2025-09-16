import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../Services/Utilites";

const PostedJobCard=(props:any)=>{
    const {id}=useParams();
    return(
        <Link to={`/posted-job/${props.id}`}  className={`bg-mine-shaft-900 rounded-xl p-2 border-b-2   hover:bg-mine-shaft-950 w-full ${props.id==id ?" bg-bright-sun-400 text-bright-sun-400 border-b-bright-sun-400 ":" bg-mine-shaft-900 text-mine-shaft-300"}`}>
            <div className="font-semibold text-sm">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300 font-medium">{props.company}</div>
            <div className="text-xs text-mine-shaft-300">{timeAgo(props.postTime)}</div>
        </Link>
    )

}
export default PostedJobCard;