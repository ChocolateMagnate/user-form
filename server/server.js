//This is a small backend that keeps track of how many people are on each page.
import express from 'express'

const app = express()
let googleCounter = 0, discordCounter = 0, linuxCounter = 0
app.get("/google", (request, response) => {
    googleCounter++
    response.send(googleCounter)
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