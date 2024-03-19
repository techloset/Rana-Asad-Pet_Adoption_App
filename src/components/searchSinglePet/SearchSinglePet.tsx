import React, {useEffect, useMemo} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {
  AddToFavoriteTypes,
  DonationPetData,
  DonationScreen,
} from '../../constants/types';
import {addToFavorite} from '../../store/slice/addToFavoriteSlice';

interface SearchSinglePetProps {
  navigation: any;
  searchTerm: string;
}

const SearchSinglePet = ({navigation, searchTerm, data}: any) => {
  const dispatch = useAppDispatch();
  const donationData = useAppSelector(state => state.donationPets.data);

  console.log('hello world');

  useEffect(() => {
    dispatch(fetchCollectionData());
  }, [dispatch]);

  const memoizedData = useMemo(() => {
    if (!searchTerm) return donationData;
    return donationData.filter(item =>
      item.petType.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [donationData, searchTerm]);

  const handleAddToCart = (item: AddToFavoriteTypes) => {
    let cartProduct = {
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
    };
    dispatch(addToFavorite(cartProduct));
  };

  const renderPetItem = ({item}: {item: DonationPetData}) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => handlePetPress(item)}>
      <View style={styles.smallContainer}>
        <Image style={styles.one} source={{uri: item.image}}></Image>
        <View style={styles.two}>
          <Text style={styles.petType}>{item.petType.slice(0, 8)}</Text>
          <Text style={styles.age}>Age 4 Months</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.location}>{item.location}</Text>
            <Image
              style={{width: 9, height: 13, marginLeft: 10}}
              source={require('../../assets/donate/location.png')}
            />
          </View>
          <Text style={styles.gender}>{item.gender}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(item)}>
            <Image
              style={styles.likeIcon}
              source={require('../../assets/adoption/heartWhite.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handlePetPress = (pet: DonationPetData) => {
    navigation.navigate('Details', {pet});
  };

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPetItem}
    />
  );
};

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
  petType: {
    fontSize: 18,
    fontWeight: '700',
    color: '#101C1D',
  },
  age: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '500',
    color: '#101C1D',
  },
  location: {
    fontSize: 10,
    fontWeight: '500',
    color: '#101C1D',
  },
  gender: {
    marginTop: 7,
    fontSize: 10,
    fontWeight: '500',
    color: '#101C1D',
  },
  likeIcon: {
    width: 16,
    height: 15,
    marginLeft: 60,
  },
});

export default SearchSinglePet;
