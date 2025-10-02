// import { useState } from "react"
// import RestInfo from "./RestInfo"


// export default function MenuCard({menuItems,foodselected}){

//     const [isOpen, setIsOpen] = useState(true);
    
    
//     if("categories" in menuItems){
//         return(
//             <div className="w-full">
//             <p className="text-2xl font-bold">{menuItems.title}</p>
//             <div>
//                 {
//                     menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodselected={foodselected}></MenuCard>)
//                 }
//             </div>
//             </div>
//         )
//     }

   
//     if(!isOpen){
//         return(
//         <div className="w-full">
//             <div className="flex justify-between w-full">
//             <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
//             <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
//             </div>
//             <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
//         </div>   
//         ) 
//     }
    

//     if(foodselected==='veg'){
//         return(
//             <div className="w-full">
//             <div className="flex justify-between w-full">
//             <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
//             <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
//             </div>
//             <div>
//                 {
//                     menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
//                 }
//             </div>
//             <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
//         </div>
//         )
//     }

//     if(foodselected==='nonveg'){
//         return(
//             <div className="w-full">
//             <div className="flex justify-between w-full">
//             <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
//            // AFTER
// <button
//   onClick={() => setIsOpen(!isOpen)}
//   className="flex justify-between items-center w-full p-6 ..." // Make sure items-center is present
// >
//   <h4 className="text-xl font-bold text-gray-700">{menuItems.title}</h4>

//   {/* 👇 ADD THE SVG ICON HERE 👇 */}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={2}
//     stroke="currentColor"
//     className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//   </svg>

// </button>
//             </div>
//             <div>
//                 {
//                     menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
//                 }
//             </div>
//             <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
//         </div>
//         )
//     }

   


//     return (
       
//         <div className="w-full">
//             <div className="flex justify-between w-full">
//             <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          
// <button
//   onClick={() => setIsOpen(!isOpen)}
//   className="flex justify-between items-center w-full p-6 ..."
// >
//   <h4 className="text-xl font-bold text-gray-700">{menuItems.title}</h4>

//   {/* 👇 ADD THE SVG ICON HERE 👇 */}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={2}
//     stroke="currentColor"
//     className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//   </svg>

// </button>
//             </div>
//             <div>
//                 {
//                     menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
//                 }
//             </div>
//             <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
//         </div>
        
//     )
// }
import { useState } from "react";
import RestInfo from "./RestInfo";

const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function MenuCard({ menuItems, foodselected }) {
  const [isOpen, setIsOpen] = useState(true);

  if ("categories" in menuItems) {
    return (
      <div className="w-full my-4">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
          {menuItems.title}
        </h3>
        <div className="flex flex-col gap-4">
          {menuItems?.categories?.map((item) => (
            <MenuCard key={item?.title} menuItems={item} foodselected={foodselected} />
          ))}
        </div>
      </div>
    );
  }

  // --- 2. Filter the Items Before Rendering (Corrected) ---
  const items = menuItems?.itemCards || []; // Guarantees 'items' is an array

  let filteredItems = items;
  if (foodselected === 'veg') {
    filteredItems = items.filter((food) => "isVeg" in food?.card?.info);
  } else if (foodselected === 'nonveg') {
    filteredItems = items.filter((food) => !("isVeg" in food?.card?.info));
  }
  
  if (filteredItems.length === 0) {
    return null;
  }

  // --- 3. Return the Single, Clean Accordion Structure ---
  return (
    <div className="w-full bg-white rounded-lg shadow-sm mb-2 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer border-b border-gray-200"
      >
        <h4 className="text-xl font-bold text-gray-700">
          {menuItems.title} ({filteredItems.length})
        </h4>
        <ChevronIcon isOpen={isOpen} />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px]' : 'max-h-0'
        }`}
      >
        <div className="p-4 flex flex-col">
          {filteredItems.map((item) => (
            <RestInfo key={item?.card?.info?.id} restData={item?.card?.info} />
          ))}
        </div>
      </div>
    </div>
  );
}