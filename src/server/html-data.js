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
    explanation:
      'HTML stands for Hyper Text Markup Language, which is used to create the structure and content of web pages.',
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
    explanation:
      'To add a background color in HTML, you can use the style attribute within the body tag. For example: <body style="background-color: yellow;">',
  },
  {
    questionId: 3,
    question:
      'What the attribute that is used to define the relationship between a document and an external resource?',
    correctAnswer: 'rel',
    answerChoices: ['src', 'href', 'rel', 'link'],
    explanation:
      'The "rel" attribute is used to define the relationship between a document and an external resource, such as a stylesheet or icon. It specifies the relationship between the current document and the linked resource.',
  },
  {
    questionId: 4,
    question: 'Which HTML tag is used to define an internal style sheet?',
    correctAnswer: '<style>',
    answerChoices: ['<css>', '<script>', '<style>', '<link>'],
    explanation:
      'The <style> tag is used to define an internal style sheet within an HTML document. It allows you to specify CSS styles that apply only to the current document.',
  },
  {
    questionId: 5,
    question: 'Which HTML attribute is used to specify that an input field must be filled out?',
    correctAnswer: 'required',
    answerChoices: ['validate', 'placeholder', 'required', 'formvalidate'],
    explanation:
      'The "required" attribute is used to specify that an input field must be filled out before submitting the form. When this attribute is present, the user must enter a value in the input field to proceed.',
  },
  {
    questionId: 6,
    question: 'Which HTML element is used to specify a footer for a document or section?',
    correctAnswer: '<footer>',
    answerChoices: ['<section>', '<bottom>', '<footer>', '<aside>'],
    explanation:
      'The <footer> element is used to specify a footer for a document or section. It typically contains information about the author, copyright, contact information, or links to related documents.',
  },
  {
    questionId: 7,
    question: 'In HTML, which attribute is used to specify that an input field is read-only?',
    correctAnswer: 'readonly',
    answerChoices: ['disabled', 'read', 'readonly', 'lock'],
    explanation:
      'The "readonly" attribute is used to specify that an input field is read-only, meaning that the user cannot modify its value. The input field can still receive focus and submit its value with the form.',
  },
  {
    questionId: 8,
    question: 'Which HTML element defines navigation links?',
    correctAnswer: '<nav>',
    answerChoices: ['<navigate>', '<nav>', '<navigation>', '<links>'],
    explanation:
      'The <nav> element is used to define navigation links in HTML. It typically contains a list of links to other pages or sections within the website, allowing users to navigate between different pages or sections.',
  },
  {
    questionId: 9,
    question: 'Which HTML element is used to display a scalar measurement within a known range?',
    correctAnswer: '<meter>',
    answerChoices: ['<range>', '<measure>', '<meter>', '<gauge>'],
    explanation:
      'The <meter> element is used to display a scalar measurement within a known range in HTML. It represents a gauge that indicates a value within a specified range, such as the progress of a download or the strength of a password.',
  },
  {
    questionId: 10,
    question: 'Which Tag is used if you want to indicate the importance of the phrase?',
    correctAnswer: '<strong>',
    answerChoices: ['<strong>', '<em>', '<h1>', '<h2>'],
    explanation:
      'The <strong> tag is used to indicate the importance of the enclosed text or phrase in HTML. It typically renders the text in a bold font to emphasize its significance to the reader.',
  },
]

export default htmlData
