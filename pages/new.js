import Form from '../components/Form'

const NewAstronaut = () => {
  const astronautForm = {
    name: '',
    surname: '',
    superpowers: '',
    birth_date: '',
    rank: '',
    image_url: '',
  }

  return <Form formId="add-astronaut-form" astronautForm={astronautForm} />
}

export default NewAstronaut
