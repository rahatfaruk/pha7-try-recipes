import { Clock, Fire } from 'react-bootstrap-icons'

export default function RecipeCard({recipe, onAddWantToCook}) {
  const {recipe_image, recipe_name, description, ingredients, preparing_time, calories} = recipe

  return (
    <div className='max-w-sm border p-4 space-y-3 rounded-2xl'>
      <img src={recipe_image} alt="" className='w-full h-48 object-cover rounded-lg' />
      <h3 className='text-xl font-semibold'>{recipe_name}</h3>
      <p className='text-gray-500'>{description}</p>
      <div className='border-y py-3'>
        <h3 className='mb-1'>Ingredients: {ingredients.length}</h3>
        <ul className='list-disc pl-8'>
          {ingredients.map(ing => 
            <li className='text-gray-500 text-sm' key={ing}>{ing}</li>
          )}
        </ul>
      </div>
      <div className='flex gap-6 justify-between.'>
        <p className='flex gap-1 items-center'><Clock /> {preparing_time}</p>
        <p className='flex gap-1 items-center'><Fire /> {calories} </p>
      </div>
      <button className='px-4 py-2 rounded-3xl text-black bg-green-400 hover:opacity-85' onClick={() => onAddWantToCook(recipe)}>Want to cook</button>
    </div>
  )
}