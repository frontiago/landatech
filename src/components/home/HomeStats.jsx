const imgUrl = 'https://randomuser.me/api/portraits/men/42.jpg'

export const HomeStats = () => {
  return (
    <div className="w-full h-[700px] md:h-[450px] flex flex-col md:flex-row font-poppins md:items-center pb-8">

      <div className="w-full h-full flex-1 bg-office-cover bg-cover bg-center opacity-[0.7]">
          <div className="w-full h-full  bg-indigo-700 opacity-[0.2]"></div>
      </div>

      <div className="w-full h-full flex flex-1 flex-col px-12 py-8 bg-blue-200">
        <h1 className="text-3xl mb-4 pb-4 border-b-2 font-bold border-indigo-300">Our Numbers</h1>
        <p className="mb-8">We are happy to share some of our numbers with you, this data mean so much to us, shows how many lifes we can change and how many business we've helped along the years.</p>

        <div className="w-full h-20 mb-6 ">
          <ul className="flex justify-between gap-12">
            <li> <strong className="text-4xl text-slate-800">+100</strong>  <br /> <span>Clients Satisfied</span> </li>
            <li className="text-center"> <strong className="text-4xl text-slate-800">+267</strong>  <br /> <span>Projects Delivered</span> </li>
            <li className="text-right"> <strong className="text-4xl text-slate-800">+10.000</strong>  <br /> <span>Hours of Work</span> </li>
          </ul>
        </div>

        <p>Still not convinced how professional we are?</p>

        <a href="#"className="mt-4 w-full text-xl font-bold bg-blue-800 text-white py-2 px-2 rounded-2xl hover:bg-blue-600 md:w-[200px] text-center">Contact Us</a>
        
      </div>

    </div>
  )
}
