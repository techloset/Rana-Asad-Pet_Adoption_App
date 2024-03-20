import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {deleteItem} from '../../store/slice/addToFavoriteSlice';
import {LoginScreenProps} from '../../constants/types';

const useFavorites = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.addToFavorite.cart);

  const handleGoToPetSearch = () => {
    navigation.navigate('PetSearch');
  };

  const handleDeleteItem = (itemUid: string) => {
    dispatch(deleteItem(itemUid));
  };

  return {cart, handleGoToPetSearch, handleDeleteItem};
};

export default useFavorites;
