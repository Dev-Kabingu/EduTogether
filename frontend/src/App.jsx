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


function App() {
  const [count, setCount] = useState(0)

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
     </Routes>
     {/* <Footer/> */}
     </BrowserRouter>
    </>
  )
}

export default App
