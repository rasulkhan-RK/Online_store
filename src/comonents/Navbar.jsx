import { useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productslice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("filter-Data");
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const products = useSelector((state) => state.cart.products);
  const [isSticky, setIsSticky] = useState(false);

  const handelScroll = () => {
    if (window.scrollY > -10) {
      setIsSticky(true);
    } else setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full  ${
        isSticky
          ? "sticky top-0 left-0 bg-white drop-shadow "
          : " bg-white drop-shadow "
      } z-[10]`}
    >
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center ">
        <div className="text-lg font-bold">
          <Link to="/home">STYLE_sphere</Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products...."
              className="w-full border py-2 px-4 text-[16px]"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500 cursor-pointer" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaCartShopping className="text-2xl" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-5 bg-red-700 rounded-full flex justify-center items-center text-white font-semibold">
                {products.length}
              </span>
            )}
          </Link>

          <button
            className="hidden md:block"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/home" className="hover:underline">
          HOME
        </Link>
        <Link to="/shop" className="hover:underline">
          SHOP
        </Link>
        <Link to="/" className="hover:underline">
          CONTACT
        </Link>
        <Link to="/" className="hover:underline">
          ABOUT
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
