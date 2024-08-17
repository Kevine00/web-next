import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/food.jpg')" }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-300">Welcome</h1>
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light mt-4">THE HALIA</h4>
        <button className="px-6 sm:px-8 py-2 sm:py-3 mt-6 sm:mt-8 text-sm sm:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200">
          Book Now
        </button>
      </div>
    </div>
  );
}
