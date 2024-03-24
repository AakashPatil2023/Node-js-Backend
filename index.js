require('dotenv').config()
const express = require('express')
const app = express();


app.get('/', (req,res) => {
    res.send("<h1>Home Page</h1>")
})

app.get('/twitter', (req, res) => {
    res.send("akashpatil14@twitter.com")
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login in to the application... </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1> Chai Or code... </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
})
