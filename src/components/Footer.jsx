import {SiInstagram, SiFacebook, SiTwitter, SiTiktok, SiBehance} from 'react-icons/si'
import {MdDesktopMac} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="w-full min-h-48 bg-indigo-800 font-poppins flex flex-col items-center py-12  md:py-0 md:flex-row gap-2 sm:gap-16">
        
        <div className="flex flex-1 justify-center">
            <ul className="flex gap-6 md:flex-col md:gap-2 md:my-10 md:ml-12">
                <li className="text-white text-lg hover:text-cyan-400"> <Link to="/"> Home </Link> </li>
                <li className="text-white text-lg hover:text-cyan-400"> <Link to="/company"> Company </Link> </li>
                <li className="text-white text-lg hover:text-cyan-400"> <Link to="/team"> Team </Link> </li>
                <li className="text-white text-lg hover:text-cyan-400"> <Link to="/contact"> Contact </Link> </li>
            </ul>
        </div>

        <div className="flex flex-1 flex-col my-16 items-center">
            <h3 className="text-cyan-400 mb-6">Follow Us</h3>
            <ul className="flex gap-8">
                <li><a href="#instagram"> <SiInstagram size={32} color="#fff" /> </a></li>
                <li><a href="#facebook"> <SiFacebook size={32} color="#fff" /> </a></li>
                <li><a href="#twitter"> <SiTwitter size={32} color="#fff" /> </a></li>
                <li><a href="#tiktok"> <SiTiktok size={32} color="#fff" /> </a></li>
                <li><a href="#behance"> <SiBehance size={32} color="#fff" /> </a></li>
            </ul>
        </div>

        <div className="flex flex-1 flex-col gap-1 items-center text-white md:mr-12">
            <MdDesktopMac size={20} />
            <h1 className="text-xl"> 
                <Link to="/"> Landa <span className="font-bold text-slate-300">Tech</span>  </Link>
            </h1>
            <p className="text-slate-400 text-center">Digital solutions for your company</p>
        </div>

    </div>
  )
}

export default Footer;