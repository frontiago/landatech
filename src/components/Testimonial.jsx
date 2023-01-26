const imgUrl = 'https://randomuser.me/api/portraits/men/42.jpg'

const Testimonial = () => {
  return (
    <div className="w-full px-12 py-12 md:px-64 md:pt-4 md:pb-12 flex flex-col md:flex-row font-poppins border-b-2 border-indigo-200 md:items-center">

      <div className="flex flex-col flex-2 gap-6 md:gap-2 items-end">
        <p className="text-2xl text-indigo-500 font-bold">Wanna know more about us and what we can do for you?</p>
        <p className="text-xl">If you choose us, you will be choosing quality.</p>
        <p className="text-xl">We are ready to make your dreams come true.</p>
        <p className="text-xl">See what services we offer and let's talk about your project.</p>
      </div>

      <div className="flex flex-col flex-1 items-center">
        <img className="rounded-full mb-4 my-12" src={imgUrl} alt="img" />
        <h3 className="text-xl text-indigo-500 font-bold">Fred Smith</h3>
        <p className="text-sm text-slate-900">CEO at Landatech</p>
      </div>

    </div>
  )
}

export default Testimonial
