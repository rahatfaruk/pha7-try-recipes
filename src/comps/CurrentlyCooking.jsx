export default function CurrentlyCooking({cookingList}) {
  const totalTime = cookingList.reduce((total, recipe) => total + (+recipe.preparing_time.slice(0,2)), 0)
  const totalCalory = cookingList.reduce((total, recipe) => total + (+recipe.calories.slice(0,3)), 0)

  return (
    <div>
      <div className='mb-8'>
        <h3 className='py-2 mb-4 rounded-lg bg-gray-200 text-center text-xl font-semibold'>Currently Cooking: {cookingList.length}</h3>

        <table className="w-full border-b text-sm text-gray-600">
          <thead>
            <tr className="text-black">
              <th className="text-center">#</th>
              <th className="px-2 pb-2 text-center">Name</th>
              <th className="px-2 pb-2 text-center">Time</th>
              <th className="px-2 pb-2 text-center">Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingList.map((recipe, index) => (
              <tr key={recipe.recipe_id}>
                <td className="px-2 py-2">{index+1}</td>
                <td className="px-2 py-2 text-center">{recipe.recipe_name}</td>
                <td className="px-2 py-2 text-center">{recipe.preparing_time}</td>
                <td className="px-2 py-2 text-center">{recipe.calories}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-green-100 text-black">
              <td></td>
              <td></td>
              <td className="px-2 py-2 text-center">Total time: {totalTime}min</td>
              <td className="px-2 py-2 text-center">Total calory: {totalCalory}</td>
            </tr>
          </tfoot>
        </table>

      </div>
    </div>
  )
}