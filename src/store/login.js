import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addToken(state, action) {
      const id = action.payload;
      state.token = id;
      sessionStorage.setItem("token", JSON.stringify(id));
    },
    getTooken(){
      return sessionStorage.getItem("token");
    }
  },
});
export const { addToken, getTooken } = loginSlice.actions;
export default loginSlice.reducer;
