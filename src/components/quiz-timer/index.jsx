import React, { useState, useEffect } from 'react'

import StartQuizButton from './start-quiz-button'
import RulesOfTheQuiz from './rules-of-the-quiz'
import QuestionBox from './question-box'
import CategorySelector from './category-selector'
import Header from './header'
import BounceLoader from 'react-spinners/BounceLoader'

export default function QuizTimer() {
  const [showRules, setShowRules] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizData, setQuizData] = useState(null)
  const [error, setError] = useState(null)

  const [selectedCategory, setSelectedCategory] = useState('html')

  const loading = !quizData && !error

  useEffect(() => {
    const apiUrl = `/api/quiz3?category=${selectedCategory}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('data:', data)
        setQuizData(data)
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error)
        setError(error)
      })
  }, [selectedCategory])

  const handleStartQuizClick = () => {
    setShowRules(true)
  }

  const handleExitShowRulesClick = () => {
    setShowRules(false)
  }

  const handleContinueFromRulesClick = () => {
    setShowQuiz(true)
    setShowRules(false)
  }

  const handleExitGame = () => {
    setShowRules(false)

    setShowQuiz(false)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BounceLoader color="#0000ff" />
      </div>
    )
  }

  if (error) {
    return <div>Error fetching quiz data: {error.message}</div>
  }

  return (
    <div className="bg-blue-500 h-screen flex flex-col justify-center items-center">
      <Header />

      {!showRules && !showQuiz && (
        <div className="flex flex-col items-center justify-center w-full">
          <CategorySelector
            setSelectedCategory={setSelectedCategory}
            handleCategorySelect={handleCategorySelect}
          />
          <div className="mt-4">
            <StartQuizButton handleStartQuizClick={handleStartQuizClick} />
          </div>
        </div>
      )}
      {showQuiz && <QuestionBox handleExitGame={handleExitGame} quizData={quizData} />}
      {showRules && (
        <div className="popup bg-blue-500">
          <RulesOfTheQuiz
            handleContinueFromRulesClick={handleContinueFromRulesClick}
            handleExitShowRulesClick={handleExitShowRulesClick}
          />
        </div>
      )}
    </div>
  )
}
