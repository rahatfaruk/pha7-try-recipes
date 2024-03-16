export default function WantToCook({wantToCook}) {
  return (
    <div>
      <div className='mb-8'>
        <h3 className='py-2 mb-4 rounded-lg bg-gray-200 text-center text-xl font-semibold'>Want to cook: {wantToCook.length}</h3>

        <table className="w-full border-b text-sm text-gray-600">
          <thead>
            <tr className="text-black">
              <th className="text-center">#</th>
              <th className="px-2 pb-2 text-center">Name</th>
              <th className="px-2 pb-2 text-center">Time</th>
              <th className="px-2 pb-2 text-center">Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wantToCook.map(recipe => (
              <tr key={recipe.recipe_id}>
                <td className="px-2 py-2">1</td>
                <td className="px-2 py-2 text-center">{recipe.recipe_name}</td>
                <td className="px-2 py-2 text-center">{recipe.preparing_time}</td>
                <td className="px-2 py-2 text-center">{recipe.calories}</td>
                <td>
                  <button className="px-2 py-1 rounded-3xl text-sm text-black bg-green-400 hover:opacity-85">Preparing</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}