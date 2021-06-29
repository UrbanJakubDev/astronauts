import Form from '../components/Form'

const NewAstronaut = () => {
  const astronautForm = {
    name: '',
    surname: '',
    superpowers: '',
    birth_date: 0,
    rank: '',
    image_url: '',
    strongness: [],
    weakness: [],
  }

  return <Form formId="add-astronaut-form" astronautForm={astronautForm} />
}

export default NewAstronaut
