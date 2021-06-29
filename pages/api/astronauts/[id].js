import dbConnect from '../../../utils/dbConnect'
import Astronaut from '../../../models/Astronaut'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const astronaut = await Astronaut.findById(id)
        if (!astronaut) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: astronaut })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const astronaut = await Astronaut.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!astronaut) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: astronaut })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedAstronaut = await Astronaut.deleteOne({ _id: id })
        if (!deletedAstronaut) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
