import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {FiClock} from 'react-icons/fi'

import {useRef} from 'react'
import emailjs from '@emailjs/browser';

export const ContactDescription = () => {

  const formRef = useRef() 

  const sendEmail = (e) => {
    e.preventDefault()  

    emailjs.sendForm('service_z3ylvja', 'template_6p648xj', formRef.current, '28A2WQxIvPfLigpe_')
    .then((result) => {
        alert(`${result.text}. Email sent! We will get back to you soon`)
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }

  return (
    <div className="w-full h-auto p-8 md:py-16 md:px-80 font-poppins">

      <div className="w-full min-h-[400px] mx-auto text-center">

        <p className="text-slate-500 mb-2">
          Let's talk about your project and how can impact your business growth. 
        </p>
        <p className="text-slate-500 mb-20">
          Feel free to contact us any time. We will get back to you as soon as we can.
        </p>       

        <form onSubmit={sendEmail} ref={formRef} className="flex flex-col md:flex-row gap-4 justify-center">  

          <div className="w-full md:w-[50%] min-h-[100px] md:min-h-screen flex flex-col gap-8 items-center">
              <input className="w-full p-4 border-2 border-indigo-200 rounded-2xl text-xl placeholder:text-indigo-400" 
              type="text" placeholder="Name:" name="user_name" required/>
              
              <input className="w-full p-4 border-2 border-indigo-200 rounded-2xl text-xl placeholder:text-indigo-400" 
              type="email" placeholder="Email:" name="user_email" required/>

              <input className="w-full p-4 border-2 border-indigo-200 rounded-2xl text-xl placeholder:text-indigo-400" 
              type="text" placeholder="Subject:" name="user_subject" required/>

              <input className="w-full h-[250px] p-4 border-2 border-indigo-200 rounded-2xl text-xl placeholder:text-indigo-400" 
                type="textarea" placeholder="Message:" name="user_message" required/>
            
              <button className="py-4 px-8 w-[200px] text-white bg-indigo-600 rounded-2xl">SEND EMAIL</button>
          </div>

          <div className="w-full md:w-[50%] min-h-[200px] md:min-h-[200px] py-12 md:py-[0px] text-center md:text-right flex flex-col justify-center items-center md:justify-start md:items-start md:pl-32">

            <h2 className="text-2xl mb-6 text-slate-600">More info about us:</h2>

            <p className="text-xl text-slate-400 mb-6 flex items-center gap-4"> 
              <HiOutlineMail size={30} className="text-indigo-400"/> landatech@gmail.com 
            </p>    
            <p className="text-xl text-slate-400 mb-6 flex items-center gap-4"> 
              <BsTelephoneFill size={25} className="text-indigo-400"/> +55 (84) 9 9988-8899 
            </p>  
            <p className="text-xl text-slate-400 mb-2 flex items-center gap-4"> 
              <MdLocationOn size={30} className="text-indigo-400"/> Tirol Office Building 
            </p>  
            <p className="text-xl text-slate-400 mb-2 flex items-center pl-12"> 
              St.Santa Monica
            </p> 
            <p className="text-xl text-slate-400 mb-6 flex items-center pl-12"> 
              Natal, RN
            </p> 
            <p className="text-xl text-slate-400 mb-6 flex items-center gap-4"> 
              <FiClock size={30} className="text-indigo-400"/> 08:00 - 18:00 
            </p>  
            
          </div>       

        </form>

      </div>
    </div>
  )
}


