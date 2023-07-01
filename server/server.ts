import { join } from 'node:path'
import express from 'express'
import path from 'path'

import page2 from './routes/page2'
import page3 from './routes/question'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1', page2)
server.use('/api/v1', page3)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
  })
}

export default server
