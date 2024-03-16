import CookingInfo from "./CookingInfo";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="max-w-lg mx-auto mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Recipes</h2>
          <p className="text-gray-700">Here is our most delicious recipes. You can try any of these now. Select any item that you may want to cook!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <RecipeCard />
          <RecipeCard />
          <div className="max-w-lg border p-4 rounded-2xl">
            <CookingInfo />
            <CookingInfo />
          </div>
        </div>
      </div>
    </section>
  )
}