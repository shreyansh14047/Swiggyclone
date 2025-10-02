import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./menucard";
import { Link } from "react-router-dom";
export default function RestaurantMenu(){
    let {id}=useParams();
    // console.log(id);
     const [selected, setSelected] = useState([]);
    const [Restdata,setRestData]=useState([]);
    useEffect(()=>{
        async function fetchData() {
            const proxy="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5994197&lng=85.0843156&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
            const response = await fetch(proxy+swiggyAPI);
           const data = await response.json();
           const tempdata=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData=tempdata.filter((value)=>'title' in value?.card?.card)
           setRestData(filterData);
        }
       fetchData();
    },[])
    //  console.log(Restdata);
    return(
      <div>
<div className="w-[80%] mx-auto mt-20 mb-20">
  <Link to={`/city/patna/${id}/search`}>
    <p
      className="
        w-full text-center py-4 px-6 rounded-full text-2xl font-semibold
        bg-gradient-to-r from-emerald-200 to-emerald-400 text-white
        shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
        hover:scale-[1.02] hover:brightness-105 cursor-pointer
      "
    >
      🔍 Search for Dishes
    </p>
  </Link>
</div>




       <div className="w-[80%] mx-auto mt-20 mb-20 flex  items-center gap-4 my-8">
  {/* Veg Button */}
  <button
    className={`
      flex items-center gap-2 py-2 px-6 rounded-full text-lg font-semibold
      transition-all duration-300 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      ${
        selected === 'veg'
          ? 'bg-emerald-500 text-white shadow-md focus:ring-emerald-400'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400'
      }
    `}
    onClick={() => setSelected(selected === 'veg' ? null : 'veg')}
  >
    Veg
  </button>

  {/* Non-veg Button */}
  <button
    className={`
      py-2 px-6 rounded-full text-lg font-semibold
      transition-all duration-300 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      ${
        selected === 'nonveg'
          ? 'bg-rose-500 text-white shadow-md focus:ring-rose-400'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400'
      }
    `}
    onClick={() => setSelected(selected === 'nonveg' ? null : 'nonveg')}
  >
    Non-veg
  </button>
</div>
        <div className="w-[80%] mx-auto mt-20">
          {
            Restdata.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>)
          }
        </div>
          </div>
    )
}
// data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
