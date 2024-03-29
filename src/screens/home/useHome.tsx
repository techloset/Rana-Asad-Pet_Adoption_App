import React, {useEffect, useMemo, useState} from 'react';
import {DonationPetData, LoginScreenProps} from '../../constants/types';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {DrawerActions} from '@react-navigation/native';

const useHome = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const [searchTest, setSearchTest] = useState('');
  const donationData = useAppSelector(state => state.donationPets.data);
  const userData = useAppSelector(state => state.user.userData);

  const handlePetPress = (pet: DonationPetData) => {
    navigation.navigate('Details', {pet});
  };

  useEffect(() => {
    dispatch(fetchCollectionData());
  }, [dispatch]);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const memoizedData = useMemo(() => {
    if (!searchTest) return donationData;
    return donationData.filter(item =>
      item.petType.toLowerCase().includes(searchTest.toLowerCase()),
    );
  }, [donationData, searchTest]);

  return {
    setSearchTest,
    memoizedData,
    openDrawer,
    userData,
    handlePetPress,
  };
};

export default useHome;
