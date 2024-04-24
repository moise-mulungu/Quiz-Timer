import axios from 'axios'

import data from '@/features/quiz-app-with-timer/server/html-data'

const handler = async (req, res) => {
  return res.status(200).json(data)

  const { category } = req.query

  if (!category) {
    return res.status(400).send('Bad Request: category not specified')
  }
  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`
  console.log('api-url:', { apiUrl })

  try {
    const response = await axios.get(apiUrl)

    const data = response.data
    console.log('data:', { data })

    res.status(200).json(data)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}
export default handler
