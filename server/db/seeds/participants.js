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
      audioURL: '',
      question:
        'If you could be any fictional character for a day, who would you choose and why?',
      answer: 'Scooby Doo, because he was my childhood hero.',
    },
    {
      id: 2,
      name: 'Dillon',
      audioURL: '',
      question: "What is the strangest thing you've ever eaten?",
      answer:
        'Chicken feet was definitely a weird experience. It was tasty but looked so weird!',
    },
    {
      id: 3,
      name: 'Martin',
      audioURL: '/audio/martin.m4a',
      question: 'If animals could talk, which one would be the rudest?',
      answer: 'Cat',
    },
    {
      id: 4,
      name: 'Min',
      audioURL: '',
      question:
        'If you were a vegetable, what vegetable would you be and how would you spend your day?',
      answer:
        "Broccoli and I'd pretend to be a tree to make little kids eat me for their nutritional development. ",
    },
    {
      id: 5,
      name: 'Renee',
      audioURL: '/audio/renee.m4a',
      question: "What is the weirdest dream you've ever had?",
      answer: "All my dreams are weird! Don't make me choose just one",
    },
  ])
}
