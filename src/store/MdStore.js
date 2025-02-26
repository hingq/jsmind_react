import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:[]
};

const MdSlice = createSlice({
  name: "md",
  initialState,
  reducers: {
    addId(state, action) {
      const id = action.payload;
      state.id=id;      
    },
  },
});
export const { addId } = MdSlice.actions;
export default MdSlice.reducer;