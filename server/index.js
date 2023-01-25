const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 3000
const router = require("./routes/router")
const cors = require("cors")
app.use(express.json())
app.use(cors())

const connectionURL =
  "mongodb+srv://notes-app:1234@notes-app.6qkdsap.mongodb.net/?retryWrites=true&w=majority"

app.use("/notes/api/", router)

const start = () => {
  try {
    mongoose.connect(connectionURL)
    console.log("Connected to DataBase")
    app.listen(PORT, err => {
      if (err) {
        console.log("Error occured")
      } else {
        console.log(`Server running at PORT ${PORT}`)
      }
    })
  } catch (err) {
    console.log("Error Occured while connecting to DB")
  }
}

start()
