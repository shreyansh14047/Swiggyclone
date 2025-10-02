import { imageGridCards } from "../use/fooddata";
import Foodcards from "./foodcard";
export default function Fooditems(){
    return (
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
            {
                imageGridCards.map((foodData)=><Foodcards key={foodData.id} foodData={foodData}></Foodcards>)
            }
          </div>
        </>
    )
}