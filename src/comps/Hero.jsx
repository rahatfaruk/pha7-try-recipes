import HeroBg from '../assets/hero-bg.png'
export default function Hero() {
  return (
    <section className='px-4 py-8'>
      <div className="max-w-screen-lg mx-auto py-16 lg:py-20 bg-gray-500 rounded-xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${HeroBg})`}}>
        {/* content */}
        <div className="max-w-lg mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl">Discover an exceptional cooking class tailored for you!</h2>
          <p className="text-lg.">You love food! In fact, most people love to try new food and enjoy taste. We have published many exciting food recipes in details. Try one now!</p>
          <div className="flex gap-4 justify-center">
            <button className="px-4 py-2 rounded-3xl text-black bg-green-400 hover:opacity-85">Explore Now</button>
            <button className="px-4 py-2 rounded-3xl border border-white bg-none hover:bg-white hover:text-black">Our Feedback</button>
          </div>
        </div>
      </div>
    </section>
  )
}