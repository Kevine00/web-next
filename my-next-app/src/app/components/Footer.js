import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-white text-lg sm:text-xl mb-4">FOLLOW ALONG</h3>
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white text-lg sm:text-xl">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white text-lg sm:text-xl">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white text-lg sm:text-xl">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Email" className="text-gray-400 hover:text-white text-lg sm:text-xl">
            <FaEnvelope />
          </a>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-xs sm:text-sm">
            The Halia Restaurant © 2024. 1 Kagugu Road, Iriba Garden, Kigali city, RWANDA.
            Tel: +250 788 456 780. All Rights Reserved.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-yellow-500">
            <a href="#" className="text-gray-400 hover:text-white">ARTICLES</a> •
            <a href="#" className="text-gray-400 hover:text-white ml-2">COPYRIGHT POLICY</a> •
            <a href="#" className="text-gray-400 hover:text-white ml-2">CAREERS</a>
          </p>
          <p className="mt-2 text-xs sm:text-sm">
            Designed & Developed by <a href="#" className="text-yellow-500 hover:text-yellow-600">Kevine & Josue</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
