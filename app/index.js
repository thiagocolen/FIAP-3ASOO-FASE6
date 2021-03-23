const express = require('express')
const app = express()
const port = 8080

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Ifooo API')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const restaurantesController = require('./controllers/restaurantes')

app.use('/restaurantes/', restaurantesController)
