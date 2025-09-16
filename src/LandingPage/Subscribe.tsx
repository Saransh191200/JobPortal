import { Button, TextInput } from "@mantine/core";

const Subscribe=()=>{
    return(
        <div className="mt-20 pb-5  flex items-center mx-20 py-3 rounded-xl bg-mine-shaft-900 justify-around">
            <div className="text-center w-2/5  [&>span]:text-bright-sun-400 text-4xl font-semibold text-mine-shaft-100">
                Never Wants to Miss Any<span>Job News?</span> 
            </div>
            <div className="flex gap-4 bg-mine-shaft-700 px-3 py-2 items-center rounded-xl">
                <TextInput className="[&_input]:text-mine-shaft-100 font-semibold"
                    variant="unstyled"
                    placeholder="Your@email.com"
                    size="xl"
                />
                <Button className="!rounded-lg" size="lg" variant="filled" color="yellow">Subscribe</Button>
            </div>
        </div>
    )

}
export default Subscribe;