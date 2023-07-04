import { describe, expect, it } from 'vitest'
import { beforeEach } from 'vitest'

import { ParticipantData } from '../../../models/Participant'
import connection from '../connection'
import { addParticipant } from '../newParticipant'

beforeEach(async () => {
  await connection.migrate.rollback()
  await connection.migrate.latest()
  await connection.seed.run()
})

describe('addParticipant', () => {
  it('should add a new participant to the database', async () => {
    const newParticipantInfo = {
      name: 'Dallin',
      question: 'Why?',
      key: 'C2',
      answer: 'Because',
      audioUrl: 'dallin.mp3',
      imageUrl: 'dallin.png',
    }

    const newParticpant = await addParticipant(
      newParticipantInfo as ParticipantData
    )
    expect(newParticpant).toMatchInlineSnapshot(`
      {
        "answer": "Because",
        "audioUrl": "dallin.mp3",
        "imageUrl": "dallin.png",
        "key": "C2",
        "name": "Dallin",
        "question": "Why?",
      }
    `)
  })
})
