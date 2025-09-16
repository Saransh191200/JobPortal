import { formatDate } from "../Services/Utilites";

const CertCard=(props:any)=>{
    return(
        <div className="flex  items-center justify-between">
                
        <div className="flex gap-2 items-center">
            {/* logo */}
            <div className="p-2 bg-mine-shaft-800 rounded-md">
                <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
            </div>
            {/* text */}
            <div>
                {/* main heading */}
                <div className="font-semibold">{props.name}</div>
                {/* subheading */}
                <div className="text-sm text-mine-shaft-300"> {props.issuer} </div>
            </div>
        </div>
        {/* like part */}
        <div className="flex flex-col items-end" >
            <div className="text-sm text-mine-shaft-300">{formatDate(props.issueDate)}</div>
            <div className="text-sm text-mine-shaft-300">{props.certificateId}</div>
        </div>
        
    </div>
    )

}
export default CertCard;