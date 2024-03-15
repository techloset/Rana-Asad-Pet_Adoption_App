import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../Store';
import {UserData, UserState} from '../../constants/types';

const initialState: UserState = {
  userData: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserDataStart: state => {
      state.isLoading = true;
      state.error = null;
      console.log('fetchUserDataStart');
    },
    fetchUserDataSuccess: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.error = null;
      console.log('fetchUserDataSuccess');
    },
    fetchUserDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log('fetchUserDataFailure');
    },
  },
});

export const {fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure} =
  userSlice.actions;

export const selectUserData = (state: RootState) => state.user.userData;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;
