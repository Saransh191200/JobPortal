import axios from "axios"
import { error } from "console";
const base_url="http://localhost:8080/users/";
const registerUser=async(user:any)=>{
    return axios.post(`${base_url}register`,user)
    .then(res=>res.data)
    .catch(error=>{throw error});
}

const loginUser=async(login:any)=>{
    return axios.post(`${base_url}login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error});
}
const sendOtp=async(email:any)=>{
    return axios.post(`${base_url}sendOtp/${email}`)
    .then(result =>result.data)
    .catch(error=>{throw error});
}
const verifyOtp=async(email:any,otp:any)=>{
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`)
    .then(result =>result.data)
    .catch(error=>{throw error});
}

const changePass=async(email:any,password:any)=>{
    return await axios.post(`${base_url}changePassword`,{email,password})
    .then(result=>result.data)
    .catch(error=>{throw error});
}

const getUser=async(id:any)=>{
    return await axios.get(`${base_url}get/${id}`)
        .then((res)=>res.data)
        .catch((err)=>{throw err});
}

export {registerUser,loginUser,sendOtp,verifyOtp,changePass,getUser};