const { createSlice } = require("@reduxjs/toolkit");
import Cookies from "js-cookie";

const KEY = "saved-products";

const initialState = {
  items: Cookies.get(KEY) ? JSON.parse(Cookies.get(KEY)) : [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    saveProduct(state, action) {
      // cek jika product sudah ada di saved
      let existing = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (!existing) {
        state.items.push(action.payload);
      } else {
      }
      Cookies.set(KEY, JSON.stringify(state.items));
    },
    removeProduct(state, action) {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      );
      Cookies.set(KEY, JSON.stringify(state.items));
    },
  },
});

export const { saveProduct, removeProduct } = savedSlice.actions;
export default savedSlice.reducer;
