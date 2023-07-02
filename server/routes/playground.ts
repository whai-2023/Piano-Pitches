import express from 'express'
import { getNewParticipantByKey } from '../db/playground'
const router = express.Router()

//server = /api/v1

//PAGE 4 SERVER SIDE ROUTES FUNCTIONS HERE

// GET /api/v1/playground/:key
router.get('/playground/:key', async (req, res) => {
  try {
    const key = req.params.key
    const newParticipant = await getNewParticipantByKey(key)
    console.log(`Fetched new participant by key (${key}):`, newParticipant)
    res.json({ newParticipant })
  } catch (error) {
    console.error('Error fetching new participant by key:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
