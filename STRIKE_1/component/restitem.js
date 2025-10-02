
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Restcard from "./restcard";
import Shimmer from "./simmereffect";

export default function Rest() {
  const [data, setData] = useState([]);
  const [data1, setdata1] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const swiggyapiBase =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5994197&lng=85.0843156&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const proxy = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const response = await fetch(proxy + swiggyapiBase);
        const json = await response.json();

        const topChains = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const deliveryCard = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        // ✅ Deduplicate both lists
        const uniqueTopChains = Array.from(new Map(topChains.map(r => [r.info.id, r])).values());
        const uniqueDelivery = Array.from(new Map(deliveryCard.map(r => [r.info.id, r])).values());

        setData(uniqueTopChains);
        setdata1(uniqueDelivery);
        setPage(2); // Start from next page
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    }

    fetchInitialData();
  }, []);

  const fetchMoreRestaurants = async () => {
    try {
      const nextPageUrl = `${swiggyapiBase}&page=${page}`;
      const response = await fetch(proxy + nextPageUrl);
      const json = await response.json();

      const deliveryCard = json.data.cards.find(card =>
        card.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const newRestaurants = deliveryCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      if (newRestaurants.length === 0) {
        setHasMore(false);
      } else {
        // ✅ Deduplicate while appending
        const combined = [...data1, ...newRestaurants];
        const unique = Array.from(new Map(combined.map(r => [r.info.id, r])).values());
        setdata1(unique);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching more restaurants:", error);
      setHasMore(false);
    }
  };

  if (data.length === 0) return <Shimmer />;

  return (
    <>
      {/* Top Chains */}
      <div className="w-[80%] mx-auto mt-20 mb-20 relative">
        <p className="text-2xl font-bold">Top restaurant chains in Patna</p>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
          {data.map((restInfo) => (
            <Restcard key={`top-${restInfo.info.id}`} restInfo={restInfo} />
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-gray-300" />

      {/* Online Delivery with Infinite Scroll */}
      <div className="w-[80%] mx-auto mt-10 relative">
        <p className="text-2xl font-bold">Restaurants with online food delivery in Patna</p>
        <InfiniteScroll
          dataLength={data1.length}
          next={fetchMoreRestaurants}
          hasMore={hasMore}
          // loader={<Shimmer />}
          endMessage={<p className="text-center mt-10 text-gray-500">No more restaurants to show.</p>}
        >
          <div className="flex flex-wrap mt-5 gap-4">
            {data1.map((restInf) => (
              <Restcard key={`delivery-${restInf.info.id}`} restInfo={restInf} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
