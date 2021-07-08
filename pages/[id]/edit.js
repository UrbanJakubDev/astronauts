import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '../../components/Form'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditAstronaut = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: astronaut, error } = useSWR(
    id ? `/api/astronauts/${id}` : null,
    fetcher
  )

  if (error) return <p>Failed to load</p>
  if (!astronaut) return <p>Loading...</p>

  console.log(astronaut.birth_date);

  const astronautForm = {
    name: astronaut.name,
    surname: astronaut.surname,
    superpowers: astronaut.superpowers,
    birth_date: astronaut.birth_date,
    rank: astronaut.rank,
    image_url: astronaut.image_url,
  }

  return (
    <Form
      formId="edit-astronaut-form"
      astronautForm={astronautForm}
      forNewAstronaut={false}
    />
  )
}

export default EditAstronaut
