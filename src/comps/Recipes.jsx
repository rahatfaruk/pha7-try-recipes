import { useEffect, useState } from "react";
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// comps
import WantToCook from "./WantToCook";
import RecipeCard from "./RecipeCard";
import CurrentlyCooking from "./CurrentlyCooking";

export default function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [wantToCook, setWantToCook] = useState([])
  const [cookingList, setCookingList] = useState([])

  // add recipe into want-to-cook list
  const handleAddWantToCook = recipe => {
    if (wantToCook.find(rcp => rcp.recipe_id === recipe.recipe_id)) {
      toast.warning("Already in cook list!!")
      return
    }
    setWantToCook([...wantToCook, recipe])
  }

  // onClick preparing-btn, remove item from wantToCook & add it inside cookingList 
  const addToCookingList = recipe => {
    setWantToCook(wantToCook.filter(item => item.recipe_id !== recipe.recipe_id))
    setCookingList([...cookingList, recipe])
  }

  // fetch all recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('/recipes.json') 
        const data = await res.json()
        setRecipes(data);
      } catch(err) {
        alert(err.message)
        console.log(err.message);
      }
    }
    fetchRecipes()
  }, [])

  return (
    <section className="px-4 py-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="max-w-lg mx-auto mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Recipes</h2>
          <p className="text-gray-700">Here is our most delicious recipes. You can try any of these now. Select any item that you may want to cook!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <div className="flex-[2] grid lg:grid-cols-2 gap-4">
            {recipes.map(recipe => 
              <RecipeCard key={recipe.recipe_id} recipe={recipe} onAddWantToCook={handleAddWantToCook} />
            )}
          </div>
          <div className="flex-1 max-w-lg border p-4 rounded-2xl">
            <WantToCook wantToCook={wantToCook} addToCookingList={addToCookingList} />
            <CurrentlyCooking cookingList={cookingList} />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </section>
  )
}