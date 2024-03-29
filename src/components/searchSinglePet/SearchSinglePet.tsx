import React, {useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {
  AddToFavoriteTypes,
  DonationPetData,
  DonationScreen,
} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';
import favoritePetsSlice, {
  fetchFavoriteData,
} from '../../store/slice/favoritePetsSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../constants/color';
import {showToast} from '../toast/Toast';

interface Props {
  navigation: StackNavigationProp<any>;
  searchTerm: string;
}

const SearchSinglePet: React.FC<Props> = ({navigation, searchTerm}) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const donationData = useAppSelector(state => state.donationPets.data);

  useEffect(() => {
    dispatch(fetchCollectionData());
  }, [dispatch]);

  const memoizedData = useMemo(() => {
    if (!searchTerm) return donationData;
    return donationData.filter(item =>
      item.petType.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [donationData, searchTerm]);

  const handleAddToCart = async (item: DonationPetData) => {
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
      showToast(
        'success',
        'Success',
        'Your pet successfully added in favorite list',
      );

      dispatch(fetchFavoriteData());
    } else {
      showToast('error', 'Error', 'Your pet already exists in favorite list.');
    }
  };

  // setLikedPets(prevState => ({
  //   ...prevState,
  //   [item.uid]: !prevState[item.uid],
  // }));

  const handlePetPress = (pet: DonationPetData) => {
    navigation.navigate('Details', {pet});
  };

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item, index) => item.uid.toString() || index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handlePetPress(item)}>
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
                  source={
                    // likedPets[item.uid]
                    // ? require('../../assets/adoption/heartRed.png')
                    require('../../assets/adoption/heartWhite.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
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
    resizeMode: 'stretch',
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
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  age: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '500',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  location: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  gender: {
    marginTop: 7,
    fontSize: 10,
    fontWeight: '500',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  likeIcon: {
    width: 16,
    height: 15,
    marginLeft: 60,
  },
});

export default SearchSinglePet;
