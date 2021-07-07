import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const BtnContainer = ({ routeParam, preview }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const astronautId = router.query.id

    try {
      await fetch(`/api/astronauts/${astronautId}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the Astronaut.')
    }
  }

  return (
    <div className="btn-container">
      <Link href="/[id]/edit" as={`/${routeParam._id}/edit`}>
        <button className="btn edit">Edit</button>
      </Link>

      {preview ? (
        <Link href="/[id]" as={`/${routeParam._id}`}>
          <button className="btn view">View</button>
        </Link>
      ) : (
        <button className="btn delete" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  )
}

export default BtnContainer
