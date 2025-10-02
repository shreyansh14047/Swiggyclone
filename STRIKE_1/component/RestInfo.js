

// export default function RestInfo({restData}){


//     return (
//          <>
//         <div className="flex w-full justify-between mb-2 pb-2">
//           <div className="w-[70%]">
//             <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
//             <p className="text-xl">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
//             <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
//             <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
//             <p>
//                 {restData?.description}
//             </p>    
//           </div>
//           <div className="w-[20%] relative">
//             <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
//             <button className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white">ADD</button>
//           </div>
//         </div>
//         <hr className="mb-6 mt-2"></hr>
//         </>

//     )
// }



// import { useState } from "react";
// import { addItems,IncrementItems,DecrementItems } from "../Stored/CartSlicer";
// import { useDispatch, useSelector} from "react-redux";
// export default function RestInfo({ restData }) {
//   const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/" + restData.imageId;
//   const price = ("defaultPrice" in restData ? restData?.defaultPrice / 100 : restData?.price / 100);

   

//   const dispatch = useDispatch();
//   const items = useSelector(state=>state.cartslice.items);

//   const element = items.find(item=>item.id===restData.id);
//   const count = element? element.quantity:0;

//   function handleAdditems(){
//     dispatch(addItems(restData));
//   }

//   function handleIncrementItems(){
//     dispatch(IncrementItems(restData));
//   }

//   function handleDecrementItems(){
//     dispatch(DecrementItems(restData));
//   }




//   return (
//     <div className="flex w-full justify-between gap-6 py-6 border-b border-gray-200">
//       {/* Left side: Text content */}
//       <div className="flex flex-col flex-grow">
//         <p className="text-lg font-bold text-gray-800">{restData?.name}</p>
//         <p className="mt-1 text-base font-semibold text-gray-700">₹{price}</p>
        
//         {/* Star Rating */}
//         {restData?.ratings?.aggregatedRating?.rating && (
//           <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             <span className="font-bold text-green-700">{restData.ratings.aggregatedRating.rating}</span>
//             <span>({restData.ratings.aggregatedRating.ratingCountV2})</span>
//           </div>
//         )}
        
//         <p className="mt-3 text-sm text-gray-500 leading-relaxed">
//           {restData?.description}
//         </p>
//       </div>

//       {/* Right side: Image and Button */}
//       <div className="w-40 flex-shrink-0 relative">
//         <img className="w-full h-32 object-cover rounded-xl" src={imageUrl} alt={restData?.name} />
//         {/* Centered ADD button */}
//         <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%]">
//           <button className="w-full rounded-lg text-base font-bold text-green-600 px-4 py-2 shadow-lg border bg-white hover:bg-green-50 transition-colors duration-200">
//             ADD
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react"
// import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"
// import { useDispatch, useSelector } from "react-redux";

// export default function RestInfo({restData}){
  
  

//   const dispatch = useDispatch();
//   const items = useSelector(state=>state.cartslice.items);

//   const element = items.find(item=>item.id===restData.id);
//   const count = element? element.quantity:0;

//   function handleAdditems(){
//     console.log("Attempting to add item:", restData); 
//     dispatch(addItems(restData));
//   }

//   function handleIncrementItems(){
//     dispatch(IncrementItems(restData));
//   }

//   function handleDecrementItems(){
//     dispatch(DecrementItems(restData));
//   }
// console.log("Component is rendering. Count is:", count);
//     return (
//          <>
//         <div className="flex w-full justify-between mb-2 pb-2">
//           <div className="w-[70%]">
//             <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
//             <p className="text-xl">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
//             <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
//             <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
//             <p>
//                 {restData?.description}
//             </p>    
//           </div>
//           <div className="w-[20%] relative h-42 bg-black">
//             <img className="w-60 h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
//           {
//             (count===0)?(<button className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white z-10"  onClick={()=>handleAdditems()}>ADD</button>):(
//               <div className="absolute bottom-1 left-20 flex gap-3 text-2xl  text-green-600 px-6 py-2 shadow-md border border-white bg-white rounded-2xl">
//                 <button onClick={()=>handleDecrementItems()}>-</button>
//                 <span>{count}</span>
//                 <button onClick={()=> handleIncrementItems()}>+</button>
//               </div>
//             )
//           }  
//           </div>
//         </div>
//         <hr className="mb-6 mt-2"></hr>
//         </>

//     )
// }

import { useState } from "react"
import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restData}){
  
  

  const dispatch = useDispatch();
  const items = useSelector(state=>state.cartslice.items);

  const element = items.find(item=>item.id===restData.id);
  const count = element? element.quantity:0;

  function handleAdditems(){
    //  console.log("Add button clicked! Data:", restData);
    dispatch(addItems(restData));
  }

  function handleIncrementItems(){
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems(){
    dispatch(DecrementItems(restData));
  }

    return (
         <>
        <div className="flex w-full justify-between mb-2 pb-2">
          <div className="w-[70%]">
            <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
            <p className="text-xl">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>
                {restData?.description}
            </p>    
          </div>
          <div className="w-[20%] relative h-42 border-red-700">
            <img className="w-60 h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
          {
            (count==0)?( <button
    className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md bg-white"
    onClick={handleAdditems}
  >
    ADD
  </button>
) : (
  // The new centered counter
  <div
    className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 text-2xl text-green-600 px-6 py-2 shadow-md bg-white rounded-2xl"
  >
    <button onClick={handleDecrementItems}>-</button>
    <span>{count}</span>
    <button onClick={handleIncrementItems}>+</button>
  </div>
            )
          }  
          </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>

    )
}