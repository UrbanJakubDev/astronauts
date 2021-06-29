import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../utils/dbConnect'
import Astronaut from '../../models/Astronaut'

/* Allows you to view pet card info and delete pet card*/
const AstronautPage = ({ astronaut }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const astronautID = router.query.id

    try {
      await fetch(`/api/astronauts/${astronautID}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the astronaut.')
    }
  }

  return (
    <div key={astronaut._id}>
      <div className="card">
        <img src={astronaut.image_url} />
        <h5 className="pet-name">{astronaut.name}</h5>
        <div className="main-content">
          <p className="pet-name">{astronaut.name}</p>
          <p className="owner">Owner: {astronaut.owner_name}</p>

          {/* Extra Pet Info: Likes and Dislikes */}
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
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const astronaut = await Astronaut.findById(params.id).lean()
  astronaut._id = astronaut._id.toString()

  return { props: { astronaut } }
}

export default AstronautPage
