import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../utils/dbConnect'
import Astronaut from '../../models/Astronaut'
import birth_replace from '../../utils/utilFunctions'
import CrewMemberCard from '../../components/CrewMemebrCard/CrewMemberCard'

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
      <CrewMemberCard astronaut={astronaut} preview={false} />
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const astronaut = await Astronaut.findById(params.id).lean()
  astronaut._id = astronaut._id.toString()
  astronaut.birth_date = birth_replace(astronaut.birth_date.toString())

  return { props: { astronaut } }
}

export default AstronautPage
