import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddToFavorite, AddToFavoriteTypes} from '../../constants/types';

const initialState: AddToFavorite = {
  cart: [],
};

const addToFavoriteSlice = createSlice({
  name: 'addToFavorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<AddToFavoriteTypes>) => {
      const existingProductIndex = state.cart.findIndex(
        item => item.uid === action.payload.uid,
      );

      if (existingProductIndex === -1) {
        state.cart.push(action.payload);
      }
    },

    deleteItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.uid !== action.payload);
    },
  },
});

export const {addToFavorite, deleteItem} = addToFavoriteSlice.actions;

export default addToFavoriteSlice.reducer;
