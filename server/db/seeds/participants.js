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
      audioURL: '/audio/Dallin.mp3',
      question:
        'If you could be any fictional character for a day, who would you choose and why?',
      answer: 'Scooby Doo, because he was my childhood hero.',
    },
    {
      id: 2,
      name: 'Dillon',
      key: 'D2',
      audioURL: '/audio/Dillonn.mp3',
      question: "What is the strangest thing you've ever eaten?",
      answer:
        'Chicken feet was definitely a weird experience. It was tasty but looked so weird!',
    },
    {
      id: 3,
      name: 'Martin',
      key: 'E4',
      audioURL: '/audio/Martin.mp3',
      question: 'If animals could talk, which one would be the rudest?',
      answer:
        "Pigeons. Imagine a pigeon landing on a park bench and loudly expressing its unsolicited opinions about people's fashion choices or critiquing their picnic spread. With their 'coo-coo' attitude, these sassy pigeons would become the ultimate feathered fashion police.",
    },
    {
      id: 4,
      name: 'Min',
      key: 'F3',
      audioURL: '/audio/Min.mp3',
      question:
        'If you were a vegetable, what vegetable would you be and how would you spend your day?',
      answer:
        "Broccoli and I'd pretend to be a tree to make little kids eat me for their nutritional development. ",
    },
    {
      id: 5,
      name: 'Renee',
      key: 'F4',
      audioURL: '/audio/Renee.mp3',
      question: "What is the weirdest dream you've ever had?",
      answer: "All my dreams are weird! Don't make me choose just one",
    },
  ])
}

// for some reason my discord has gone awol lol
// turn it off and on again haha
