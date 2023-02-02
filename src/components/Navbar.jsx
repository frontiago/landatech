import {useState} from 'react'
import {MdDesktopMac} from 'react-icons/md'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  
    const [nav, setNav] = useState(false)

    return (
    <div className="w-full h-10 py-8 bg-gradient-to-r from-blue-400  to-blue-600 flex justify-around items-center text-white">
        
        <div className="flex items-center gap-2 font-poppins">
            <MdDesktopMac size={23} />
            <h1 className="text-2xl"> 
                 <Link to="/"> Landa <span className="font-bold text-blue-900">Tech</span>  </Link> 
            </h1>
        </div>        

        <ul className="hidden md:flex md:gap-12 text-xl">
            <li className="hover:text-blue-800 font-bold"> <Link to="/">Home</Link> </li>
            <li className="hover:text-blue-800 font-bold"> <Link to="/company">Company</Link> </li>
            <li className="hover:text-blue-800 font-bold"> <Link to="/team">Team</Link> </li>
            <li className="hover:text-blue-800 font-bold"> <Link to="/contact">Contact</Link> </li>
        </ul>

        <AiOutlineMenu onClick={() => setNav(!nav)} className="text-3xl cursor-pointer md:hidden absolute right-10" />

        {/* Menu mobile */}
        <div className={nav ? 'fixed top-0 left-0 right-0 w-full h-screen bg-blue-500 flex flex-col justify-center items-center duration-300 z-20' : 
        'fixed top-0 right-0 w-full left-[-100%] h-screen bg-blue-500 flex flex-col justify-center items-center duration-300 z-20'}>

            <AiOutlineClose onClick={() => setNav(!nav)} className="absolute top-10 right-10 cursor-pointer" size={30}/>

            <ul className="flex flex-col text-4xl gap-16">
                <li onClick={() => setNav(false)}> <Link to="/">Home</Link> </li>
                <li onClick={() => setNav(false)}> <Link to="/company">Company</Link> </li>
                <li onClick={() => setNav(false)}> <Link to="/team">Team</Link> </li>
                <li onClick={() => setNav(false)}> <Link to="/contact">Contact</Link> </li>
            </ul>
        </div>

    </div>
    )
}

export default Navbar;