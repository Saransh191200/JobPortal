import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials=()=>{
    return (
        <div className="mt-20 pb-5">
            <div className="text-center mb-3 [&>span]:text-bright-sun-400 text-4xl font-semibold text-mine-shaft-100 ">
                What  <span>User</span> says about us ?
            </div>
            <div className="flex justify-evenly">
            {
                testimonials.map((item,index)=>
                    
                <div key={index} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3  mt-10 rounded-lg hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-200 ease-in-out">
                    <div className="flex gap-2 items-center">
                            <Avatar className="!h-14 !w-14" src={item.avt} alt="it's me" />
                            <div>
                                <div className="text-lg text-mine-shaft-100 font-semibold">{item.name}</div>
                                <Rating value={item.rating} fractions={2} readOnly />
                            </div>
                        </div>
                    <div className="text-xs text-mine-shaft-200">
                        {item.testimonial}
                    </div>
                </div>)
            }
            </div>
            
        </div>

    )

}
export default Testimonials;