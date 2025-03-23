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
     </Routes>
     {/* <Footer/> */}
     </BrowserRouter>
    </>
  )
}

export default App
