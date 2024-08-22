import { RiMenu2Line ,RiCloseLine} from '@remixicon/react';
import React, { useState } from 'react'

const Navbar = () => {
    const [menu,openmenu] = useState(false);
    const [showmenu, setshowmenu] = useState(true);

  return (
    
    <div className="flex flex-wrap justify-between md:items-centre text-white px-10 pt-6 md:px-20">
        <span className='text-xl font-bold tracking-wide'>Portfolio</span>
        <ul className={`${menu ? "block" : "hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-centre md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
             
        <a href="#Home"><li className='text-md transition-all  duration-300 p-1 md:p-0'>Home</li>
        </a>

            <a href="#About"><li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
            </a>


            <a href="#Project"><li  className='text-md transition-all duration-300 p-1 md:p-0'>Project</li>
            </a>

            <a href="#Contact"><li  className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
            </a>
        </ul>
       { showmenu ? (
        <RiMenu2Line
        size={30}
        className="md:hidden absolute right-10 top-6 transition-all duration-300"
        onClick={()=>
        {
            openmenu(!menu);
            setshowmenu(!showmenu);
        }
        }
        />):(<RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300"  onClick={()=>
            {
                openmenu(!menu);
                setshowmenu(!showmenu);
            }
            } />)}
         
     </div>
  )
}

export default Navbar