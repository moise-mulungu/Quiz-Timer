const jsData = [
  {
    questionId: 1,
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    correctAnswer: '<script src="xxx.js">',
    answerChoices: ['<script src="xxx.js">', '<script name="xxx.js">', '<script href="xxx.js">'],
  },

  {
    questionId: 2,
    question: 'How do you write "Hello World" in an alert box?',
    correctAnswer: 'alert("Hello World");',
    answerChoices: [
      'alert("Hello World");',
      'msgBox("Hello World");',
      'msg("Hello World");',
      'alertBox("Hello World");',
    ],
  },

  {
    questionId: 3,
    question: 'How do you create a function in JavaScript?',
    correctAnswer: 'function myFunction()',
    answerChoices: ['function myFunction()', 'function:myFunction()', 'function = myFunction()'],
  },

  {
    questionId: 4,
    question: 'How do you call a function named "myFunction"?',
    correctAnswer: 'myFunction()',
    answerChoices: ['call function myFunction()', 'call myFunction()', 'myFunction()'],
  },

  {
    questionId: 5,
    question: 'How to write an IF statement in JavaScript?',
    correctAnswer: 'if (i == 5)',
    answerChoices: ['if i == 5 then', 'if i = 5', 'if i = 5 then', 'if (i == 5)'],
  },

  {
    questionId: 6,
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    correctAnswer: 'if (i != 5)',
    answerChoices: ['if i =! 5 then', 'if (i <> 5)', 'if (i != 5)', 'if i <> 5'],
  },

  {
    questionId: 7,
    question: 'How does a WHILE loop start?',
    correctAnswer: 'while (i <= 10)',
    answerChoices: ['while (i <= 10)', 'while i = 1 to 10', 'while (i <= 10; i++)'],
  },

  {
    questionId: 8,
    question: 'How does a FOR loop start?',
    correctAnswer: 'for (i = 0; i <= 5; i++)',
    answerChoices: [
      'for (i <= 5; i++)',
      'for (i = 0; i <= 5)',
      'for i = 1 to 5',
      'for (i = 0; i <= 5; i++)',
    ],
  },

  {
    questionId: 9,
    question: 'How can you add a comment in a JavaScript?',
    correctAnswer: '//This is a comment',
    answerChoices: ['<!--This is a comment-->', '//This is a comment', 'This is a comment'],
  },

  {
    questionId: 10,
    question: 'How to insert a comment that has more than one line?',
    correctAnswer: '/*This comment has more than one line*/',
    answerChoices: [
      '//This comment has more than one line//',
      '<!--This comment has more than one line-->',
      '/*This comment has more than one line*/',
    ],
  },


]

export default jsData
