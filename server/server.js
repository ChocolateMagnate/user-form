//This is a small backend that keeps track of how many people are on each page.
const express = require('express')
const cors = require('cors')
const app = express()

const whiteList = ['http://localhost:3000', 'http://127.0.0.1:3000']
const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whiteList.indexOf(origin) !== -1)
          callback(null, true)
      else
        callback(new Error("Not allowed by CORS"))
    },
    credentials: true,
  }

app.use(cors(corsOptions))
let googleCounter = 0, discordCounter = 0, linuxCounter = 0

app.get("/google", (request, response) => {
    console.log(`Google counter ${googleCounter} increased to ${googleCounter + 1}`)
    googleCounter++
    response.send(`Google Counter: ${googleCounter}`)
})

app.get("/discord", (request, response) => {
    discordCounter++
    response.send(discordCounter)
})

app.get("/linux", (request, response) => {
    linuxCounter++
    response.send(linuxCounter)
})

//These methods will fire when users leave the pages.
app.post("/google", () => googleCounter--)
app.post("/discord", () => discordCounter--)
app.post("/linux", () => linuxCounter--)

app.listen(5000, () => console.log('Server started on port 5000'))