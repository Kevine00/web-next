// src/app/page.js

export default function Home() {
    return (
      <div>
       
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-4">Discover</h2>
          <h3 className="text-xl sm:text-2xl text-gold-600 font-light italic mb-12">OUR STORY</h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left text-gray-700">
              <p className="mb-4 md:mb-6">
                Halia – restaurant of halia – is located in the one-hectare beautiful Garden of the Kigali city where over 250 species of gingers with their stunning foliage and colourful flowers thrive.
              </p>
              <p className="mb-4 md:mb-6">
                The construction of Halia was carried out simultaneously with the development of the Iriba Garden in the year 2020. Careful consideration was given to the special park setting, such that architecture conformed to the contours of the land, the dignity of mature trees and the preservation of heritage.
              </p>
              <p>
                In 2024, the Halia was officially opened. The result is an unobtrusive dining room with full-height glass windows, beckoning the greenery indoors, and allowing guests to dine in the Garden whilst still comfortably ensconced in cool surroundings.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img src="/images/place.avif" alt="Restaurant Interior" className="w-full rounded-lg shadow-lg" />
              <img src="/images/eat.jpeg" alt="Restaurant Dish" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
  
        
      </div>
    );
  }
  