import { Button, Checkbox, Textarea } from "@mantine/core";
import fields1 from "../Data/ProfileData";
import UserSelectInput from "./UserSelectInput";
import { useEffect, useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const ExpInput=(props:any)=>{
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            title:'',
            company:'',
            location:'',
            description:'',
            startDate:new Date(),
            endDate:new Date(),
            working:false
        },
        validate:{
            title:isNotEmpty("Title is required"),
            company:isNotEmpty("Company is required"),
            location:isNotEmpty("Location is required"),
            description:isNotEmpty("Description is required"),
        }
    })
    useEffect(()=>{
        if(!props.add){
            form.setValues({title:props.title,company:props.company,location:props.location,description:props.description,startDate:new Date(props.startDate),endDate:new Date(props.endDate),working:props.working})
        }
    },[])
    const handleSave=()=>{
        form.validate();
        if(!form.isValid()) return;
        let exp=[...profile.experiences];
        if(props.add){
            exp.push(form.getValues());
            exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
            exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();
        }
        else {
            exp[props.index]=form.getValues();
            exp[props.index].startDate=exp[props.index].startDate.toISOString();
            exp[props.index].endDate=exp[props.index].endDate.toISOString();
        }
        let updatedProfile={...profile,experiences:exp};
        dispatch(changeProfile(updatedProfile));
        successNotification("Success",`Experience ${props.add?"Added":"Updated"} Successfully`);
        props.setEdit(false);

    }
    

    return(
        <div>
            <div className="text-lg">{props.add?"Add":"Edit"} Experience</div>
            <div>
                <div className="flex [&>*]:w-1/2 gap-10">
                    <UserSelectInput form={form} name="title" {...fields1[0]}/>
                    <UserSelectInput form={form} name="company" {...fields1[1]}/>
                </div>
                <div className="w-1/2">
                    <UserSelectInput form={form} name="location" {...fields1[2]}/>
                </div>
                <Textarea {...form.getInputProps('description')} withAsterisk
                label="Summary"
                className="mt-1"
                    placeholder="Enter Summary..."
                    autosize
                    minRows={3}
                />
                <div className="flex [&>*]:w-1/2 gap-10 mt-1">
                    <MonthPickerInput {...form.getInputProps("startDate")} withAsterisk maxDate={form.getValues().endDate} label="Start date" placeholder="Pick date" />
                    <MonthPickerInput {...form.getInputProps("endDate")} disabled={form.getValues().working} withAsterisk minDate={form.getValues().startDate||undefined} maxDate={new Date()} label="End date" placeholder="Pick date"/>
                </div>
                <Checkbox 
                    checked={form.getValues().working}
                    onChange={(event:any)=>form.setFieldValue("working",event.target.checked)}
                    className="mt-3" autoContrast 
                    label="Currently working here"
                />

                <div className="flex gap-5 mt-5">
                    <Button onClick={handleSave} variant="light" color="green.8">Save</Button>
                    <Button onClick={()=>props.setEdit(false)} variant="light" color="red.8">Cancel</Button>
                </div>

            </div>
        </div>
    )

}
export default ExpInput;