import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 w-full ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">STYLE_sphere</h3>
          <p className="mt-4">
            Your one-step fot all your needs. Shop with us and experience the
            best online shopping!
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/home" className="hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className=" text-2xl  hover:text-gray-400 ">
              <FaFacebook />
            </a>
            <a href="" className="text-2xl  hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="" className="text-2xl  hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="" className="text-2xl  hover:text-gray-400 ">
              <FaLinkedin />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="your email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 STYLE_sphere All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="" className="hover:underline hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="" className="hover:underline hover:text-gray-400">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
