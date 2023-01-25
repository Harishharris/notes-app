const Note = require("../models/Note")

const deleteNote = async (req, res) => {
  const { id } = req.params
  const deletedNote = await Note.findByIdAndDelete(id)
  res.send(deletedNote)
}

module.exports = { deleteNote }
