import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart, removeFromCart } from "../features/reducers/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Page container */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header row */}
        <div className="mb-6 flex items-end justify-between">
          <h1 className="text-2xl font-semibold">CART</h1>
          <span className="text-sm text-gray-500">
            {cart.length} item{cart.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: items */}
          <div className="lg:col-span-2">
            {cart.length === 0 ? (
              <div className="text-center text-lg text-gray-500 py-20">
                Your cart is empty.
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={() => dispatch(removeFromCart(item.id))}
                  />
                ))}
                <button
                  onClick={() => dispatch(clearCart())}
                  className="mt-6 text-red-600 hover:underline"
                >
                  Clear Cart
                </button>
              </>
            )}
            <div className="mt-6">
              <button className="text-sm text-blue-600 hover:underline">
                &lt; Continue shopping
              </button>
            </div>
          </div>

          {/* Right: summary */}
          <aside className="rounded-lg border border-gray-200 p-6 shadow-sm lg:sticky lg:top-8">
            <h2 className="mb-4 text-lg font-semibold">Order summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between text-gray-700">
                <span>Item subtotal ({cart.length})</span>
                <span className="font-medium">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div>
                <p className="mb-2 text-gray-700">Delivery</p>
                <label className="mb-2 flex items-start gap-3 rounded border border-gray-200 p-3">
                  <input type="radio" name="delivery" defaultChecked className="mt-1" />
                  <div>
                    <p className="font-medium">Free - Standard delivery</p>
                    <p className="text-xs text-gray-500">
                      Shipment may take 5-6 business days.
                    </p>
                  </div>
                </label>
                <label className="flex items-start gap-3 rounded border border-gray-200 p-3">
                  <input type="radio" name="delivery" className="mt-1" />
                  <div>
                    <p className="font-medium">$7.99 - Express delivery</p>
                    <p className="text-xs text-gray-500">
                      Shipment may take 2-3 business days.
                    </p>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between pt-2 text-gray-700">
                <span>Estimated tax</span>
                <span className="text-gray-500">--</span>
              </div>
              <div className="flex items-center justify-between border-t pt-3 text-base">
                <span className="font-medium">Total</span>
                <span className="font-semibold">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="flex-1 rounded-full bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700">
                  Checkout
                </button>
                <button className="rounded-full border border-gray-300 px-5 py-3 font-medium">
                  Opay
                </button>
              </div>
              <div className="mt-6">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Promo code?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <button className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            {/* Help bubble */}
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                ?
              </span>
              <span>
                Need Help?{" "}
                <button className="underline">Chat now</button>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
