import { Categories, mockdata } from "../assets/mockData";
import Hero_img_jpg from "../assets/images/Hero_img-JPEG.jpg";
import InfoSection from "../comonents/InfoSection";
import CategorySection from "../comonents/CategorySection";
import { setProducts } from "../redux/productslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../comonents/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(mockdata));
  }, [dispatch]);

  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className=" container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white font-bold text-xs px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border-red-500 border rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:max-w-[900px] md:max-h-[450px] relative">
            <img
              src={Hero_img_jpg}
              alt="Heroimg"
              className=" w-full h-full object-cover"
            />
            <div className="absolute top-16 left-8 z-[-0]">
              <p className="text-gray-600 mb-4"> | e-Shop </p>
              <h2 className="text-3xl font-bold">WELCOME TO STYLE_sphere</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS+ Products
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.products.slice(0, 5).map((items) => (
              <ProductCard key={items.id} product={items} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </>
  );
};

export default Home;
