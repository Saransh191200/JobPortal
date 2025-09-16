import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../Data/PostJobData";
import SelectInput from "./SelectInput";
import TextEditor from "./RichTextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../Services/JobService";
import { errorNotification, successNotification } from "../Services/NotificationService";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const PostJob=()=>{
    const user=useSelector((state:any)=>state.user);
    const navigate=useNavigate();
    const select=fields;
    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            jobTitle:'',
            company:'',
            experience:'',
            jobType:'',
            location:'',
            packageOffered:'',
            skillsRequired:[],
            about:'',
            description:content
        },
        validate:{
            jobTitle:isNotEmpty('Title is Required'),
            company:isNotEmpty('Company is Required'),
            experience:isNotEmpty('Experience  is Required'),
            jobType:isNotEmpty('Job Type is Required'),
            location:isNotEmpty('Location is Required'),
            packageOffered:isNotEmpty('Package Offered is Required'),
            skillsRequired:isNotEmpty('Skills are Required'),
            about:isNotEmpty('About is Required'),
            description:isNotEmpty('Description is Required'),

        }
        
    })
    const handlePost=()=>{
        form.validate();
        if(!form.isValid()) return;
        postJob({...form.getValues(),postedBy:user.id,jobStatus:"ACTIVE"})
        .then((res)=>{
            successNotification("Sucess","Job Posted Successfully");
            navigate(`/posted-job/${res.id}`);
            window.scrollTo({top:0,behavior:'smooth'})
        })
        .catch((err)=>{
            console.log(err);
            errorNotification("Failed",err.response.data.errorMessage);
        })
    }
    const handleDraft=()=>{
    
        postJob({...form.getValues(),postedBy:user.id,jobStatus:"DRAFT"})
        .then((res)=>{
            successNotification("Sucess","Job Drafted Successfully");
            navigate(`/posted-job/${res.id}`);
            window.scrollTo({top:0,behavior:'smooth'})
        })
        .catch((err)=>{
            console.log(err);
            errorNotification("Failed",err.response.data.errorMessage);
        })
    }
    return(
        <div className="p-5 w-4/5 mx-auto">
            <div className="text-2xl font-semibold mb-5 ">Post a Job</div>
            <div className="flex flex-col gap-10">
               <div className="flex [&>*]:w-1/2 gap-10">
                    <SelectInput form={form} name="jobTitle" {...fields[0]}/>
                    <SelectInput form={form} name="company" {...fields[1]}/>
               </div>
               <div className="flex [&>*]:w-1/2 gap-10">
                    <SelectInput form={form} name="experience" {...fields[2]}/>
                    <SelectInput form={form} name="jobType" {...fields[3]}/>
               </div>
               <div className=" flex [&>*]:w-1/2 gap-10"> 
                    <SelectInput form={form} name="location" {...fields[4]}/>
                    <NumberInput {...form.getInputProps('packageOffered')} withAsterisk clampBehavior="strict" label="Salary (LPA)" min={1} max={300} placeholder="Enter Salary" hideControls />
               </div>
               <TagsInput {...form.getInputProps('skillsRequired')} color="brightSun.4" label="Search for a skill" placeholder="Enter Skill" withAsterisk clearable acceptValueOnBlur splitChars={[',', ' ', '|']} />
               <Textarea {...form.getInputProps('about')} withAsterisk label="About Job" className="mt-1"    placeholder="Enter About"
                autosize
                minRows={3}
                />
               <div>
                <div className="text-sm font-medium">Job Description <span className="text-red-500">*</span> </div>
                <TextEditor form={form}/>
               </div>
               <div className="flex gap-5">
               <Button onClick={()=>handlePost()}  color="brightSun.4" variant="light" > Publish Job</Button>
               <Button onClick={handleDraft} color="brightSun.4" variant="outline" > Save as Draft</Button>
               </div>
            </div>
        </div>
    )
}
export default PostJob;