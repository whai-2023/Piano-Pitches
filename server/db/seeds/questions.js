exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('questions')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('questions').insert([
        {
          id: 1,
          question:
            'If you could be any fictional character for a day, who would you choose and why?',
          answer: '',
        },
        {
          id: 2,
          question: "What is the strangest thing you've ever eaten?",
          answer: '',
        },
        {
          id: 3,
          question: 'If animals could talk, which one would be the rudest?',
          answer: '',
        },
        {
          id: 4,
          question:
            'If you were a vegetable, what vegetable would you be and how would you spend your day?',
          answer: '',
        },
        {
          id: 5,
          question: "What is the weirdest dream you've ever had?",
          answer: '',
        },
        {
          id: 6,
          question:
            'If you were a superhero, what would your superpower be, and what would your costume look like?',
          answer: '',
        },
        {
          id: 7,
          question: "Whats the most hilarious joke you've ever heard?",
          answer: '',
        },
        {
          id: 8,
          question:
            'If you could switch lives with any celebrity for a week, who would it be and what would you do?',
          answer: '',
        },
        {
          id: 9,
          question:
            'If you were a flavor of ice cream, what would you be and why?',
          answer: '',
        },
        {
          id: 10,
          question: 'What would be your theme song if you walked into a room?',
          answer: '',
        },
      ])
    })
}
