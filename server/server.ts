import 'dotenv/config'
import { join } from 'node:path'
import express from 'express'
import path from 'path'

import page2 from './routes/whaiPiano'
import page3 from './routes/newParticipant'
import page4 from './routes/playground'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

// these routes have confusing names for someone walking into the codebase for the first time
// also: they all have the same prefix and so a `/api/v1/:id` route could break the other routes and would be hard to debug!
server.use('/api/v1', page2)
server.use('/api/v1', page3)
server.use('/api/v1', page4)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
  })
}

export default server
