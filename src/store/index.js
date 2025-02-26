import { configureStore } from "@reduxjs/toolkit";
import MdSlice from "./MdStore";
import loginSlice from "./login";

export const store=configureStore({
    reducer:{
        md:MdSlice,
        login:loginSlice
    }
})