import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import QuizScore from './quiz-score'

const defaultSecondsToAnswerQuestion = 15

export default function QuestionBox({ handleExitGame, quizData }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [showScorePopup, setShowScorePopup] = useState(false)
  const [timerKey, setTimerKey] = useState(0)
  const [explanation, setExplanation] = useState(null)

  useEffect(() => {
    setTimerKey((prevKey) => prevKey + 1) // Reset key to restart CountdownCircleTimer
  }, [currentQuestionIndex])

  const handleAnswerSelection = (event) => {
    const selectedAnswer = event.target.value
    setSelectedAnswer(selectedAnswer)

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1)
    } else {
      // Retrieve explanation for the current question
      const currentQuestion = quizData[currentQuestionIndex]
      const { explanation } = currentQuestion

      // Display the explanation
      setShowCorrectAnswer(true)
      setExplanation(explanation) // Add state for explanation
    }
  }

  const handleGotoNextQuestion = () => {
    const hasMoreQuestions = currentQuestionIndex < quizData.length - 1

    if (hasMoreQuestions) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      setSelectedAnswer(null)
      setShowCorrectAnswer(false)
    } else {
      setShowScorePopup(true)
    }
  }

  const handleGotoPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
      setSelectedAnswer(null)
      setShowCorrectAnswer(false)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowCorrectAnswer(false)
    setScore(0)
    setShowScorePopup(false)
    setTimerKey((prevKey) => prevKey + 1) // Reset key to restart CountdownCircleTimer
  }

  const { question, correctAnswer, answerChoices } = quizData[currentQuestionIndex]

  return (
    <>
      {!showScorePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md flex flex-col w-full max-w-[100vh] max-h-[80vh] overflow-auto">
            <>
              {/* Add progress bar here */}
              <div className="relative h-2 mb-4">
                <div
                  className="absolute left-0 top-0 h-2 bg-green-500"
                  style={{ width: `${(currentQuestionIndex / quizData.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-bold text-blue-600">{question}</div>
                <div className="text-lg font-bold text-center whitespace-nowrap px-2 py-1 rounded w-62">
                  <CountdownCircleTimer
                    key={timerKey} // Key to force reset the timer
                    isPlaying={!selectedAnswer && !showCorrectAnswer}
                    duration={defaultSecondsToAnswerQuestion}
                    colors={[
                      [
                        ({ remainingTime }) =>
                          remainingTime > 10
                            ? '#004777'
                            : remainingTime > 5
                            ? '#F7B801'
                            : '#A30000',
                        0.33,
                      ],
                      [
                        ({ remainingTime }) =>
                          remainingTime > 10
                            ? '#004777'
                            : remainingTime > 5
                            ? '#F7B801'
                            : '#A30000',
                        0.33,
                      ],
                      [
                        ({ remainingTime }) =>
                          remainingTime > 10
                            ? '#004777'
                            : remainingTime > 5
                            ? '#F7B801'
                            : '#A30000',
                        0.33,
                      ],
                    ]}
                    onComplete={() => {
                      setShowCorrectAnswer(true)
                      return [true, 0]
                    }}
                    size={40} // Reduce the size of the timer
                    strokeWidth={6} // Adjust the thickness of the timer circle
                    className="mt-4" // Add margin-top
                  >
                    {({ remainingTime }) => (
                      <div
                        className={`${
                          remainingTime > 10
                            ? 'text-green-500'
                            : remainingTime > 5
                            ? 'text-orange-500'
                            : 'text-red-500'
                        }`}
                      >
                        {remainingTime}
                      </div>
                    )}
                  </CountdownCircleTimer>
                </div>
              </div>
              <hr className="my-4" />

              <div className="text-base mb-4">
                {answerChoices.map((answerChoice) => {
                  const isCorrect = answerChoice === correctAnswer
                  const isSelected = answerChoice === selectedAnswer
                  return (
                    <div
                      key={answerChoice}
                      className={`flex items-center mb-2 border-2 rounded-lg shadow-sm p-2 hover:bg-blue-100 transition-colors duration-200 ease-in-out ${
                        isSelected
                          ? isCorrect
                            ? 'border-green-500 text-green-500'
                            : 'border-red-500 text-red-500'
                          : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      <input
                        type="radio"
                        id={answerChoice}
                        name="answerChoice"
                        value={answerChoice}
                        className="mr-2"
                        onChange={handleAnswerSelection}
                        checked={isSelected}
                      />
                      <label htmlFor={answerChoice} className="ml-2">
                        {answerChoice}
                      </label>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-between">
                <div>
                  {currentQuestionIndex > 0 ? (
                    <button
                      onClick={handleGotoPreviousQuestion}
                      className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
                    >
                      Previous
                    </button>
                  ) : null}
                </div>

                {showCorrectAnswer && selectedAnswer !== correctAnswer && (
                  <>
                    <p className="text-green-500">Correct Answer: {correctAnswer}</p>
                    {/* <p className="text-blue-500">Explanation: {explanation}</p> */}
                  </>
                )}
                <button
                  onClick={handleGotoNextQuestion}
                  className="bg-blue-500 text-white rounded px-4 py-2"
                >
                  Next
                </button>
              </div>
            </>
          </div>
        </div>
      )}

      {showScorePopup ? (
        <div className="fixed top-0 left-0 w-full flex items-center justify-center">
          <div className="modal-overlay">
            <QuizScore
              score={score}
              totalQuestions={quizData.length}
              handleRestartQuiz={handleRestartQuiz}
              handleExitGame={handleExitGame}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
