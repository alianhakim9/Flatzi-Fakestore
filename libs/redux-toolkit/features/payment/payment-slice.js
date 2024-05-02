import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  transactionToken: "",
};

const paymentSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTransactionToken: (state, action) => {
      if (Cookies.get("ts-token")) {
        Cookies.remove("ts-token");
      }
      state.transactionToken = action.payload.transaction_token;
      Cookies.set("ts-token", state.transactionToken);
    },
  },
});

export const { setTransactionToken } = paymentSlice.actions;

export default paymentSlice.reducer;
