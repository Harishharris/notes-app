const express = require("express")
const router = express.Router()
const { getAllNotes } = require("../controllers/getAllNotes")
const { getOneNote } = require("../controllers/getOneNote")
const { addNewNote } = require("../controllers/addNewNote")
const { deleteNote } = require("../controllers/deleteNote")
const { updateNote } = require("../controllers/updateNote")

router.route("/").get(getAllNotes).post(addNewNote)
router.route("/:id").get(getOneNote).delete(deleteNote).put(updateNote)

module.exports = router
