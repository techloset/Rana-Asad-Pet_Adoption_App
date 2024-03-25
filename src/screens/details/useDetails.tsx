// useDetails.ts
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
// import {addToFavorite} from '../../store/slice/favoritePetsSlice';
import {firebase} from '@react-native-firebase/firestore';
import {useAppSelector} from '../../store/Store';

const useDetails = () => {
  const dispatch = useDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToFavorite = (pet: any) => {
    let cartProduct = {
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
      like: false,
      currentUserEmail: userData?.email,
      currentUserName: userData?.userName,
      currentUserUID: userData?.uid,
      currentUserPhotoURL: userData?.photoURL,
    };
    // dispatch(addToFavorite(cartProduct));
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleAdoptNow = (pet: any, navigation: any) => {
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
