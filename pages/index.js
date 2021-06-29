import Link from 'next/link'
import dbConnect from '../utils/dbConnect'
import Astronaut from '../models/Astronaut'

const Index = ({ astronauts }) => (
  <>
    {/* Create a card for each astronaut */}
    {astronauts.map((astronaut) => (
      <div key={astronaut._id}>
        <div className="card">

          <h5 className="astronaut-name">{astronaut.name}</h5>
          <div className="main-content">
            <p className="astronaut-name">{astronaut.surname}</p>
            <p className="owner">Owner: {astronaut.rank}</p>

            {/* Extra astronaut Info: Likes and Dislikes */}
            <div className="likes info">
              <p className="label">Strongness</p>
              <ul>
                {astronaut.strongness.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>
            <div className="dislikes info">
              <p className="label">Weakness</p>
              <ul>
                {astronaut.weakness.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${astronaut._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${astronaut._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
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
