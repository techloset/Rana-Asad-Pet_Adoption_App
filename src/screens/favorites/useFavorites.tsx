import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {LoginScreenProps} from '../../constants/types';
import {
  fetchFavoriteData,
  removeFavoritePet,
} from '../../store/slice/favoritePetsSlice';

const useFavorites = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const favoriteData = useAppSelector(state => state.favoritePets.favoriteData);

  useEffect(() => {
    dispatch(fetchFavoriteData());
  }, [dispatch]);

  const handleGoToPetSearch = () => {
    navigation.navigate('PetSearch');
  };

  const handleDeleteItem = (itemUid: string) => {
    dispatch(removeFavoritePet(itemUid));
  };

  const filteredData =
    favoriteData &&
    favoriteData.filter(item => item.currentUserEmail === userData?.email);

  return {filteredData, handleGoToPetSearch, handleDeleteItem};
};

export default useFavorites;
