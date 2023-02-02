import {teamMembers} from '../../data/teamMembers'

export const TeamMember = () => {
  return (
    <div className="w-full min-h-screen p-12 md:px-36 lg:px-56 font-poppins">
      <div className="w-full md:max-w-[1380px] min-h-[500px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {teamMembers.map((member, index) => (
          <div key={index} className="w-[100%] h-full text-center object-cover">
            <img className="mb-2 w-full" src={member.photo} alt="" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <h4 className="text-sm">{member.occupation}</h4>
          </div>
        ))}

      </div> 
    </div>
  )
}
