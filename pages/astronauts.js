import dbConnect from '../utils/dbConnect'
import Astronaut from '../models/Astronaut'
import CrewMemberCard from '../components/CrewMemebrCard/CrewMemberCard'
import birth_replace from '../utils/utilFunctions'

const Astronauts = ({ astronauts }) => {
  if (astronauts.length === 0) return <div>Your crew is empty...</div>
  return (
    <>
      {astronauts.map((astronaut) => (
        <div key={astronaut._id}>
          <CrewMemberCard astronaut={astronaut} preview={true} />
        </div>
      ))}
    </>
  )
}

/* Retrieves astronaut(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Astronaut.find({})
  const astronauts = result.map((doc) => {
    const astronaut = doc.toObject()
    astronaut._id = astronaut._id.toString()
    astronaut.birth_date = birth_replace(astronaut.birth_date.toString())
    return astronaut
  })

  return { props: { astronauts: astronauts } }
}

export default Astronauts
