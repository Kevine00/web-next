import womanImage from '/public/images/woman.jpg';
import pic1Image from '/public/images/pic1.jpeg';
import pic2Image from '/public/images/pic2.jpeg';
import pic3Image from '/public/images/pic3.jpeg';
import pic4Image from '/public/images/pic4.jpeg';
import pic5Image from '/public/images/pic5.jpeg';

const InstagramHappenings = () => {
  const images = [
    { src: womanImage, alt: 'Woman Image' },
    { src: pic1Image, alt: 'Pic 1' },
    { src: pic2Image, alt: 'Pic 2' },
    { src: pic3Image, alt: 'Pic 3' },
    { src: pic4Image, alt: 'Pic 4' },
    { src: pic5Image, alt: 'Pic 5' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Instagram <span className="text-yellow-600">Happenings</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramHappenings;
