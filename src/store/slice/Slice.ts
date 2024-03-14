// authSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch} from '../Store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface User {
  uid: string;
  email: string;
  password: string;
  pictureURL: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const {setUser, setLoading, setError} = authSlice.actions;

export const signUp =
  (email: string, password: string, userName: string, pictureURL: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const {uid} = response.user!;
      await firestore().collection('users').doc(uid).set({
        email,
        userName,
        pictureURL,
      });
      dispatch(setUser({uid, email, password, pictureURL}));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await auth().signInWithEmailAndPassword(email, password);
      const {uid} = response.user!;
      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data() as User;
        dispatch(setUser(userData));
      }
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

export default authSlice.reducer;
