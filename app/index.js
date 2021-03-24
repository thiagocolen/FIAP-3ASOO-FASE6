const express = require('express')
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send(
    '<br>' +
    '<h1>Wellcome to Ifooo API</h1>' +
    '<hr>' +
    '<br>' +
    '<ul>' +
    '<li><h3>try GET: restaurantes/getAll</h3></li>' + 
    '<li><h3>try POST: restaurantes/getAll</h3>' +
    '<p>example body: { lat: 1287, long: 3764, radius: 233 }</p>' +
    '</li>' +
    '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><small>don`t worry</small><br><br>'
  )
})

app.listen(port, () => {
  console.log(`Don't worry, Ifood API is listening at port:${port}`)
})

const restaurantesController = require('./controllers/restaurantes')

app.use('/restaurantes/', restaurantesController)