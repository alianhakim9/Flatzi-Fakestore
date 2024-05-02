import Cookies from "js-cookie";

const { createSlice } = require("@reduxjs/toolkit");

const KEY = "carts";
const SUBTOTAL_KEY = "subtotals";
const TOTAL_KEY = "cart-total";

const initialState = {
  items: Cookies.get(KEY) ? JSON.parse(Cookies.get(KEY)) : [],
  subtotals: Cookies.get(SUBTOTAL_KEY)
    ? JSON.parse(Cookies.get(SUBTOTAL_KEY))
    : [],
  totalPrice: Cookies.get(TOTAL_KEY) ? JSON.parse(Cookies.get(TOTAL_KEY)) : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, price } = action.payload;
      const existing = state.items.find((product) => product.id === id);

      if (existing) {
        state.items = state.items.map((product) => {
          if (product.id === id) {
            const quantity = product.quantity + 1;
            const updatedSubtotal = state.subtotals.map((subtotal) => {
              if (subtotal.productId === id) {
                return {
                  ...subtotal,
                  count: price * quantity,
                };
              } else {
                return subtotal;
              }
            });
            state.subtotals = updatedSubtotal;
            return {
              ...product,
              quantity: quantity,
            };
          } else {
            return product;
          }
        });
      } else {
        state.subtotals = [
          ...state.subtotals,
          {
            productId: id,
            count: price,
          },
        ];
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }

      let total = 0;

      state.subtotals.forEach((subtotal) => {
        total += Number(subtotal.count);
      });

      state.totalPrice = total;

      Cookies.set(SUBTOTAL_KEY, JSON.stringify(state.subtotals));
      Cookies.set(TOTAL_KEY, JSON.stringify(state.totalPrice));
      Cookies.set(KEY, JSON.stringify(state.items));
    },
    removeItem(state, action) {
      const removedItemId = action.payload.id;
      // Remove the item from state.items
      state.items = state.items.filter(
        (product) => product.id !== removedItemId
      );
      // Remove the corresponding subtotal from state.subtotals
      state.subtotals = state.subtotals.filter(
        (subtotal) => subtotal.productId !== removedItemId
      );
      // Recalculate the total price
      let total = 0;
      state.subtotals.forEach((subtotal) => {
        total += Number(subtotal.count);
      });
      state.totalPrice = total;
      // Update cookies
      Cookies.remove(TOTAL_KEY);
      Cookies.remove(SUBTOTAL_KEY);
      Cookies.set(KEY, JSON.stringify(state.items));
    },

    updateQuantity(state, action) {
      const { product, type } = action.payload;

      let total = state.totalPrice;

      state.items = state.items.map((item) => {
        if (product.id === item.id) {
          if (type === "increase") {
            item.quantity += 1;
            total += item.price;
          }
          if (type === "decrease") {
            if (item.quantity > 0) {
              item.quantity -= 1;
              total -= item.price;
            }
          }
        }
        return { ...item };
      });

      const updatedSubtotals = state.subtotals.map((subtotal) => {
        if (subtotal && subtotal.productId === product.id) {
          const item = state.items.find((i) => i.id === product.id);
          return {
            ...subtotal,
            count: item.price * item.quantity,
          };
        } else {
          return subtotal;
        }
      });

      state.subtotals = updatedSubtotals;
      state.totalPrice = total;

      Cookies.set(SUBTOTAL_KEY, JSON.stringify(state.subtotals));
      Cookies.set(KEY, JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
