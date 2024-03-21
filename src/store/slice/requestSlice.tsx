import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {RequestPetData, RequestPetState} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';

const initialState: RequestPetState = {
  requestData: [],
  loading: true,
  error: null,
};

export const fetchRequestData = createAsyncThunk(
  'data/fetchCollectionData',
  async () => {
    try {
      const snapshot = await firestore().collection('adoptedPets').get();

      const requestData: RequestPetData[] = snapshot.docs.map(doc => ({
        petType: doc.data().petType,
        uid: doc.id,
        petBreed: doc.data().petBreed,
        vaccinated: doc.data().vaccinated,
        gender: doc.data().gender,
        weight: doc.data().weight,
        amount: doc.data().amount,
        location: doc.data().location,
        description: doc.data().description,
        image: doc.data().image,
        petUserEmail: doc.data().petUserEmail,
        petUserName: doc.data().petUserName,
        petUserUID: doc.data().petUserUID,
        petUserPhotoURL: doc.data().petUserPhotoURL,
        userEmail: doc.data().userEmail,
        userName: doc.data().userName,
        userPhotoURL: doc.data().userPhotoURL,
        userUID: doc.data().userUID,
        adoptedDate: doc.data().adoptedDate,
      }));
      return requestData;
    } catch (error) {
      throw error;
    }
  },
);

const requestSlice = createSlice({
  name: 'requestPets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRequestData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchRequestData.fulfilled, (state, action) => {
        state.loading = false;
        state.requestData = action.payload;
      })
      .addCase(fetchRequestData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default requestSlice.reducer;
