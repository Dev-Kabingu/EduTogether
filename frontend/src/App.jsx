import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Footer from './Components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ChatApp from './pages/ChatApp'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Services from './Pages/Services'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TeacherDashboard from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import ManageStudents from "./pages/admin/ManageStudents";
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageTeachers from './pages/admin/ManageTeachers'
import ManageUsers from './pages/admin/ManageUsers'
import ManageParents from './pages/admin/ManageParents'
import RequestMeeting from './pages/meetings/RequestMeeting'
import Meeting from './pages/admin/Meeting'
import Error from './pages/Error'
import Notification from './pages/admin/Notification'
import ScheduledMeetings from './pages/ScheduledMeetings'; 
import AdminLogin from './pages/admin/AdminLogin'
import AdminRegister from './pages/admin/AdminRegister'
import AssignmentPage from './pages/AssignmentPage'
import TeacherUpload from './components/TeacherUpload'
import AssignmentList from './components/AssignmentList'



function App() {

  return (
    <>
     <BrowserRouter >
     <Routes>
     <Route path = '/' element = { <Home/>}/>
     <Route path = '/About' element = { <About/>}/>
     <Route path = '/Services' element = { <Services/>}/>
     <Route path = '/ChatApp' element = { <ChatApp/>}/>
     <Route path = '/FAQ' element = { <FAQ/>}/>
     <Route path = '/Contact' element = { <Contact/>}/>
     <Route path = '/Login' element = { <Login/>}/>
     <Route path = '/Signup' element = { <Signup/>}/>
     <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
     <Route path="/ParentDashboard" element={<ParentDashboard />} />
     <Route path="/ManageStudents" element={<ManageStudents />} />
     <Route path="/AdminDashboard" element={<AdminDashboard />} />
     <Route path="/ManageUsers" element={<ManageUsers />} />
     <Route path="/ManageTeachers" element={<ManageTeachers />} />
     <Route path="/ManageParents" element={<ManageParents />} />
     <Route path="/AssignmentPage" element={<AssignmentPage/>} />
     {/* <Route path="/AssignmentList" element={<AssignmentList/>} /> */}
     <Route path="/TeacherUpload" element={<TeacherUpload/>} />
     <Route path="/RequestMeeting" element={<RequestMeeting />} />
     <Route path="/Meeting" element={<Meeting />} />
     <Route path="/Error" element={<Error />} />
     <Route path="/Notification" element={<Notification/>} />
     <Route path="/ScheduledMeetings" element={<ScheduledMeetings />} /> 
     <Route path="/AdminLogin" element={<AdminLogin/>} />
     <Route path="/AdminRegister" element={<AdminRegister/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
