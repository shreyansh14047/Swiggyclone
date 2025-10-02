import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "../component/home";
import Rest from "../component/restitem";
import SearchFood from "../component/SearchFood";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import RestaurantMenu from "../component/RestaurantMenu";
import { store } from "../Stored/stores";
import { Provider } from "react-redux";
import Checkout from "../component/Checkout";
import SecondaryHome from "../component/SecondaryHome";



function App(){
    
    return(
       <>
       <Provider store={store}>

       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurant" element={<Rest></Rest>}></Route>
        <Route path="/city/patna/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/patna/:id/search" element={<SearchFood></SearchFood>}></Route>
      
        </Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
       </Routes>
       </BrowserRouter>
       </Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
