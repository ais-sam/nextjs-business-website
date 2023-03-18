
import PageTitle from "components/shared/PageTitle"
import TeamText from "components/team/TeamText"
import TeamMemberCard from "components/team/TeamMemberCard"
import {team} from "data/data"



const Teams = () => {
  return (
    <div className="container">
      <PageTitle title="Our Team"/>
      <TeamText/>
      <section className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-y-16">
        {team.map(member=><TeamMemberCard key={member.id} {...member}/>)}
      </section>
    </div>
  )
}

export default Teams