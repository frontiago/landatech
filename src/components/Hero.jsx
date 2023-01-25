
export const Hero = () => {
  return (
    <div className="w-full h-[60%] bg-gradient-to-r from-blue-200  to-blue-400 flex flex-col font-poppins md:justify-start md:py-28 relative">

        <div className="flex flex-col text-center items-center py-20 px-8 md:py-12 md:items-start md:pl-64 z-10">
            
            <h2 className="text-5xl md:text-6xl mb-2">We can build <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-indigo-700">amazing</span> </h2>

            <h2 className="text-5xl md:text-6xl mb-6 text-">things for you</h2>

            <p className="text-xl md:text-3xl mb-8 text-slate-700 ">Websites, systems and much more</p>

            <a href="#services"className="w-full h-12 text-2xl font-bold bg-blue-800 text-white py-2 px-4 rounded-2xl md:w-80 hover:bg-blue-600">See Our Services</a>
        </div>

        <div className="md:absolute right-0 top-0 w-[60%] h-full bg-approved bg-no-repeat bg-cover bg-right md:opacity-[30%] opacity-0">

        </div>
    </div>
  )
}
