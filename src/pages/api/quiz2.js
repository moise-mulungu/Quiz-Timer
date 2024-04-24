import axios from 'axios'

const handleRequest = async (req, res) => {
  const isEmpty = require('lodash/isEmpty')
  if (isEmpty(req.query)) {
    return res.status(400).send('Bad Request: No query parameters provided')
  }
  const { category } = req.query
  console.log('category:', { category })

  if (!category) {
    return res.status(400).send('Bad Request: category not specified')
  }

  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`

  try {
    const response = await axios.get(apiUrl)
    console.log('response:', { response })

    const data = response.data

    const transformedData = data.map((data) => {
      const {
        id: questionId,
        question,
        correct_answer: correctAnswer,
        answers: answerChoices,
      } = data
      return {
        questionId,
        question,
        correctAnswer,
        answerChoices,
      }
    })

    console.log('transformedData:', { transformedData })

    res.status(200).json(transformedData)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}

export default handleRequest
