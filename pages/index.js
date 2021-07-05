
import dbConnect from '../utils/dbConnect'
import Astronaut from '../models/Astronaut'
import CrewMemberCard from '../components/CrewMemebrCard/CrewMemberCard'

const Index = ({ astronauts }) => (
  <>
    {/* Create a card for each astronaut */}
    {astronauts.map((astronaut) => (
      <div key={astronaut._id}>
        <CrewMemberCard astronaut={astronaut}/>
      </div>
    ))}
  </>
)

/* Retrieves astronaut(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Astronaut.find({})
  const astronauts = result.map((doc) => {
    const astronaut = doc.toObject()
    astronaut._id = astronaut._id.toString()
    return astronaut
  })

  return { props: { astronauts: astronauts } }
}

export default Index
