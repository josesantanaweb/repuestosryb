import { TEAM } from '@/data/team'

interface MemberProps {
  member: {
    id: number
    image: string
    name: string
    position: string
  }
}

const Member = ({ member }: MemberProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <img
        src={`/images/team/${member.image}`}
        alt="member"
        className="lg:w-full h-[270px] mb-3 rounded-2xl w-[250px] object-cover"
      />
      {/* <h4 className="text-base font-semibold text-black">{member.name}</h4> */}
      {/* <p className="text-sm uppercase text-primary text-medium">{member.position}</p> */}
    </div>
  )
}

const Team = () => {
  return (
    <div className="relative px-4 py-20 lg:px-0">
      <div className="container">
        <div className="flex flex-col justify-start w-full gap-4 mb-10">
          <h4 className="text-2xl text-left uppercase">
            Nuestro <span className="font-semibold">Equipo</span>
          </h4>
          <span className="w-10 h-0.5 bg-secondary"></span>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
          {TEAM.map((member) => (
            <Member member={member} key={member.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
