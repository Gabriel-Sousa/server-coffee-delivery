const express = require('express');
const server = express()
const data = require('./db.json')

server.get('/', (req, res) => {
  return res.send(Object.values(data));
})

server.listen(3333, () => { console.log('Server running') })