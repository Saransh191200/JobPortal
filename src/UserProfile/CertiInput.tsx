import { Button,TextInput } from "@mantine/core";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";
import UserSelectInput from "./UserSelectInput";
import fields1 from "../Data/ProfileData";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const CertiInput=(props:any)=>{
    const profile=useSelector((state:any)=>state.profile);
    const dispatch=useDispatch();
     const form=useForm({
            mode:'controlled',
            validateInputOnChange:true,
            initialValues:{
                name:'',
                issuer:'',
                issueDate:new Date(),
                certificateId:''
            },
            validate:{
                name:isNotEmpty("Name is required"),
                issuer:isNotEmpty("Issuer is required"),
                issueDate:isNotEmpty("Issue Date  is required"),
                certificateId:isNotEmpty("Cerificate ID is required"),
            }
        })
    
    const handleSave=()=>{
        form.validate();
        if(!form.isValid()) return;
        let certi=[...profile.certifications];
        certi.push(form.getValues());
        certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
        let updatedProfile={...profile,certifications:certi};
        dispatch(changeProfile(updatedProfile));
        successNotification("Success","Certification Added successfully");
        props.setEdit(false);


    }


    return(
        <div>
            <div className="text-lg font-semibold"> Add Certificate</div>
            <div>
                <div className="flex [&>*]:w-1/2 gap-10">
                    <TextInput {...form.getInputProps('name')}
                        withAsterisk
                        label="Title"
                        
                        placeholder="Enter title"
                    />
                    <UserSelectInput form={form} name="issuer" {...fields1[1]}/>

                </div>
                
                <div className="flex [&>*]:w-1/2 gap-10 mt-1">
                    <MonthPickerInput {...form.getInputProps('issueDate')} withAsterisk maxDate={new Date()} label="Issue date" placeholder="Pick date" />
                    <TextInput
                        {...form.getInputProps('certificateId')}
                        withAsterisk
                        
                        label="Certificate ID"
                        
                        placeholder="Enter Ceritificate ID"
                    />
                </div>
                {/* <Checkbox 
                    className="mt-3" autoContrast checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    label="Currently working here"
                /> */}

                <div className="flex gap-5 mt-5">
                    <Button onClick={handleSave} variant="light" color="green.8">Save</Button>
                    <Button onClick={()=>props.setEdit(false)} variant="light" color="red.8">Cancel</Button>
                </div>

            </div>
        </div>
    )

}
export default CertiInput;