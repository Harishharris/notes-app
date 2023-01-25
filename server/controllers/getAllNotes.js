const Note = require("../models/Note")

const getAllNotes = async (req, res) => {
  const allNotes = await Note.find({})
  res.send(allNotes)
}

module.exports = { getAllNotes }
