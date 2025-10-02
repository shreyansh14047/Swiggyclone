import Header from "./header"
import Fooditems from "./fooditem";
import Grocery from "./groceryitems";
import Restaurant from "./restaurantitem";
export default function Home(){
    return(
        <>
        <Header/>
        <Fooditems/>
        <Grocery/>
        <Restaurant/>
        </>
    )
}
