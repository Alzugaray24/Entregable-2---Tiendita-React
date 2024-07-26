import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      user: "userIdLogged",
      updatedAt: new Date().toLocaleString(),
      total: 0,
      items: [],
      showAlert: false,
    },
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload.newObj;
      const quantity = action.payload.quantity;
      const cart = state.value.items;
      const existingProductIndex = cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex === -1) {
        state.value.items = [...cart, { product, quantity }];
        state.value.total += product.price * quantity;
      } else {
        const updatedCart = cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        state.value.items = updatedCart;
        const item = cart[existingProductIndex];
        const previousQuantity = item.quantity;
        const difference = quantity;

        state.value.total += product.price * difference;
      }
      state.value.updatedAt = new Date().toLocaleString();
    },

    deleteItemFromCart: (state, action) => {
      const id = action.payload;
      const cart = state.value.items;
      const newProds = cart.filter((item) => item.product.id !== id);
      state.value.items = newProds;
      state.value.total = newProds.reduce(
        (acc, actualValue) =>
          acc + actualValue.product.price * actualValue.quantity,
        0
      );
    },

    removeAllItems: (state, action) => {
      state.value.items = [];
    },

    setAlertTrue: (state, action) => {
      state.value.showAlert = true;
    },

    setAlertFalse: (state, action) => {
      state.value.showAlert = false;
    },
  },
});

export const {
  addItemToCart,
  deleteItemFromCart,
  setAlertTrue,
  setAlertFalse,
} = cartSlice.actions;
export default cartSlice.reducer;
