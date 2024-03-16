import { Clock, Fire } from 'react-bootstrap-icons'
import Spaghetti from '../assets/spaghetti.png'
export default function RecipeCard() {
  return (
    <div className='max-w-sm border p-4 space-y-3 rounded-2xl'>
      <img src={Spaghetti} alt="" className='w-full' />
      <h3 className='text-xl font-semibold'>Spaghetti Bolognese</h3>
      <p className='text-gray-500'>Classic Italian pasta dish with savory meat sauce.</p>
      <div className='border-y py-3'>
        <h3 className='mb-1'>Ingredients: 6</h3>
        <ul className='list-disc pl-8'>
          <li className='text-gray-500 text-sm'>500g ground beef</li>
          <li className='text-gray-500 text-sm'>500g ground beef</li>
        </ul>
      </div>
      <div className='flex gap-6 justify-between.'>
        <p className='flex gap-1 items-center'><Clock /> 30 minutes</p>
        <p className='flex gap-1 items-center'><Fire /> 600 calories </p>
      </div>
      <button className='px-4 py-2 rounded-3xl text-black bg-green-400 hover:opacity-85'>Want to cook</button>
    </div>
  )
}