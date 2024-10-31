/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartslice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import sign_img from "../assets/images/sing_jpeg.jpg";

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert("Product added in Cart Succesfully!");
    setAdded(true);
  };
  return (
    <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        src={product.image}
        alt="product-img"
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price}</p>

      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>

      {added ? (
        <span className="absolute bg-transparent top-1 right-2 ">
          <img
            src={sign_img}
            alt="sign-img"
            className="md:max-w-[40px] md:max-h-[40px] object-contain bg-transparent"
          />
        </span>
      ) : (
        <div
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
          onClick={(e) => handleAddToCart(e, product)}
        >
          <span className="group-hover:hidden">+</span>

          <span className="hidden group-hover:block">Add To Cart</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
