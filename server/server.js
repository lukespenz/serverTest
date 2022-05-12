require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const path = require("path")

app.get('/', (req, res) => {res.sendFile(path.join(__dirname + '/public/index.html'))})

const port = process.env.port

app.listen(port, () => {console.log(`listening: ${port}`)})