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
      audioURL: '/audio/C2.mp3',
      question:
        'If you could be any fictional character for a day, who would you choose and why?',
      answer: 'Scooby Doo, because he was my childhood hero.',
      image: '/image/dallin.png',
    },
    {
      id: 2,
      name: 'Dillon',
      key: 'D2',
      audioURL: '/audio/D2.mp3',
      question: "What is the strangest thing you've ever eaten?",
      answer:
        'Chicken feet was definitely a weird experience. It was tasty but looked so weird!',
      image: '/image/dillon.png',
    },
    {
      id: 3,
      name: 'Martin',
      key: 'E4',
      audioURL: '/audio/E4.mp3',
      question: 'If animals could talk, which one would be the rudest?',
      answer:
        "Pigeons. Imagine a pigeon landing on a park bench and loudly expressing its unsolicited opinions about people's fashion choices or critiquing their picnic spread with their 'coo-coo' attitude.",
      image: '/image/mc.jpg',
    },
    {
      id: 4,
      name: 'Min',
      key: 'F3',
      audioURL: '/audio/F3.mp3',
      question:
        'What’s one thing your pet could say that would completely ruin your image if they could talk?',
      answer:
        "A stream of unintelligible white-noise mixed with 'food, pats, sleep, put me down' and 'where my kitten' ",
      image: '/image/min.png',
    },
    {
      id: 5,
      name: 'Renee',
      key: 'F4',
      audioURL: '/audio/F4.mp3',
      question: "What is the weirdest dream you've ever had?",
      answer: "All my dreams are weird! Don't make me choose just one",
      image: '/image/renee.png',
    },
    {
      id: 6,
      name: '',
      key: '',
      audioURL: '',
      question: '',
      answer: '',
      image: '',
    },
  ])
}

// for some reason my discord has gone awol lol
// turn it off and on again haha
