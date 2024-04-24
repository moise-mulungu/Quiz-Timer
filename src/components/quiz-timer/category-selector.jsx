const CategorySelector = ({
  handleCategorySelect,

  categories = ['HTML', 'JavaScript', 'CSS', 'SQL', 'Linux', 'Bash', 'Code'],
}) => {
  const handleCategoryChange = (event) => {
    handleCategorySelect(event.target.value)
  }

  return (
    <div className="w-full max-w-xs mx-auto mt-4">
      <select
        onChange={handleCategoryChange}
        className="block w-full bg-white border border-gray-300 focus:border-indigo-500 text-2xl leading-6 shadow-sm py-2 pl-3 pr-10 rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm sm:leading-5"
      >
        <option value="">Select a category</option>

        {categories.map((category) => (
          <option
            key={category}
            value={category.toLowerCase()}
            className="bg-white text-gray-900 font-bold py-4 px-6 rounded"
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategorySelector
