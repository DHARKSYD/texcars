import React from "react";
import toast from "react-hot-toast";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/reducers/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ProductCard({ id, image, name, price }) {
  const cart = useSelector((state) => state.cart);
  const isInCart = cart.find((item) => item.id === id);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { id, name, image, price, quantity: 1 };
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div key={id} className="bg-white rounded-lg shadow-md p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
      <p className="text-lg text-gray-800 font-bold mt-2">${price}</p>

      <div className="flex justify-between gap-2 mt-3">
        {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="bg-secondary text-white grid place-items-center flex-shrink-0 w-10 h-10 rounded-lg hover:bg-blue-700 transition-all"
          >
            <RiDeleteBin5Line />
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white grid place-items-center flex-shrink-0 w-10 h-10 rounded-lg hover:bg-blue-700 transition-all"
          >
            <TfiShoppingCartFull />
          </button>
        )}
      </div>
    </div>
  );
}
