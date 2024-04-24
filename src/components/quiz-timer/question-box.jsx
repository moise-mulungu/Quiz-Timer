import { useState, useEffect } from 'react'

import QuizScore from './quiz-score'
const defaultSecondsToAnswerQuestion = 15

export default function QuestionBox({ handleExitGame, quizData }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timer, setTimer] = useState(defaultSecondsToAnswerQuestion)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [showScorePopup, setShowScorePopup] = useState(false)

  useEffect(() => {
    setTimer(defaultSecondsToAnswerQuestion)
  }, [currentQuestionIndex])

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1 || selectedAnswer) {
          clearInterval(countdown)
          setShowCorrectAnswer(true)
          return defaultSecondsToAnswerQuestion // Reset timer
        } else {
          return prevTimer - 1
        }
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [currentQuestionIndex, selectedAnswer])

  const handleAnswerSelection = (event) => {
    setSelectedAnswer(event.target.value)
    if (event.target.value === correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleGotoNextQuestion = () => {
    const hasMoreQuestions = currentQuestionIndex < quizData.length - 1

    if (hasMoreQuestions) {
      const nextQuestionIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(nextQuestionIndex)
      setSelectedAnswer(null)
      setShowCorrectAnswer(false)
    } else {
      setShowScorePopup(true)
    }
  }

  const handleGotoPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(null)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowCorrectAnswer(false)
    setScore(0)
    setShowScorePopup(false)
    setTimer(defaultSecondsToAnswerQuestion)
  }

  const { question, correctAnswer, answerChoices } = quizData[currentQuestionIndex]

  return (
    <>
      {!showScorePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md flex flex-col w-full max-w-[100vh] max-h-[80vh] overflow-auto">
            <>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">{question}</div>
                <div
                  className={`
                    text-lg font-bold text-center whitespace-nowrap
                    px-2 py-1 
                    rounded 
                    w-62 
                    ${
                      timer > 10 ? 'text-green-500' : timer > 5 ? 'text-orange-500' : 'text-red-500'
                    }
                  `}
                >
                  {timer === defaultSecondsToAnswerQuestion ? null : (
                    <span>
                      {' '}
                      Time remaining:{' '}
                      <span className="font-mono inline-block w-6 text-right">
                        {String(timer).padStart(2, ' ')}
                      </span>{' '}
                      seconds
                    </span>
                  )}
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
                      {showCorrectAnswer && isCorrect ? (
                        <svg
                          className="h-6 w-6 text-green-500 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : null}
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
                  <p className="text-green-500">Answer: {correctAnswer}</p>
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
