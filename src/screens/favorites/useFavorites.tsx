import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {
  fetchFavoriteData,
  removeFavoritePet,
} from '../../store/slice/favoritePetsSlice';
import {showToast} from '../../components/toast/Toast';

const useFavorites = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const favoriteData = useAppSelector(state => state.favoritePets.favoriteData);
  const loading = useAppSelector(state => state.favoritePets.loading);

  useEffect(() => {
    dispatch(fetchFavoriteData());
  }, [dispatch]);

  const handleGoToPetSearch = () => {
    navigation.navigate('PetSearch');
  };

  const handleDeleteItem = (itemUid: string) => {
    dispatch(removeFavoritePet(itemUid));
    showToast('success', 'Success', 'Your pet remove from favorite list');
  };

  const filteredData =
    favoriteData &&
    favoriteData.filter(item => item.currentUserEmail === userData?.email);

  return {filteredData, handleGoToPetSearch, loading, handleDeleteItem};
};

export default useFavorites;
