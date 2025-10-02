import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RestInfo from "./RestInfo"; // Make sure you have this component

export default function SearchFood() {
  const { id } = useParams();
  
  const [food, setFood] = useState(""); 
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/"; // Using the requested proxy
        const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5994197&lng=85.0843156&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
        
        // This proxy does not require URL encoding
        const response = await fetch(proxyServer + swiggyAPI);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const menuCards = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const filterData = menuCards.filter((items) => 'title' in items?.card?.card);
        
        setAllMenuItems(filterData);
      } catch (error) {
        console.error("Failed to fetch menu data:", error, "(This is likely due to the proxy being blocked)");
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    if (food.trim() === "") {
      setSearchResults([]);
      return;
    }

    const allItems = allMenuItems.flatMap(category => category?.card?.card?.itemCards || []);
    
    const foundItems = allItems.filter(item => 
      item?.card?.info?.name?.toLowerCase().includes(food.toLowerCase())
    );

    const uniqueItemsMap = new Map();
    foundItems.forEach(item => {
      uniqueItemsMap.set(item.card.info.id, item.card.info);
    });
    
    setSearchResults(Array.from(uniqueItemsMap.values()));

  }, [food, allMenuItems]);

  return (
    <div className="w-[80%] mx-auto mt-20">
      <input 
        className="w-full pl-10 py-4 text-2xl bg-gray-100 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" 
        placeholder="Search for dishes..." 
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <div className="mt-10">
        {food && searchResults.length > 0 && (
          <h2 className="text-2xl font-bold mb-4">Search Results for "{food}"</h2>
        )}

        {searchResults.map((item) => (
          <RestInfo key={item.id} restData={item} />
        ))}
        
        {food && searchResults.length === 0 && (
          <p className="text-center text-xl text-gray-500 mt-16">No dishes found matching your search.</p>
        )}
      </div>
    </div>
  );
}
// import { useState, useEffect } from "react";
// import { useParams } from "react-router"



// export default function SearchFood(){
    
//     const {id} = useParams();
    
//     const [food,setFood] = useState("")
//     const [RestData, setRestData] = useState([]);


//     useEffect(()=>{
        
//             async function fetchData() {
               
//                const proxyServer = "https://cors-anywhere.herokuapp.com/"
//                const swiggyAPI =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5994197&lng=85.0843156&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
//                const response = await fetch(proxyServer+swiggyAPI);
//                const data = await response.json();
//                const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//                const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
//                console.log(filterData);
//                setRestData(filterData);
//             }


           
//             fetchData();
//         },[])




//     return(
//         <div className="w-[80%] mx-auto mt-20">
//             <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"  placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
//         </div>
//     )
// }