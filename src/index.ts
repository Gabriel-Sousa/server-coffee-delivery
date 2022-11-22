import express from 'express'
import data from '../db.json'

const app = express()
const port = process.env.PORT || 3333

app.get('/coffee', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(data)
})
console.log('legal')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
