import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
  return doc.exists ? (doc.data() as UserData) : null;
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
