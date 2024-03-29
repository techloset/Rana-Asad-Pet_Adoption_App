import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AddToFavorite, AddToFavoriteTypes} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';

const initialState: AddToFavorite = {
  favoriteData: [],
  loading: true,
  error: null,
};

export const fetchFavoriteData = createAsyncThunk(
  'data/fetchCollectionData',
  async () => {
    try {
      const snapshot = await firestore().collection('favoritePets').get();

      const favoriteData: AddToFavoriteTypes[] = snapshot.docs.map(doc => ({
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
        currentUserUID: doc.data().userUID,
        curentUserPhotoURL: doc.data().currentUserPhotoURL,
        currentUserEmail: doc.data().currentUserEmail,
        currentUserName: doc.data().currentUserName,
        amount: doc.data().amount,
      }));
      return favoriteData;
    } catch (error) {
      throw error;
    }
  },
);

const favoritePetsSlice = createSlice({
  name: 'favoritePets',
  initialState,
  reducers: {
    removeFavoritePet: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        pet => pet.uid !== action.payload,
      );
      const petDocRef = firestore()
        .collection('favoritePets')
        .doc(action.payload);
      petDocRef
        .delete()
        .then(() => {
          console.log('Document successfully deleted from Firestore.');
        })
        .catch(error => {
          console.error('Error deleting document:', error);
        });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavoriteData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchFavoriteData.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteData = action.payload;
      })
      .addCase(fetchFavoriteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const {removeFavoritePet} = favoritePetsSlice.actions;

export default favoritePetsSlice.reducer;
