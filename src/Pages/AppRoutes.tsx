import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import TalentProfile from "./TalentProfile";
import JobHistoryPage from "./JobHistoryPage";
import CompanyPage from "./CompanyPage";
import PostedJobPage from "./PostedJobPage";
import ApplyJobPage from "./ApplyJobPage";
import PostJobPage from "./PostJobPage";
import JobDescPage from "./JobDescPage";
import FindTalentPage from "./FindTalentPage";
import FindJobs from "./FindJobs";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Footer from "../Footer/Footer";
import Mark from "../LandingPage/Mark";
import { useSelector } from "react-redux";


const AppRoutes=()=>{
    const user=useSelector((state:any)=>state.user)
    return(
        <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/talent-profile/:id" element={<TalentProfile/>}></Route>
        <Route path="/job-history" element={<JobHistoryPage/>}></Route>
        <Route path="/company-page/:name" element={<CompanyPage/>}></Route>
        <Route path="/posted-job/:id" element={<PostedJobPage/>}></Route>
        <Route path="/apply-job/:id" element={<ApplyJobPage/>}></Route>
        <Route path="/upload-job/:id" element={<PostJobPage/>}></Route>
        <Route path="/jobs/:id" element={<JobDescPage/>}></Route>
        <Route path="/find-talent" element={<FindTalentPage/>}></Route>
        <Route path="/find-jobs" element={<FindJobs/>}></Route>
        <Route path="/signup" element={user?<Navigate to="/"></Navigate>:<SignupPage/>}></Route>
        <Route path="/login" element={user?<Navigate to="/"></Navigate>:<SignupPage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path='*' element={<HomePage/>}></Route>
      </Routes>
      <Footer/>
      <Mark/>
     </BrowserRouter>
    )
}
export default AppRoutes;