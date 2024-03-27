import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import donationPetsReducer from './slice/donationPetsSlice';
import requestPetsReducer from './slice/requestSlice';
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import favoritePetsSlice from './slice/favoritePetsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    donationPets: donationPetsReducer,
    favoritePets: favoritePetsSlice,
    requestPets: requestPetsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
