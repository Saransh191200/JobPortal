import { Button, Modal, PasswordInput, PinInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verifyOtp } from "../Services/UserService";
import { SignUpValidation } from "../Services/SignUpValidation";
import { errorNotification, successNotification } from "../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword=(props:any)=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passError,setPassError]=useState("")
    const [otpSent,setOtpSent]=useState(false);
    const [otpSending,setOtpSending]=useState(false);
    const [verified,setVerified]=useState(false);
    const [ResendLoader,setResendLoader]=useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if(seconds===0){
            setResendLoader(false);
            setSeconds(60);
            interval.stop()
        }
        else{
            setSeconds((s) => s - 1)}
        } , 1000);
    const handleChange=(event:any)=>{
        setEmail(event.target.value); 
    }
    const handleSendOtp=()=>{
        setOtpSending(true);
        sendOtp(email)
        .then((res)=>{
            console.log(res);
            successNotification("OTP sent successfully","Please check your email for OTP")
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start();
        })
        .catch((err)=>{
            console.log(err);
            errorNotification("OTP sending Failed",err.response.data.errorMessage);
            setOtpSending(false);
        })

    }
    const resendOtp=()=>{
        if(ResendLoader) return;
        handleSendOtp();

    }
    const changeEmail=()=>{
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }
    const handleVerifyOtp=(otp:string)=>{
        verifyOtp(email,otp)
        .then((res)=>{
            console.log(res);
            setVerified(true);
            successNotification("OTP verified","Enter new Password");

        })
        .catch((err)=>{
            console.log(err);
            errorNotification("Incorrect OTP",err.response.data.errorMessage);
        })
    }
    const handleChangePass=()=>{
        changePass(email,password)
        .then((res)=>{
            console.log(res);
            successNotification("Password Changed","Login with new Password");
            props.close();
        })
        .catch((err)=>{
            errorNotification("Password Change Failed",err.response.data.errorMessage);
        })

    }
    return(
        <>
            <Modal radius="lg" opened={props.opened} onClose={props.close}  title="Forgot your Password?" centered>
                <div className="flex flex-col gap-6">
                    <div className="text-xs">We'll email OTP to reset your password.</div>
                    <div>
                        <TextInput  value={email}  onChange={handleChange} name="email" withAsterisk
                            leftSectionPointerEvents="none"
                            leftSection={ <IconAt style={{ width: rem(16), height: rem(16) }} />}
                            label="Email"
                            placeholder="Your email"
                            rightSection={<Button size="xs" loading={otpSending} onClick={handleSendOtp} disabled={email==="" || otpSent} className="mr-1 my-1" autoContrast variant="filled">Send OTP</Button>} rightSectionWidth="lg"
                         />
                    </div>
                    {
                        otpSent&&<PinInput className="mx-auto" onComplete={handleVerifyOtp} length={6} placeholder="O" type="number" />
                    }
                    {
                        otpSent&& !verified&& <div className="flex gap-2">
                            <Button  loading={otpSending} fullWidth onClick={resendOtp}   autoContrast variant="light">{ResendLoader?seconds:"Resend OTP"}
                            </Button>

                            <Button   fullWidth onClick={changeEmail}  autoContrast variant="filled">
                                Change email

                            </Button>
                        </div>
                    }
                    {
                        verified&& <div>
                            <PasswordInput value={password} error={passError}  onChange={(e)=>{setPassword(e.target.value);setPassError(SignUpValidation("password",e.target.value))}} name="password" withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" />
                        </div>
                    }
                    {
                        verified&&<div>
                            <Button   fullWidth onClick={handleChangePass}  autoContrast variant="filled">
                                Change Password
                            </Button>
                        </div>
                    }
                    
                </div>
            </Modal>
        </>
    )
}
export default ResetPassword;