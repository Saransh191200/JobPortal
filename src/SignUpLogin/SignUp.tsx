import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { registerUser } from "../Services/UserService";
import { SignUpValidation } from "../Services/SignUpValidation";
import { notifications } from "@mantine/notifications";
const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT"
}

const SignUp=()=>{
    const navigate=useNavigate();
    const [data,setData]=useState<{[key:string]:string}>(form);
    const [formError,setFormError]=useState<{[key:string]:string}>(form);
    const [loading,setLoading]=useState(false);
    const [checked,setchecked]=useState(false);

    const handleCheck=(event:any)=>{
        setchecked(event.target.checked)
    }

    const handleChange=(event:any)=>{
        if(typeof(event)=="string"){
            setData({...data,accountType:event});
            return;
        }
        let name=event.target.name;
        let value=event.target.value;
        setData({...data,[name]:value})
        setFormError({...formError,[name]:SignUpValidation(name,value)})
        if(name==="password"&& data.confirmPassword!==""){
            let err=""
            if(data.confirmPassword!==value)   err="Password donot match.";
            setFormError({...formError,[name]:SignUpValidation(name,value),confirmPassword:err})
            
        }
        if(name==="confirmPassword"){
            if(data.password!==value){
                setFormError({...formError,[name]:"Password do not match"});
            }
        }    
    }

    const handleSubmit=()=>{
        let valid=true;
        let newFormError:{[key:string]:string}={}
        for(let key in data){
            if(key==="accountType") continue;
            if(key!=="confirmPassword") newFormError[key]=SignUpValidation(key,data[key]);
            else if(data[key]!==data.password) newFormError[key]="Password do not match";
            if(newFormError[key]) valid=false;

        }
        if(!checked){
            valid=false;
            notifications.show({
                title: 'Please Accept Terms and Conditions',
                message: "",
                withCloseButton:true,
                icon:<IconX style={{width:"90%",height:"90%"}}/>,
                color:"teal",
                withBorder:true,
                className:"!fixed top-10 left-[35%] z-[1007] transition duration-300 ease-in-out !border-red-500  !rounded-full"
              })

        }
        setFormError(newFormError);
        
          
        if(valid===true){
            setLoading(true);
            registerUser(data)
            .then((res)=>{
                console.log(res);
                setData(form);
                notifications.show({
                title: 'Registration Succesfull',
                message: 'Redirecting to Login Page....',
                withCloseButton:true,
                icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
                color:"teal",
                withBorder:true,
                className:"!fixed top-10 left-[35%] z-[1007] transition duration-300 ease-in-out !border-green  !rounded-full"
              })
              setTimeout(()=>{
                setLoading(false);
                navigate("/login")
              },4000)
            }
            ).catch((err)=>{
                setLoading(false);
                console.log(err.response.data);
                notifications.show({
                    title: 'Registration Failed',
                    message: err.response.data.errorMessage+"  Redirecting...",
                    withCloseButton:true,
                    icon:<IconX style={{width:"90%",height:"90%"}}/>,
                    color:"teal",
                    withBorder:true,
                    className:"!fixed top-10 left-[35%] z-[1007] transition duration-300 ease-in-out !border-red-500  !rounded-full"
                  })
                  setTimeout(()=>{
                    navigate("/login")
                  },1000)
                  
            });
        }
        
    }
    return(
        <>
         <LoadingOverlay
                  visible={loading}
                  zIndex={1000}
                  overlayProps={{ radius: 'sm', blur: 2 }}
                  loaderProps={{ color: 'brightSun.4', type: 'bars' }}
                  className="translate-x-1/2"
                />
        <div className="w-1/2 flex flex-col justify-center px-20 gap-3 ">
            <div className="text-2xl font-semibold">Create Account</div>
            
            <TextInput value={data.name} name="name" error={formError.name} onChange={handleChange} withAsterisk label="Full Name" placeholder="Your name"/>
            <TextInput value={data.email} name="email" error={formError.email} onChange={handleChange}  withAsterisk
                leftSection={ <IconAt style={{ width: rem(16), height: rem(16) }} />}
                label="Email"
                placeholder="Your email"
            />
            <PasswordInput value={data.password} name="password" error={formError.password} onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" />

            <PasswordInput value={data.confirmPassword} name="confirmPassword" error={formError.confirmPassword} onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label=" Confirm Password" placeholder="Confirm Password" />

            <Radio.Group
                
                value={data.accountType}
                onChange={handleChange}
                label="You Are?"
                withAsterisk>
                    <Group mt="xs">
                        <Radio  className="py-4 px-6 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5" value="APPLICANT" label="Applicant" />
                        <Radio  className="py-4 px-6 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400  has-[:checked]:bg-bright-sun-400/5" value="EMPLOYER" label="Employer" />
                    </Group>
            </Radio.Group>
            <Checkbox autoContrast
                checked={checked}
                onChange={handleCheck}
                label={<>I accept   <Anchor>terms & conditions</Anchor></>}
            />
            <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign up</Button>
            <div className="mx-auto">Have an account? 
                <span className="text-bright-sun-400 hover:underline cursor-pointer"onClick={()=>{navigate("/login");setData(form);setFormError(form)}} > Login</span>
                
            </div>
        </div>
        </>
    )

}
export default SignUp;