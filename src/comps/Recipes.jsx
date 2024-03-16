import { useEffect, useState } from "react";
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// comps
import WantToCook from "./WantToCook";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [wantToCook, setWantToCook] = useState([])

  // add recipe into want-to-cook list
  const handleAddWantToCook = recipe => {
    if (wantToCook.find(rcp => rcp.recipe_id === recipe.recipe_id)) {
      toast.warning("Already in cook list!!")
      return
    }
    setWantToCook([...wantToCook, recipe])
  }

  // fetch all recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch('/recipes.json') 
      const data = await res.json()
      setRecipes(data);
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
            <WantToCook wantToCook={wantToCook} />
            {/* <CookingInfo /> */}
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </section>
  )
}