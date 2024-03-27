import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {UserData, UserState} from '../../constants/types';
import {AppDispatch} from '../store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const initialState: UserState = {
  userData: null,
  isLoading: false,
  error: null,
};

export const listenForAuthStateChanges =
  () => async (dispatch: AppDispatch) => {
    auth().onAuthStateChanged(async user => {
      dispatch(fetchUserDataStart());
      try {
        if (user) {
          const uid = user.uid;
          const userRef = firestore().collection('Users').doc(uid);
          const doc = await userRef.get();
          const userData = doc.exists ? (doc.data() as UserData) : null;
          dispatch(fetchUserDataSuccess(userData));
        } else {
          dispatch(fetchUserDataSuccess(null));
        }
      } catch (error: any) {
        dispatch(fetchUserDataFailure(error.message));
      }
    });
  };

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
123;
export const {
  fetchUserDataStart,
  fetchUserDataSuccess,
  fetchUserDataFailure,
  clearUserData,
} = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
