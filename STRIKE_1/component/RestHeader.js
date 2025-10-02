// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";


// export default function RestHeader(){

//     const counter = useSelector(state=> state.cartslice.count);
    
//     return (
//         <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
//             <div>
//                 <p className="text-orange-600 font-bold">Swiggy</p>
//             </div>
//             <div>
//                 <Link to="/Checkout">
//                 <p>Cart {`(${counter})`}</p>
//                 </Link>
//             </div>
//         </div>
//     )
// }



import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  // Select the entire items array from the cart slice
  const cartItems = useSelector((state) => state.cartslice.items);

  // Calculate the total number of items by summing up the quantities
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.quantity * ((item.price || item.defaultPrice) / 100),
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-3">
      <div className="container w-[80%] mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="logo-container">
          <Link to="/">
            <p className="text-3xl text-orange-500 font-bold tracking-tight">
              Swiggy
            </p>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav>
          <ul className="flex items-center gap-8 text-lg font-semibold text-gray-700">
            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="hover:text-orange-500 transition-colors duration-200">
                Search
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-orange-500 transition-colors duration-200">
                Help
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side: Cart Info */}
        <div className="cart-container">
          <Link to="/checkout">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
              {/* Cart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Cart Details */}
              <div className="text-left">
                <p className="text-base font-bold text-gray-800">
                  {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}
                </p>
                <p className="text-sm font-semibold text-green-700">
                  ₹{totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}