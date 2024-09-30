import { combineReducers } from "@reduxjs/toolkit";
import {authSlice}  from "./slices/AuthSlice";
import { cartSlice } from "./slices/CartSlice";

export const combinedReducers = combineReducers({
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
})