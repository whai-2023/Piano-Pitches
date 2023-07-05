import connection from '../connection'
import * as db from '../question'
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

describe('getQuestions', () => {
  it('should return a list of questions', async () => {
    const question = await db.getQuestions()
    expect(question).toMatchInlineSnapshot(`
      [
        {
          "answer": "",
          "id": 1,
          "participantsId": null,
          "question": "If you could be any fictional character for a day, who would you choose and why?",
        },
        {
          "answer": "",
          "id": 2,
          "participantsId": null,
          "question": "What is the strangest thing you've ever eaten?",
        },
        {
          "answer": "",
          "id": 3,
          "participantsId": null,
          "question": "If animals could talk, which one would be the rudest?",
        },
        {
          "answer": "",
          "id": 4,
          "participantsId": null,
          "question": "If you were a vegetable, what vegetable would you be and how would you spend your day?",
        },
        {
          "answer": "",
          "id": 5,
          "participantsId": null,
          "question": "What is the weirdest dream you've ever had?",
        },
        {
          "answer": "",
          "id": 6,
          "participantsId": null,
          "question": "If you were a superhero, what would your superpower be, and what would your costume look like?",
        },
        {
          "answer": "",
          "id": 7,
          "participantsId": null,
          "question": "Whats the most hilarious joke you've ever heard?",
        },
        {
          "answer": "",
          "id": 8,
          "participantsId": null,
          "question": "If you could switch lives with any celebrity for a week, who would it be and what would you do?",
        },
        {
          "answer": "",
          "id": 9,
          "participantsId": null,
          "question": "If you were a flavor of ice cream, what would you be and why?",
        },
        {
          "answer": "",
          "id": 10,
          "participantsId": null,
          "question": "What would be your theme song if you walked into a room?",
        },
      ]
    `)
  })
})
