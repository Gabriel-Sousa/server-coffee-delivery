import express from 'express'
import data from '../db.json'

const app = express()
const port = 3333

app.get('/coffee', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(data)
})

app.listen(port, () => {
  console.log(`Running at port:${port}`)
})
