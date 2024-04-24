export default function RulesOfTheQuiz({ handleExitShowRulesClick, handleContinueFromRulesClick }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="modal-overlay">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="text-lg font-bold mb-4">Some Rules of this Quiz</div>
          <div className="text-sm mb-4">
            <div className="mb-2">
              1. You will have only <span className="font-bold">15 seconds</span> per each question.
            </div>
            <div className="mb-2">2. Once you select your answer, it can not be undone.</div>
            <div className="mb-2">3. You can not select any option once time goes off.</div>
            <div className="mb-2">4. You can not exit from the Quiz while you are playing.</div>
            <div className="mb-2">5. You will get points on the basis of your correct answers.</div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded mr-2"
              onClick={handleExitShowRulesClick}
            >
              Exit Quiz
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={handleContinueFromRulesClick}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
