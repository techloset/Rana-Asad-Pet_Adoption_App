import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {DonationPetData, DonationPetState} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';

const initialState: DonationPetState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchCollectionData = createAsyncThunk(
  'data/fetchFavoriteData',
  async () => {
    try {
      const snapshot = await firestore().collection('donationPets').get();

      const data: DonationPetData[] = snapshot.docs.map(doc => ({
        petType: doc.data().petType,
        uid: doc.id,
        petBreed: doc.data().petBreed,
        vaccinated: doc.data().vaccinated,
        gender: doc.data().gender,
        weight: doc.data().weight,
        location: doc.data().location,
        description: doc.data().description,
        image: doc.data().image,
        createAt: doc.data().createAt,
        userUID: doc.data().userUID,
        userPhotoURL: doc.data().userPhotoURL,
        currentUserEmail: doc.data().currentUserEmail,
        currentUserName: doc.data().currentUserName,
        email: doc.data().email,
        amount: doc.data().amount,
      }));
      return data;
    } catch (error) {
      throw error;
    }
  },
);

const donationPetsSlice = createSlice({
  name: 'donationPets',
  initialState,
  reducers: {
    removeDonationPet: (state, action) => {
      state.data = state.data.filter(pet => pet.uid !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCollectionData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCollectionData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCollectionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const {removeDonationPet} = donationPetsSlice.actions;

export default donationPetsSlice.reducer;
