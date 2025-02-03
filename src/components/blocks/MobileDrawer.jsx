import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router";

export default function ({data}) {
  const [open,setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  };
  console.log(open)

  return (
    <div>
        <IoIosMenu onClick ={handleOpen} size={30}/>
        <div onClick={handleOpen} className={`fixed top-0 w-full  backdrop-brightness-50 right-0 z-40 blur-sm h-screen transition-all duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"} `}></div>
        <div className={`fixed top-0 ${open ? "right-0": "-right-full" } w-80 transition-all duration-300 h-screen z-50 bg-white p-10 space-y-10`}>
        <div onClick={handleOpen} className="w-fit ">
          <IoCloseOutline  size={25}/>
        </div>
            <ul className="space-y-3">
                {data.map((item,idx)=>(
                    <li key={idx}>
                    <NavLink className="text-primary/80 hover:text-second transition-all duration-all" to={item.href}>{item.label}</NavLink>
                </li>
                ))}
            </ul>
        </div>
        

    </div>
  )
}
