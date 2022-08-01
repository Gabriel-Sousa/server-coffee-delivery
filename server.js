const express = require('express');
const server = express()

const data = require('./db.json')

server.get('/coffee', (req, res) => {
  return res.json(data);
})

server.listen(3333, () => { console.log('Server running') })