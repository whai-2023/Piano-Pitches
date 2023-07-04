import 'dotenv/config'
import { join } from 'node:path'
import express from 'express'
import path from 'path'

import whaiPiano from './routes/whaiPiano'
import newParticipant from './routes/newParticipant'
import playground from './routes/playground'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/whaiPiano', whaiPiano)
server.use('/api/v1/newParticipant', newParticipant)
server.use('/api/v1/playground', playground)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
  })
}

export default server
