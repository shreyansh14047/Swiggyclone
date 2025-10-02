import { imageGridCards } from "../use/grocery";
import Grocerycard from "./grocerycard"
export default function Grocery(){
    return (
        <>
         <div className="mt-20 w-[80%] container mx-auto">
                  <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                    {
                        imageGridCards.map((groceData)=><Grocerycard key={groceData.id} groceData={groceData}></Grocerycard>)
                    }
                  </div>
        </div>
        </>
    )
}