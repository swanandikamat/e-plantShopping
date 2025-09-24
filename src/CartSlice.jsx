// CartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // cart items array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity += 1; // if already in cart, increase qty
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // ✅ Remove item by name
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },

    // ✅ Update quantity (e.g., from + / - buttons)
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find((item) => item.name === name);

      if (item) {
        item.quantity = amount;
        if (item.quantity <= 0) {
          // auto-remove if qty becomes 0
          state.items = state.items.filter((i) => i.name !== name);
        }
      }
    },
  },
});

// ✅ Export actions to use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// ✅ Export reducer for store.js
export default cartSlice.reducer;
