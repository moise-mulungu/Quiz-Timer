import axios from 'axios'
import isEmpty from 'lodash/isEmpty'

const handler = async (req, res) => {
  if (isEmpty(req.query)) {
  }
  const { category } = req.query
  console.log('category:', { category })

  if (!category) {
    return res.status(400).send('Bad Request: category not specified')
  }

  if (category.toLowerCase() === 'html') {
    const data = await import('@/server/html-data')
    return res.status(200).json(data.default)
  }
  if (category.toLowerCase() === 'javascript') {
    const data = await import('@/server/js-data')
    return res.status(200).json(data.default)
  }
  if (category.toLowerCase() === 'css') {
    const data = await import('@/server/css-data')
    return res.status(200).json(data.default)
  }

  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`

  try {
    const response = await axios.get(apiUrl)
    console.log('response:', { response })

    const data = response.data

    const transformedData = data.map((questionObj) => {
      const {
        id: questionId,
        question,
        correct_answer: correctAnswerKey,
        answers: answersLookup,
      } = questionObj

      const correctAnswer = answersLookup[correctAnswerKey]
      console.log({ correctAnswer })

      function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5)
      }

      const answerChoices = Object.values(answersLookup).filter((answer) => answer !== null)
      shuffleArray(answerChoices)
      console.log({ answerChoices })

      console.log('questionObject:', { questionId, question, correctAnswer, answersLookup })

      return {
        questionId,
        question,

        correctAnswer,
        answerChoices,
      }
    })

    res.status(200).json(transformedData)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}

export default handler
