/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('participants').del()
  await knex('participants').insert([
    {
      id: 1,
      name: 'Dallin',
      key: 'C2',
      audioURL: 'dallin.mp3',
      question:
        'If you could be any fictional character for a day, who would you choose and why?',
      answer: 'Scooby Doo, because he was my childhood hero.',
    },
    {
      id: 2,
      name: 'Dillon',
      key: 'D2',
      audioURL: 'dillon.mp3',
      question: "What is the strangest thing you've ever eaten?",
      answer:
        'Chicken feet was definitely a weird experience. It was tasty but looked so weird!',
    },
    {
      id: 3,
      name: 'Martin',
      key: 'E4',
      audioURL: 'martin.mp3',
      question: 'If animals could talk, which one would be the rudest?',
      answer: 'Cat',
    },
    {
      id: 4,
      name: 'Min',
      key: 'F3',
      audioURL: 'min.mp3',
      question:
        'What’s one thing your pet could say that would completely ruin your image if they could talk?',
      answer:
        "A stream of unintelligible white-noise mixed with 'food, pats, sleep, put me down' and 'where my kitten' ",
    },
    {
      id: 5,
      name: 'Renee',
      key: 'F4',
      audioURL: 'renee.mp3',
      question: 'What would you do if you could live forever?',
      answer:
        'Live in all the countries of the world, learn all the languages, and eat all the food!',
    },
  ])
}

// for some reason my discord has gone awol lol
// turn it off and on again haha
