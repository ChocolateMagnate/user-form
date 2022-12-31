//This is a small backend that keeps track of how many people are on each page.
const express = require("express")
const cors = require("cors")
const app = express()

const whiteList = ["http://localhost:3000", "http://127.0.0.1:3000"]
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
console.log(googleCounter, discordCounter, linuxCounter)

app.get("/google", (request, response) => {
    console.log(googleCounter, discordCounter, linuxCounter)
    console.log(`Google counter ${googleCounter} increased to ${googleCounter + 1}`)
    googleCounter++
    response.send(googleCounter.toString())
})

app.get("/discord", (request, response) => {
    console.log(googleCounter, discordCounter, linuxCounter)
    console.log(`Discord counter ${discordCounter} increased to ${discordCounter + 1}`)
    discordCounter++
    response.send(discordCounter.toString())
})

app.get("/linux", (request, response) => {
    console.log(googleCounter, discordCounter, linuxCounter)
    console.log(`Linux counter ${linuxCounter} increased to ${linuxCounter + 1}`)
    linuxCounter++
    response.send(linuxCounter.toString())
})

//These methods will fire when users leave the pages.
app.post("/google", () => {
    console.log(`Google counter ${googleCounter} decreased to ${googleCounter - 1}`)
    googleCounter--})
app.post("/discord", () =>{
    console.log(`Discord counter ${discordCounter} decreased to ${discordCounter - 1}`)
    discordCounter--
})
app.post("/linux", () => {
    console.log(`Linux counter ${linuxCounter} decreased to ${linuxCounter - 1}`)
    linuxCounter--
})

app.listen(5000, () => console.log(`Server started on port 5000: ${googleCounter}, ${discordCounter}, ${linuxCounter}`))