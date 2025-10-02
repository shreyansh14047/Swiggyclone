// import { useSelector } from "react-redux"

// export default function Checkout(){
     
//     const items = useSelector(state=>state.cartslice.items);

//     return(
//         <div>
//           {
//             items.map(value=> <div className="text-5xl">{value.name}</div>)
//           }
//         </div>
//     )
// }
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IncrementItems, DecrementItems, clearCart } from "../Stored/CartSlicer"; // Make sure to export clearCart

// A reusable component for each item in the cart
function CartItem({ item }) {
  const dispatch = useDispatch();
  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
  const price = (item.price || item.defaultPrice) / 100;

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-200">
      <div className="flex items-center gap-4 flex-grow">
        <img src={CDN_URL + item.imageId} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
        <div>
          <p className="font-semibold text-gray-800">{item.name}</p>
          <p className="text-sm text-gray-600">₹{price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-28 text-lg font-bold text-gray-700 border border-gray-300 rounded-md">
        <button className="px-3 py-1 hover:bg-gray-100 rounded-l-md" onClick={() => dispatch(DecrementItems(item))}>-</button>
        <span>{item.quantity}</span>
        <button className="px-3 py-1 hover:bg-gray-100 rounded-r-md" onClick={() => dispatch(IncrementItems(item))}>+</button>
      </div>
      <p className="w-20 text-right font-bold text-gray-800">
        ₹{(price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}

// The main Checkout component
export default function Checkout() {
  const cartItems = useSelector((state) => state.cartslice.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * ((item.price || item.defaultPrice) / 100),
    0
  );

  const deliveryFee = subtotal > 0 ? 40.00 : 0; // Example delivery fee
  const totalAmount = subtotal + deliveryFee;

  // Handle Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty Cart" className="w-64 h-64" />
        <h2 className="mt-6 text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">You can go to the home page to view more restaurants</p>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors">
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
    );
  }

  // Main Checkout View
  return (
    <div className="container w-[80%] mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Review Your Order ({cartItems.length})</h1>
        <button onClick={() => dispatch(clearCart())} className="text-red-500 font-semibold hover:text-red-700 transition-colors">
          Clear Cart
        </button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Item List */}
        <div className="flex-grow">
          {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:w-96 lg:sticky lg:top-28 self-start">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold border-b pb-4 mb-4">Order Summary</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹{subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>₹{deliveryFee.toFixed(2)}</p>
              </div>
              <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg text-gray-800">
                <p>Total Amount</p>
                <p>₹{totalAmount.toFixed(2)}</p>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-colors">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}