export default function CookingInfo() {
  return (
    <div>
      <div className='mb-8'>
        <h3 className='py-2 mb-4 rounded-lg bg-gray-200 text-center text-xl font-semibold'>Want to cook: 01</h3>

        <table className="table-auto border-b text-sm text-gray-600">
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
            <tr>
              <td className="px-2 py-2">1</td>
              <td className="px-2 py-2 text-center">Spaghetti Bolognese</td>
              <td className="px-2 py-2 text-center">20 minutes</td>
              <td className="px-2 py-2 text-center">400 calories</td>
              <td>
                <button className="px-2 py-1 rounded-3xl text-sm text-black bg-green-400 hover:opacity-85">Preparing</button>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">1</td>
              <td className="px-2 py-2 text-center">Spaghetti Bolognese</td>
              <td className="px-2 py-2 text-center">20 minutes</td>
              <td className="px-2 py-2 text-center">400 calories</td>
              <td>
                <button className="px-2 py-1 rounded-3xl text-sm text-black bg-green-400 hover:opacity-85">Preparing</button>
              </td>
            </tr>
            <tr className="bg-green-100 text-black">
              <td></td>
              <td></td>
              <td className="px-2 py-2 text-center">Total time: 45min</td>
              <td className="px-2 py-2 text-center">Total calory: 1050</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}