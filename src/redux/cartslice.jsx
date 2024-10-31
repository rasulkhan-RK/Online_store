import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        itemIndex.quantity++, (itemIndex.totalPrice += newItem.price);
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const addItem = state.products.find((item) => item.id === id);
      if (addItem) {
        addItem.quantity++;
        addItem.totalPrice += addItem.price;
        state.totalQuantity++;
        state.totalPrice += addItem.price;
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const deleteItem = state.products.find((item) => item.id === id);

      if (deleteItem.quantity > 1) {
        if (deleteItem) {
          deleteItem.quantity--;
          deleteItem.totalPrice -= deleteItem.price;
          state.totalQuantity--;
          state.totalPrice -= deleteItem.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
