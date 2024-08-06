import { configureStore } from "@reduxjs/toolkit";
import MdSlice from "./MdStore";

export const store=configureStore({
    reducer:{
        md:MdSlice
    }
})