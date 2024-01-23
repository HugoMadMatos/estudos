const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bibi', (req, res) => {
  const numero_1 = 1
  const numero_2 = 2
  res.send(`O valor é igual a: ${numero_1+numero_2}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})