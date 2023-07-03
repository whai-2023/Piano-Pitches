exports.seed = async function (knex) {
  await knex('participants').del()
  await knex('participants').insert([
    {
      id: 1,
      name: 'Dallin',
      key: 'C2',
      audioURL: '/audio/C2.mp3',
      question:
        '"If you could be any fictional character for a day, who would you choose and why?"',
      answer: '"Scooby Doo, because he was my childhood hero."',
      image: '/image/dallin.png',
    },
    {
      id: 2,
      name: 'Dillon',
      key: 'D2',
      audioURL: '/audio/D2.mp3',
      question: "What is the strangest thing you've ever eaten?",
      answer:
        '"Chicken feet was definitely a weird experience. It was tasty but looked so weird!"',
      image: '/image/dillon.png',
    },
    {
      id: 3,
      name: 'Martin',
      key: 'E4',
      audioURL: '/audio/E4.mp3',
      question: 'If animals could talk, which one would be the rudest?',
      answer:
        "\"Pigeons. Imagine a pigeon landing on a park bench and loudly expressing its unsolicited opinions about people's fashion choices or critiquing their picnic spread with their 'coo-coo' attitude.\"",
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
        "\"A stream of unintelligible white-noise mixed with 'food, pats, sleep, put me down' and 'where my kitten.'\"",
      image: '/image/min.png',
    },
    {
      id: 5,
      name: 'Renee',
      key: 'F4',
      audioURL: '/audio/F4.mp3',
      question: "What is the weirdest dream you've ever had?",
      answer: '"All my dreams are weird! Don\'t make me choose just one."',
      image: '/image/renee.png',
    },
    {
      // leave blank - for null purposes
      id: 6,
      name: '',
      key: '',
      audioURL: '',
      question: '',
      answer: '',
      image: '',
    },
    {
      id: 7,
      name: 'Dylan',
      key: 'E2',
      audioURL: '',
      question: 'Which animal would be the rudest if they could talk?',
      answer: '""',
      image: '/image/dylan.png',
    },
    {
      id: 8,
      name: 'Siza',
      key: 'F2',
      audioURL: '',
      question: 'What vegetable would you be and how would you spend your day?',
      answer:
        '"I would like to be a vegetable that climbs, like a broad bean. Climbs right up to the sky and enjoys the sun all day and is happy."',
      image: '/image/siza.png',
    },
    {
      id: 9,
      name: 'Jen',
      key: 'G2',
      audioURL: '/audio/G2.mp3',
      question: "What is the weirdest dream you've ever had?",
      answer:
        '"The weirdest dream I can remember from when I was like 4 year\'s old, is me as an angel, hovering in the hallway looking down on my brother. And he was looking up at me and it was like 3rd person at some point."',
      image: '/image/jen.png',
    },
    {
      id: 10,
      name: 'Jiho',
      key: 'A2',
      audioURL: '/audio/A2.mp3',
      question:
        'What superpower would you have and what would your costume look like?',
      answer: '"My super power - telekinesis. Costume: Judge Judy. "',
      image: '/image/jiho.png',
    },
    {
      id: 11,
      name: 'Scott',
      key: 'B2',
      audioURL: '/audio/B2.mp3',
      question: "What's the most hilarious joke you've ever heard?",
      answer:
        '"For the Kes-Ke-Say teacher led project, I had to edit a name and Aiden suggested Ben Dover. Krissy came in, read the name and just laughed..."',
      image: '/image/scott.png',
    },
    {
      id: 12,
      name: 'Denyce',
      key: 'C3',
      audioURL: '/audio/C3.mp3',
      question:
        'Who would you switch lives with for a week and what would you do?',
      answer:
        '"Taylor Swift because she\'s amazing and she\'s making bank on her world tour rn."',
      image: '/image/denyce.png',
    },
    {
      id: 13,
      name: 'Michael',
      key: 'D3',
      audioURL: '',
      question: 'What flavor of ice cream would you be and why?',
      answer: '""',
      image: '/image/michael.png',
    },
    {
      id: 14,
      name: 'BenW',
      key: 'E3',
      audioURL: '',
      question: 'What would be your theme song if you walked into a room?',
      answer: '"Thomas the Tank engine or Money for nothing by Dire Straits."',
      image: '/image/benw.png',
    },
    {
      id: 15,
      name: 'Teri',
      key: 'G3',
      audioURL: '/audio/G3.mp3',
      question: 'What food do you love but would never admit to liking?',
      answer: '"Glue or something like that or Ben H\'s hair."',
      image: '/image/teri.png',
    },
    {
      id: 16,
      name: 'BenH',
      key: 'A3',
      audioURL: '/audio/A3.mp3',
      question: 'What animal would you never want as a pet?',
      answer: '"Shark."',
      image: '/image/benh.png',
    },
    {
      id: 17,
      name: 'David',
      key: 'B3',
      audioURL: '/audio/B3.mp3',
      question: 'What superpower would be the most inconvenient?',
      answer:
        '"I think feeling hot on one side of your body and cold on the other would be the most inconvenient superpower."',
      image: '/image/david.png',
    },
    {
      id: 18,
      name: 'Krissy',
      key: 'C4',
      audioURL: '/audio/C4.mp3',
      question: 'What celebrity would you never want to meet in real life?',
      answer: '""',
      image: '/image/krissy.png',
    },
    {
      id: 19,
      name: 'Jatin',
      key: 'D4',
      audioURL: '/audio/D4.mp3',
      question:
        "What's your favorite thing to wear that you would never want to wear to a job interview?",
      answer: '"An Oodie."',
      image: '/image/jatin.png',
    },
  ])
}
