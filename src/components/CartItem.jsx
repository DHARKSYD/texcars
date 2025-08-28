import React from "react";
import { useDispatch } from "react-redux";
import { changeCartQuantity } from "../features/reducers/cartSlice";

export default function CartItem({ item, onRemove }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(
      changeCartQuantity({ id: item.id, quantity: Number(e.target.value) })
    );
  };

  return (
    <div className="flex items-start gap-4 border-b pb-6">
      {/* Image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-100 ring-1 ring-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain p-2"
        />
      </div>

      <div className="flex w-full items-start justify-between">
        {/* Item Info */}
        <div>
          <h3 className="font-medium text-lg">{item.name}</h3>
          <p className="text-sm text-gray-600">Price: ${item.price}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-600">Quantity:</span>
            <select
              value={item.quantity}
              onChange={handleQuantityChange}
              className="border rounded px-2 py-1"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Remove Button */}
          <div className="mt-4">
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              🗑 Remove
            </button>
          </div>
        </div>

        {/* Price on Right */}
        <div className="text-right font-semibold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
}
