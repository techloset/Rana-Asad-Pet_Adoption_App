import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../store/Store';

const FavoriteSinglePet = () => {
  const userData = useAppSelector(state => state.user.userData);

  return (
    <View style={styles.smallContainer}>
      <Image style={styles.one} source={{uri: userData?.photoURL}}></Image>
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
    </View>
  );
};

export default FavoriteSinglePet;

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
