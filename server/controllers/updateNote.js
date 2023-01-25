const Note = require("../models/Note")

const updateNote = async (req, res) => {
  const { id } = req.params
  const { title, body } = req.body
  const updatedNote = await Note.findByIdAndUpdate(id, {
    title,
    body,
  })
  res.send(updatedNote)
}

module.exports = { updateNote }
