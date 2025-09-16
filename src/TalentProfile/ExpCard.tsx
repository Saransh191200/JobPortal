import { formatDate } from "../Services/Utilites";


const ExpCard=(props:any)=>{

    return(
        <div className="flex flex-col gap-3">
            <div className="flex  items-center justify-between">
                
                <div className="flex gap-2 items-center">
                    {/* logo */}
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    {/* text */}
                    <div>
                        {/* main heading */}
                        <div className="font-semibold">{props.title}</div>
                        {/* subheading */}
                        <div className="text- text-mine-shaft-300"> {props.company} &bull; {props.location}</div>
                    </div>
                </div>
                {/* like part */}
                <div className="text-sm text-mine-shaft-300" >
                    <span>{formatDate(props.startDate)} - {formatDate(props.endDate)}</span>
                </div>
                
            </div>
            <div className="text-sm text-mine-shaft-300 text-justify">{props.description}</div>
        </div>
    )
}
export default ExpCard;