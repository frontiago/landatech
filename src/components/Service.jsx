import {MdSpeed, MdAddAPhoto, MdLightbulbOutline} from 'react-icons/md'

export const Service = () => {
  return (
    <div id="services" className="w-full flex flex-col items-center py-12">
        <h2 className="text-3xl font-bold ">Our Services</h2>

        <div className="py-8 flex flex-col text-center items-center gap-8 md:flex-row md:px-48">
            
            <div className="flex flex-1 flex-col gap-2 items-center px-12 py-6 md:px-12">
                <MdSpeed size={110} color="#4338ca"/>
                <h3 className="font-bold">Fast and beautiful websites</h3>
                <p>Impact your audience with beautiful webpages that loads fast.</p>
            </div>

            <div className="flex flex-1 flex-col gap-2 items-center px-12 py-6 md:px-12">
                <MdAddAPhoto size={110} color="#4338ca"/>
                <h3 className="font-bold">Coolest designs</h3>
                <p>From your logo to your website, everything you need is here.</p>
            </div>

            <div className="flex flex-1 flex-col gap-2 items-center px-12 py-6 md:px-12">
                <MdLightbulbOutline size={110} color="#4338ca"/>
                <h3 className="font-bold">Rebranding</h3>
                <p>Your brand needs a fresh looking? call us to improve it</p>
            </div>
        </div>
    </div>
  )
}