import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LoginScreenProps} from '../../constants/types';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {deleteItem} from '../../store/slice/addToFavoriteSlice';
import useFavorites from './useFavorites';

const Favorites = ({navigation}: LoginScreenProps) => {
  const {cart, handleGoToPetSearch, handleDeleteItem} = useFavorites({
    navigation,
  });
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

      {cart.map((item, i) => {
        return (
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
              <TouchableOpacity onPress={() => handleDeleteItem(item.uid)}>
                <Image
                  style={{
                    width: 16,
                    height: 15,
                    marginLeft: 60,
                  }}
                  source={require('../../assets/adoption/heartRed.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      {/* <FavoritePets /> */}
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
