// import { createSlice } from "@reduxjs/toolkit";
// const cart = createSlice({
//     name: 'cartslice',
//     initialState: {
//         items:[],
//         count:0,
//     },
//     reducers:{
//        addItems: (state,action)=>{
//             state.items.push({...action.payload, quantity:1});
//             state.count++;
//        },
//        IncrementItems: (state,action)=>{
//          const element =  state.items.find(item=> item.id===action.payload.id); 
//          element.quantity+=1;
//          state.count++;
//        },
//        DecrementItems: (state,action)=>{
//         const element =  state.items.find(item=> item.id===action.payload.id);
//         if(element.quantity>1){
//             element.quantity-=1;
//         }
//         else{
//             state.items = state.items.filter(item=> item.id!=action.payload.id);
//         }
//         state.count--;
//        }
//     }
// })

// export const {addItems, IncrementItems, DecrementItems} = cart.actions;
// export default cart.reducer;


// CartSlicer.js (Improved)

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({ // Renamed to cartSlice for convention
//     name: 'cartslice',
//     initialState: {
//         items:[],
//         count:0,
//     },
//     reducers:{
//         addItems: (state,action)=>{
//             // To prevent duplicates, only add if it doesn't exist. 
//             // The UI logic already handles this, but this makes the reducer safer.
//             const existingItem = state.items.find(item => item.id === action.payload.id);
//             if (!existingItem) {
//                 state.items.push({...action.payload, quantity: 1});
//                 state.count++;
//             }
//         },
//         IncrementItems: (state,action)=>{
//            const element =  state.items.find(item=> item.id === action.payload.id); 
//            // Add a check to ensure element exists
//            if (element) {
//                element.quantity += 1;
//                state.count++;
//            }
//         },
//         DecrementItems: (state,action)=>{
//            const element =  state.items.find(item=> item.id === action.payload.id);
//            // Add a check to ensure element exists
//            if (!element) return;

//            if(element.quantity > 1){
//                element.quantity -= 1;
//            } else {
//                state.items = state.items.filter(item=> item.id !== action.payload.id);
//            }
//            state.count--;
//         }
//     }
// });

// export const {addItems, IncrementItems, DecrementItems} = cartSlice.actions;
// export default cartSlice.reducer;


// Stored/CartSlicer.js (Corrected)

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cartslice',
//     initialState: {
//         items: [],
//         totalItemCount: 0, // Tracks the total quantity of items
//     },
//     reducers: {
//         // This action should only be called when adding a new item for the first time
//         addItems: (state, action) => {
//             state.items.push({ ...action.payload, quantity: 1 });
//             state.totalItemCount++;
//         },
//         IncrementItems: (state, action) => {
//             const item = state.items.find(item => item.id === action.payload.id);
//             if (item) {
//                 item.quantity++;
//                 state.totalItemCount++;
//             }
//         },
//         DecrementItems: (state, action) => {
//             const item = state.items.find(item => item.id === action.payload.id);
//             // Only proceed if the item exists in the cart
//             if (item) {
//                 state.totalItemCount--;
//                 // If quantity is more than 1, just reduce it
//                 if (item.quantity > 1) {
//                     item.quantity--;
//                 } else {
//                     // If quantity is 1, remove the item from the array entirely
//                     state.items = state.items.filter(i => i.id !== action.payload.id);
//                 }
//             }
//         }
//     }
// });

// export const { addItems, IncrementItems, DecrementItems } = cartSlice.actions;
// export default cartSlice.reducer;


// In your src/Stored/CartSlicer.js file

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartslice',
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },
    IncrementItems: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    DecrementItems: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    // The new reducer you just added
    clearCart: (state) => {
      state.items = []; // Empties the items array
    },
  },
});

// The updated export line
export const { addItems, IncrementItems, DecrementItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;