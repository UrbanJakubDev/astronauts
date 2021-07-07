import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const AstronautSchema = new mongoose.Schema({
  name: {
    /* The name of the Astronaut */

    type: String,
    required: [true, 'Please provide a name for Astronaut.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  surname: {
    /* he surname of the Astronaut */

    type: String,
    required: [true, 'Please provide a surbane for Astronaut'],
    maxlength: [20, 'Surname cannot be more than 60 characters'],
  },
  superpowers: {
    /* The Astronaut's superpowers */

    type: String,
    required: [true, 'Please specify the superpower of Astronaut.'],
    maxlength: [30, 'Superpower cannot be more than 40 characters'],
  },
  birth_date: {
    /* Astronauts age, if applicable */

    type: Date,
  },
  rank: {
    /* Astronauts Rank, if applicable */
    type: String,
  },
  image_url: {
    /* Url to Astronaut image */

    required: [false, 'Please provide an image url for this Astronaut.'],
    type: String,
  },
})

export default mongoose.models.Astronaut ||
  mongoose.model('Astronaut', AstronautSchema)
