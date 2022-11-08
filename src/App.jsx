import { useState } from 'react'
import { BsArrowLeftShort} from 'react-icons/bs'
import Navbar from './components/Navbar.jsx'
import NavRoutes from './components/NavRoutes.jsx'
import './App.css'



function App() {
 const [open, setOpen] = useState(true)

 const handleToggle = () => {
     setOpen(!open)
 }


  return (
    <div className="flex">
      <div className={`${open ? 'w-[240px]' : "w-14"} h-screen bg-color-base  relative duration-300 bg-custom`}>
           <BsArrowLeftShort onClick={handleToggle}  size={30} className={`absolute right-[-10px] top-8 bg-white rounded-full border border-dark-green cursor-pointer ${!open ? "rotate-180" : ""} duration-300 `}/>
           <Navbar open={open}/>
      </div>
      <div>
      <NavRoutes open={open}/>
      </div>
  </div>
  )
}

export default App
