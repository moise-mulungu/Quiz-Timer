export default function QuizScore({ score, totalQuestions, handleRestartQuiz, handleExitGame }) {
  const scoreResult = `${score}/${totalQuestions}`
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 bg-blue-100 rounded-lg shadow-md">
        <div className="text-2xl font-bold mb-4">You Scored:</div>
        <div className="text-xl">
          <div className="flex items-center justify-center">
            <span className="font-bold text-blue-500 text-2xl">{scoreResult}</span>
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={handleRestartQuiz}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Restart Quiz
          </button>
          <button
            onClick={handleExitGame}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 ml-4"
          >
            Exit Game
          </button>
        </div>
      </div>
    </div>
  )
}
