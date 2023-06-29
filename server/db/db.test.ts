import connection from './connection'
import * as db from './participant'
import { beforeAll, beforeEach, afterAll, describe, it, expect } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(() => {
  return connection.destroy()
})

describe('getParticipants', () => {
  it('should return a list of participants', async () => {
    const participant = await db.getParticipants()
    expect(participant).toMatchInlineSnapshot(`
      [
        {
          "answer": "Scooby Doo, because he was my childhood hero.",
          "audioURL": "dallin.mp3",
          "id": 1,
          "key": "C2",
          "name": "Dallin",
          "question": "If you could be any fictional character for a day, who would you choose and why?",
        },
        {
          "answer": "Chicken feet was definitely a weird experience. It was tasty but looked so weird!",
          "audioURL": "dillon.mp3",
          "id": 2,
          "key": "D2",
          "name": "Dillon",
          "question": "What is the strangest thing you've ever eaten?",
        },
        {
          "answer": "Cat",
          "audioURL": "martin.mp3",
          "id": 3,
          "key": "E4",
          "name": "Martin",
          "question": "If animals could talk, which one would be the rudest?",
        },
        {
          "answer": "A stream of unintelligible white-noise mixed with 'food, pats, sleep, put me down' and 'where my kitten' ",
          "audioURL": "min.mp3",
          "id": 4,
          "key": "F3",
          "name": "Min",
          "question": "What’s one thing your pet could say that would completely ruin your image if they could talk?",
        },
        {
          "answer": "Live in all the countries of the world, learn all the languages, and eat all the food!",
          "audioURL": "renee.mp3",
          "id": 5,
          "key": "F4",
          "name": "Renee",
          "question": "What would you do if you could live forever?",
        },
      ]
    `)
  })
})
describe('getParticipantsById', () => {
  it('should return a list of participants', async () => {
    const id = 1
    const participant = await db.getParticipantById(id)
    expect(participant).toMatchInlineSnapshot(`
      {
        "answer": "Scooby Doo, because he was my childhood hero.",
        "audioURL": "dallin.mp3",
        "id": 1,
        "key": "C2",
        "name": "Dallin",
        "question": "If you could be any fictional character for a day, who would you choose and why?",
      }
    `)
  })
})
