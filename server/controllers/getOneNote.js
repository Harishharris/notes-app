const Note = require("../models/Note")

const getOneNote = async (req, res) => {
  const { id } = req.params
  const singleNote = await Note.findById(id)
  res.send(singleNote)
}

module.exports = { getOneNote }
