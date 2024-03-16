import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FavoriteSinglePet from '../../components/searchSinglePet/SearchSinglePet';
import {LoginScreenProps} from '../../constants/types';
import {useAppSelector} from '../../store/Store';
import FavoritePets from '../../components/favoritePets/FavoritePets';

const Favorites = ({navigation}: LoginScreenProps) => {
  const userData = useAppSelector(state => state.user.userData);

  const handleGoToPetSearch = () => {
    navigation.navigate('PetSearch');
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#101C1D'}}>
          Favorites
        </Text>
        <TouchableOpacity onPress={handleGoToPetSearch}>
          <Image
            style={{
              width: 22,
              height: 22,
            }}
            source={require('../../assets/donate/plus.png')}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.smallContainer}>
        <View style={styles.one}></View>
        <View style={styles.two}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#101C1D',
            }}>
            Cavachon
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
              FSD
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
            Male
          </Text>
          <Image
            style={{
              width: 16,
              height: 15,
              marginLeft: 60,
            }}
            source={require('../../assets/adoption/heartRed.png')}
          />
        </View>
      </View> */}

      <FavoritePets />
    </ScrollView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  smallContainer: {
    width: 341,
    marginTop: 40,
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
    zIndex: 20,
  },
  two: {
    width: 147,
    height: 126,
    zIndex: 1,
    right: 20,
    paddingLeft: 45,
    paddingTop: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
});
