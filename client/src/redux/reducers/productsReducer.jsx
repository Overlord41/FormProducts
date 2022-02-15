import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Nombre: "",
  NombreEtiqueta: "",
  Etiqueta: [],
  Productos: [],
};

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    GET_ALL_PRODUCTS: (state, action) => {
      state.Productos = action.payload;
    },
    SET_NAME_PRODUCT: (state, action) => {
      state.Nombre = action.payload;
    },
    SET_NAME_ETIQUETA: (state, action) => {
      state.NombreEtiqueta = action.payload;
    },
    ADD_ETIQUETAS: (state, action) => {
      state.Etiqueta = [...state.Etiqueta, action.payload];
    },
    REMOVE_ETIQUETA: (state, action) => {
      state.Etiqueta = action.payload;
    },
    RESTORE_FORM_PRODUCT: (state) => {
      (state.Nombre = ""), (state.Etiqueta = []);
    },
  },
});

export const {
  GET_ALL_PRODUCTS,
  SET_NAME_PRODUCT,
  SET_NAME_ETIQUETA,
  ADD_ETIQUETAS,
  REMOVE_ETIQUETA,
  RESTORE_FORM_PRODUCT,
} = productReducer.actions;

export default productReducer.reducer;
