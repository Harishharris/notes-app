const Note = require("../models/Note")

const addNewNote = async (req, res) => {
  const { title } = req.body
  const { body } = req.body
  const newNote = await Note.create({
    title,
    body,
  })
  res.send(newNote)
}

module.exports = { addNewNote }
