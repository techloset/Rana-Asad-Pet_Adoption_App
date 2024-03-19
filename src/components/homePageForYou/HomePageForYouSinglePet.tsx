import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {FlatList} from 'react-native';
import {DonationPetData} from '../../constants/types';

const HomePageForYouSinglePet = () => {
  const dispatch = useAppDispatch();
  const donationData = useAppSelector(state => state.donationPets.data);

  useEffect(() => {
    dispatch(fetchCollectionData());
  }, [dispatch]);

  const memoizedData = useMemo(() => donationData, [donationData]);

  const renderPetItem = ({item}: {item: DonationPetData}) => (
    <ImageBackground
      style={{
        width: 321,
        height: 161,
        marginTop: 20,
        borderRadius: 20,
      }}
      source={{uri: item.image}}>
      <View
        style={{
          width: 175,
          height: 125,
          marginTop: 18,
          marginLeft: 18,
        }}>
        <Text style={{fontWeight: '800', fontSize: 29, color: 'white'}}>
          {item.petType}
        </Text>
        <Text style={{fontWeight: '600', fontSize: 14, color: 'white'}}>
          Age 4 Months
        </Text>
        <Text style={{fontWeight: '800', fontSize: 25, color: '#101C1D'}}>
          ${item.amount}
        </Text>
      </View>
    </ImageBackground>
  );

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPetItem}
    />
  );
};

export default HomePageForYouSinglePet;

const styles = StyleSheet.create({});
