import {  Button, LoadingOverlay, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UserService";
import { logInValidation } from "../Services/SignUpValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from './ResetPassword';
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";

const form={
    email:"",
    password:"",
}
const Login=()=>{
    const[loading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const [opened, { open, close }] = useDisclosure(false)
    const navigate=useNavigate();
    const [data,setData]=useState<{[key:string]:string}>(form);
    const [formError,setFormError]=useState<{[key:string]:string}>(form);
    const handleChange=(event:any)=>{
        let name=event.target.name;
        let value=event.target.value;
        setData({...data,[name]:value});
        setFormError({...formError,[name]:logInValidation(name,value)})
        
    }
    const handleSubmit=()=>{
        let valid =true;
        let newFormError:{[key:string]:string}={}
        for(let key in data){
            newFormError[key]=logInValidation(key,data[key]);
            if(newFormError[key]) valid=false;
        }
        setFormError(newFormError);
        if(valid===true){
            setLoading(true);
            loginUser(data)
            .then((res)=>{
                console.log(res);
                setData(form);
                notifications.show({
                    title: 'Registration Succesfull',
                    message: 'Redirecting to HomePage Page....',
                    withCloseButton:true,
                    icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
                    color:"teal",
                    withBorder:true,
                    className:"!fixed top-10 left-[35%] z-[1007] transition duration-300 ease-in-out !border-bright-sun-400 !rounded-full"
                  })
                  setTimeout(()=>{
                    setLoading(false);
                    dispatch(setUser(res));
                    navigate("/")
                  },4000)
            })
            .catch((err)=>{
                setLoading(false);
                console.log(err.response.data);
                notifications.show({
                    title: 'Registration Failed',
                    message: err.response.data.errorMessage,
                    withCloseButton:true,
                    icon:<IconX style={{width:"90%",height:"90%"}}/>,
                    color:"teal",
                    withBorder:true,
                    className:"!fixed top-10 left-[35%] z-[1007] transition duration-300 ease-in-out !border-red-500  !rounded-full"
                  })
                  setTimeout(()=>{
                    // navigate("/signup")
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
        />

        <div className="w-1/2 flex flex-col justify-center px-20 gap-3 ">
            <div className="text-2xl font-semibold">Login Account</div>
            
            
            <TextInput value={data.email} error={formError.email} onChange={handleChange} name="email" withAsterisk
                leftSectionPointerEvents="none"
                leftSection={ <IconAt style={{ width: rem(16), height: rem(16) }} />}
                label="Email"
                placeholder="Your email"
            />
            <PasswordInput value={data.password} error={formError.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" />
            
            
            <Button loading={loading} onClick={handleSubmit} className="" autoContrast variant="filled">Login</Button>
            
            <div className="mx-auto">Don't have an account? 
                <span className="text-bright-sun-400 hover:underline cursor-pointer" onClick={()=>{navigate("/signup");setData(form);setFormError(form);}}> Signup</span>
                
            </div>
            <div onClick={open} className="text-bright-sun-400 mx-auto hover:underline cursor-pointer">Forgot Password?</div>
        </div>
        <div>
            <ResetPassword opened={opened} close={close}/>
        </div>
        </>
    )

}
export default Login;