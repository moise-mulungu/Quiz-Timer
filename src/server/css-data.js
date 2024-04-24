// css questions

const cssData = [
  {
    questionId: 1,
    question: 'What does CSS stand for?',
    correctAnswer: 'Cascading Style Sheets',
    answerChoices: [
      'Cascading Style Sheets',
      'Colorful Style Sheets',
      'Creative Style Sheets',
      'Computer Style Sheets',
    ],
  },
  {
    questionId: 2,
    question: 'Which HTML attribute is used to define inline styles?',
    correctAnswer: 'style',
    answerChoices: ['font', 'class', 'style', 'styles'],
  },
  {
    questionId: 3,
    question: 'How do you insert a comment in a CSS file?',
    correctAnswer: '/* this is a comment */',
    answerChoices: [
      '/* this is a comment */',
      '// this is a comment',
      '<!-- this is a comment -->',
      '# this is a comment',
    ],
  },
  {
    questionId: 4,
    question: 'Which CSS property controls the text size?',
    correctAnswer: 'font-size',
    answerChoices: ['text-size', 'font-size', 'text-style', 'font-style'],
  },
  {
    questionId: 5,
    question: 'What is the correct CSS syntax?',
    correctAnswer: 'body {color: black;}',
    answerChoices: [
      '{body;color:black;}',
      '{body:color=black;}',
      'body:color=black;',
      'body {color: black;}',
    ],
  },
  {
    questionId: 6,
    question: 'How do you make each word in a text start with a capital letter?',
    correctAnswer: 'text-transform:capitalize',
    answerChoices: [
      'text-transform:capitalize',
      'text-transform:uppercase',
      'text-transform:lowercase',
      "You can't do that with CSS",
    ],
  },
  {
    questionId: 7,
    question: 'How do you select an element with id "demo"?',
    correctAnswer: '#demo',
    answerChoices: ['.demo', 'demo', '#demo', '*demo'],
  },
  {
    questionId: 8,
    question: 'What does the CSS property "display: none" do?',
    correctAnswer: 'It hides the element.',
    answerChoices: [
      'It hides the element.',
      'It shows the element.',
      'It minimizes the element.',
      'It maximizes the element.',
    ],
  },
  {
    questionId: 9,
    question: 'How do you select elements with class name "test"?',
    correctAnswer: '.test',
    answerChoices: ['.test', 'test', '#test', '*test'],
  },
  {
    questionId: 10,
    question: 'What is the default value of the position property?',
    correctAnswer: 'static',
    answerChoices: ['absolute', 'fixed', 'relative', 'static'],
  },
]

export default cssData
