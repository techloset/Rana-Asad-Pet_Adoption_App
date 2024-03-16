import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {DonationPetData} from '../../constants/types';
import {FlatList} from 'react-native';

const FavoritePets = () => {
  const dispatch = useAppDispatch();
  const donationData = useAppSelector(state => state.donationPets.data);

  useEffect(() => {
    dispatch(fetchCollectionData());
    console.log('donation data :', donationData);
  }, [dispatch]);

  const memoizedData = useMemo(() => {
    // Filter donationData to include only items where item.like is true
    return donationData.filter((item: DonationPetData) => item.like);
  }, [donationData]);

  const renderPetItem = ({item}: {item: DonationPetData}) => (
    <View style={styles.smallContainer}>
      <Image style={styles.one} source={{uri: item.image}}></Image>
      <View style={styles.two}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#101C1D',
          }}>
          {item.petType.slice(0, 8)}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 10,
            fontWeight: '500',
            color: '#101C1D',
          }}>
          Age 4 Months
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '500',
              color: '#101C1D',
            }}>
            {item.location}
          </Text>
          <Image
            style={{
              width: 9,
              height: 13,
              marginLeft: 10,
            }}
            source={require('../../assets/donate/location.png')}
          />
        </View>
        <Text
          style={{
            marginTop: 7,
            fontSize: 10,
            fontWeight: '500',
            color: '#101C1D',
          }}>
          {item.gender}
        </Text>
        {item.like ? (
          <Image
            style={{
              width: 16,
              height: 15,
              marginLeft: 60,
            }}
            source={require('../../assets/adoption/heartRed.png')}
          />
        ) : (
          <Image
            style={{
              width: 16,
              height: 15,
              marginLeft: 60,
            }}
            source={require('../../assets/adoption/heartWhite.png')}
          />
        )}
      </View>
    </View>
  );

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPetItem}
    />
  );
};

export default FavoritePets;

const styles = StyleSheet.create({
  smallContainer: {
    width: 341,
    marginTop: 20,
    height: 141,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  one: {
    width: 194,
    height: 141,
    borderRadius: 25,
    backgroundColor: '#C4C4C4',
    zIndex: 100,
  },
  two: {
    width: 147,
    height: 126,
    right: 20,
    zIndex: 2,
    paddingLeft: 45,
    paddingTop: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
});
