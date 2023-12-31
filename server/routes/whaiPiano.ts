import express from 'express'
import { getParticipantByKey, getParticipants } from '../db/participant'
const router = express.Router()

//server = /api/v1/whaiPiano

router.get('/', async (req, res) => {
  try {
    const participants = await getParticipants()
    res.json({ participants })
  } catch (error) {
    console.error('Error fetching participant by key:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get('/:key', async (req, res) => {
  try {
    const key = req.params.key
    const participant = await getParticipantByKey(key)
    console.log(`Fetched participant by key (${key}):`, participant)
    res.json({ participant })
  } catch (error) {
    console.error('Error fetching participant by key:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
