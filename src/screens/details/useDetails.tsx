import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addToFavorite} from '../../store/slice/addToFavoriteSlice';

const useAddToFavorite = () => {
  const dispatch = useDispatch();

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
    };
    dispatch(addToFavorite(cartProduct));
  };

  return handleAddToFavorite;
};

export default useAddToFavorite;
