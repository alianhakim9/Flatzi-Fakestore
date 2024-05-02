import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart-slice";
import savedReducer from "./features/saved/saved-slice";
import authReducer from "./features/auth/auth-slice";
import utilReducer from "./features/utils/utils-slice";
import paymentReducer from "./features/payment/payment-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      saved: savedReducer,
      auth: authReducer,
      utils: utilReducer,
      payment: paymentReducer,
    },
  });
};
