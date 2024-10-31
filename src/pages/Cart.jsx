import { useDispatch, useSelector } from "react-redux";
import emptyCartImg from "../assets/images/emptyshopping.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../comonents/Modal";
import ChangeAddress from "../comonents/ChangeAddress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartslice";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main road white house -1012");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8 ">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b"
                >
                  <div className="md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt="product-img"
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-bg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-12 items-center">
                    <p>${product.price}</p>

                    <div className="flex items-center justify-center border">
                      <button
                        className="text-xl font-bold px-1.5 border-r"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                      >
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button
                        className="text-xl px-1 border-l"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                      >
                        +
                      </button>
                    </div>

                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">Cart Total</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2 ">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to:{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-600 hover:underline mt-1 ml-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  Total Price: <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Proced to checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center animate-bounce mt-20 mb-10">
          <img
            src={emptyCartImg}
            alt="empty-cart"
            className="h-96 w-96 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;