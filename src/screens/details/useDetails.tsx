// useDetails.ts
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
// import {addToFavorite} from '../../store/slice/favoritePetsSlice';
import {firebase} from '@react-native-firebase/firestore';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {fetchFavoriteData} from '../../store/slice/favoritePetsSlice';
import {DonationPetData, LoginScreenProps} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';

const useDetails = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToFavorite = async (item: DonationPetData) => {
    if (!userData) return;

    const cartProduct = {
      petType: item.petType,
      vaccinated: item.vaccinated,
      gender: item.gender,
      petBreed: item.petBreed,
      amount: item.amount,
      weight: item.weight,
      location: item.location,
      description: item.description,
      image: item.image,
      uid: item.uid,
      like: false,
      currentUserEmail: userData.email,
      currentUserName: userData.userName,
      currentUserUID: userData.uid,
      currentUserPhotoURL: userData.photoURL,
    };

    const cartProductRef = firestore().collection('favoritePets');
    const querySnapshot = await cartProductRef
      .where('uid', '==', item.uid)
      .where('currentUserUID', '==', userData.uid)
      .limit(1)
      .get();

    if (querySnapshot.empty) {
      await cartProductRef.add(cartProduct);
      console.log('Cart product added to Firestore successfully.');
      dispatch(fetchFavoriteData());
    } else {
      console.log('Cart product already exists in Firestore.');
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleAdoptNow = (
    pet: DonationPetData,
    navigation: LoginScreenProps['navigation'],
  ) => {
    setIsLoading(true);
    firebase
      .firestore()
      .collection('adoptedPets')
      .where('petType', '==', pet.petType)
      .where('userEmail', '==', userData?.email)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          console.log('Pet data already exists in Firestore');
        } else {
          firebase
            .firestore()
            .collection('adoptedPets')
            .add({
              petType: pet.petType,
              vaccinated: pet.vaccinated,
              gender: pet.gender,
              petBreed: pet.petBreed,
              amount: pet.amount,
              weight: pet.weight,
              location: pet.location,
              description: pet.description,
              image: pet.image,
              uid: pet.uid,
              petUserEmail: pet.currentUserEmail,
              petUserName: pet.currentUserName,
              petUserPhotoURL: pet.userPhotoURL,
              petUserUID: pet.userUID,
              userEmail: userData?.email,
              userName: userData?.userName,
              userUID: userData?.uid,
              userPhotoURL: userData?.photoURL,
              adoptedDate: currentDate,
            })
            .then(() => {
              console.log('Adoption Request Sent Successfully');
              navigation.navigate('Home');
            });
        }
      })
      .catch(error => {
        console.error('Error checking pet data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {handleAddToFavorite, handleAdoptNow, isLoading};
};

export default useDetails;
