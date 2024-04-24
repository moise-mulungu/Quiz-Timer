// creating an array and passing the number, questions, options, and answers
const htmlData = [
  {
    questionId: 1,
    question: 'What does HTML stand for?',
    correctAnswer: 'Hyper Text Markup Language',
    answerChoices: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language',
    ],
  },
  {
    questionId: 2,
    question: 'What is the correct HTML for adding a background color?',
    correctAnswer: '<body style="background-color:yellow;">',
    answerChoices: [
      '<body bg="yellow">',
      '<body style="background-color:yellow;">',
      '<background>yellow</background>',
      '<body>yellow</body>',
    ],
  },
  {
    questionId: 3,
    question:
      'What the attribute that is used to define the relationship between a document and an external resource?',
    correctAnswer: 'rel',
    answerChoices: ['src', 'href', 'rel', 'link'],
  },
  {
    questionId: 4,
    question: 'Which HTML tag is used to define an internal style sheet?',
    correctAnswer: '<style>',
    answerChoices: ['<css>', '<script>', '<style>', '<link>'],
  },
  {
    questionId: 5,
    question: 'Which HTML attribute is used to specify that an input field must be filled out?',
    correctAnswer: 'required',
    answerChoices: ['validate', 'placeholder', 'required', 'formvalidate'],
  },
  {
    questionId: 6,
    question: 'Which HTML element is used to specify a footer for a document or section?',
    correctAnswer: '<footer>',
    answerChoices: ['<section>', '<bottom>', '<footer>', '<aside>'],
  },
  {
    questionId: 7,
    question: 'In HTML, which attribute is used to specify that an input field is read-only?',
    correctAnswer: 'readonly',
    answerChoices: ['disabled', 'read', 'readonly', 'lock'],
  },
  {
    questionId: 8,
    question: 'Which HTML element defines navigation links?',
    correctAnswer: '<nav>',
    answerChoices: ['<navigate>', '<nav>', '<navigation>', '<links>'],
  },
  {
    questionId: 9,
    question: 'Which HTML element is used to display a scalar measurement within a known range?',
    correctAnswer: '<meter>',
    answerChoices: ['<range>', '<measure>', '<meter>', '<gauge>'],
  },
  {
    questionId: 10,
    question: 'Which Tag is used if you want to indicate the importance of the phrase?',
    correctAnswer: '<strong>',
    answerChoices: ['<strong>', '<em>', '<h1>', '<h2>'],
  },
]

export default htmlData
