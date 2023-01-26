const imgUrl = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]

export const CompanyDescription = () => {
  return (
    <div className="w-full min-h-screen p-12 md:px-48 font-poppins">

        <div className="flex flex-col text-left min-h-[250px] md:flex-row gap-8 mb-12">
          <div className="flex flex-1 flex-col gap-12">
            <p className="text-xl text-slate-600 md:text-2xl">We are Landatech and we have many years of experience in software development, extremely professional, no delays, and we use the best and the fastest technologies to achieve the client goals.</p>
            <p className="text-xl text-slate-600 md:text-2xl">Also our team uses the best methodologies to bring your project to life in record time.</p>
          </div>

          <div className="flex flex-1 flex-col gap-12">
            <img className="w-full h-full rounded-xl object-cover" src={imgUrl[0]} alt="company" />
          </div>
        </div>

        <hr className="my-12 border border-slate-200"/>

        <div className="flex flex-col text-left min-h-[250px] gap-8 mb-12 md:flex-row-reverse">
          <div className="flex flex-1 flex-col gap-12">
            <p className="text-xl text-slate-600 md:text-2xl">We are Landatech and we have many years of experience in software development, extremely professional, no delays, and we use the best and the fastest technologies to achieve the client goals.</p>
            <p className="text-xl text-slate-600 md:text-2xl">Also our team uses the best methodologies to bring your project to life in record time.</p>
          </div>

          <div className="flex flex-1 flex-col gap-12">
            <img className="w-full h-full rounded-xl object-cover" src={imgUrl[1]} alt="company" />
          </div>
        </div>

        
      
    </div>
  )
}
