import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, store} from '../Store';
import {UserData, UserState} from '../../constants/types';
import {AppDispatch} from '../store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useEffect} from 'react';

const initialState: UserState = {
  userData: null,
  isLoading: false,
  error: null,
};

export const listenForAuthStateChanges =
  () => async (dispatch: AppDispatch) => {
    auth().onAuthStateChanged(async user => {
      if (user) {
        dispatch(fetchUserDataStart());
        try {
          const userData = await fetchDataFromFirestore(user.uid);
          dispatch(fetchUserDataSuccess(userData));
        } catch (error: any) {
          dispatch(fetchUserDataFailure(error.message));
        }
      } else {
        dispatch(fetchUserDataSuccess(null));
      }
    });
  };

const fetchDataFromFirestore = async (
  uid: string,
): Promise<UserData | null> => {
  const userRef = firestore().collection('Users').doc(uid);
  const doc = await userRef.get();
  if (doc.exists) {
    return doc.data() as UserData;
  } else {
    return null;
  }
};

useEffect(() => {
  store.dispatch(listenForAuthStateChanges());
}, []);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserDataStart: state => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserDataSuccess: (state, action: PayloadAction<UserData | null>) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchUserDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearUserData(state) {
      state.userData = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  fetchUserDataStart,
  fetchUserDataSuccess,
  fetchUserDataFailure,
  clearUserData,
} = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.userData;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;

const userReducer = userSlice.reducer;
export default userReducer;
