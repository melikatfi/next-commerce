import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";

const initialState: IProduct = {
  id: "",
  title: "",
  img: "",
  price: 0,
  quantity: 0,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
