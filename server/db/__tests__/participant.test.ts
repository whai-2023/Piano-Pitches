import connection from '../connection'
import * as db from '../participant'
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
          "answer": "\\"Scooby Doo, because he was my childhood hero.\\"",
          "audioURL": "/audio/C2.mp3",
          "id": 1,
          "image": "/image/dallin.png",
          "key": "C2",
          "name": "Dallin",
          "question": "\\"If you could be any fictional character for a day, who would you choose and why?\\"",
        },
        {
          "answer": "\\"Chicken feet was definitely a weird experience. It was tasty but looked so weird!\\"",
          "audioURL": "/audio/D2.mp3",
          "id": 2,
          "image": "/image/dillon.png",
          "key": "D2",
          "name": "Dillon",
          "question": "What is the strangest thing you've ever eaten?",
        },
        {
          "answer": "\\"Pigeons. Imagine a pigeon landing on a park bench and loudly expressing its unsolicited opinions about people's fashion choices or critiquing their picnic spread with their 'coo-coo' attitude.\\"",
          "audioURL": "/audio/D3.mp3",
          "id": 3,
          "image": "/image/mc.png",
          "key": "D3",
          "name": "Martin",
          "question": "If animals could talk, which one would be the rudest?",
        },
        {
          "answer": "\\"A stream of unintelligible white-noise mixed with 'food, pats, sleep, put me down' and 'where my kitten.'\\"",
          "audioURL": "/audio/F3.mp3",
          "id": 4,
          "image": "/image/min.png",
          "key": "F3",
          "name": "Min",
          "question": "What’s one thing your pet could say that would completely ruin your image if they could talk?",
        },
        {
          "answer": "\\"All my dreams are weird! Don't make me choose just one.\\"",
          "audioURL": "/audio/E2.mp3",
          "id": 5,
          "image": "/image/renee.png",
          "key": "E2",
          "name": "Renee",
          "question": "What is the weirdest dream you've ever had?",
        },
        {
          "answer": "",
          "audioURL": "",
          "id": 6,
          "image": "",
          "key": "",
          "name": "",
          "question": "",
        },
        {
          "answer": "\\"I would like to be a vegetable that climbs, like a broad bean. Climbs right up to the sky and enjoys the sun all day and is happy.\\"",
          "audioURL": "/audio/F2.mp3",
          "id": 7,
          "image": "/image/siza.png",
          "key": "F2",
          "name": "Siza",
          "question": "What vegetable would you be and how would you spend your day?",
        },
        {
          "answer": "\\"The weirdest dream I can remember from when I was like 4 year's old, is me as an angel, hovering in the hallway looking down on my brother. And he was looking up at me and it was like 3rd person at some point.\\"",
          "audioURL": "/audio/G2.mp3",
          "id": 8,
          "image": "/image/jen.png",
          "key": "G2",
          "name": "Jen",
          "question": "What is the weirdest dream you've ever had?",
        },
        {
          "answer": "\\"My super power - telekinesis. Costume: Judge Judy. \\"",
          "audioURL": "/audio/A2.mp3",
          "id": 9,
          "image": "/image/jiho.png",
          "key": "A2",
          "name": "Jiho",
          "question": "What superpower would you have and what would your costume look like?",
        },
        {
          "answer": "\\"For the Kes-Ke-Say teacher led project, I had to edit a name and Aiden suggested Ben Dover. Krissy came in, read the name and just laughed...\\"",
          "audioURL": "/audio/B2.mp3",
          "id": 10,
          "image": "/image/scott.png",
          "key": "B2",
          "name": "Scott",
          "question": "What's the most hilarious joke you've ever heard?",
        },
        {
          "answer": "\\"Taylor Swift because she's amazing and she's making bank on her world tour rn.\\"",
          "audioURL": "/audio/C3.mp3",
          "id": 11,
          "image": "/image/denyce.png",
          "key": "C3",
          "name": "Denyce",
          "question": "Who would you switch lives with for a week and what would you do?",
        },
        {
          "answer": "\\"Thomas the Tank engine or Money for nothing by Dire Straits.\\"",
          "audioURL": "/audio/E3.mp3",
          "id": 12,
          "image": "/image/benw.png",
          "key": "E3",
          "name": "BenW",
          "question": "What would be your theme song if you walked into a room?",
        },
        {
          "answer": "\\"Glue or something like that or Ben H's hair.\\"",
          "audioURL": "/audio/G3.mp3",
          "id": 13,
          "image": "/image/teri.png",
          "key": "G3",
          "name": "Teri",
          "question": "What food do you love but would never admit to liking?",
        },
        {
          "answer": "\\"Shark.\\"",
          "audioURL": "/audio/A3.mp3",
          "id": 14,
          "image": "/image/benh.png",
          "key": "A3",
          "name": "BenH",
          "question": "What animal would you never want as a pet?",
        },
        {
          "answer": "\\"I think feeling hot on one side of your body and cold on the other would be the most inconvenient superpower.\\"",
          "audioURL": "/audio/B3.mp3",
          "id": 15,
          "image": "/image/david.png",
          "key": "B3",
          "name": "David",
          "question": "What superpower would be the most inconvenient?",
        },
        {
          "answer": "\\"\\"",
          "audioURL": "/audio/C4.mp3",
          "id": 16,
          "image": "/image/krissy.png",
          "key": "C4",
          "name": "Krissy",
          "question": "What celebrity would you never want to meet in real life?",
        },
        {
          "answer": "\\"An Oodie.\\"",
          "audioURL": "/audio/D4.mp3",
          "id": 17,
          "image": "/image/jatin.png",
          "key": "D4",
          "name": "Jatin",
          "question": "What's your favorite thing to wear that you would never want to wear to a job interview?",
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
        "answer": "\\"Scooby Doo, because he was my childhood hero.\\"",
        "audioURL": "/audio/C2.mp3",
        "id": 1,
        "image": "/image/dallin.png",
        "key": "C2",
        "name": "Dallin",
        "question": "\\"If you could be any fictional character for a day, who would you choose and why?\\"",
      }
    `)
  })
})
