const mongoose = require("mongoose")

const Note = new mongoose.Schema({
  title: String,
  body: String,
})

const NoteModel = mongoose.model("NoteModel", Note)
module.exports = NoteModel
