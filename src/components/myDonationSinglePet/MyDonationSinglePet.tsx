import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const MyDonationSinglePet = () => {
  return (
    <View style={styles.smallContainer}>
      <View style={styles.one}></View>
      <View style={styles.two}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: Colors.primary,
          }}>
          Cavachon
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 10,
            fontWeight: '500',
            color: Colors.primary,
          }}>
          Age 4 Months
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '500',
              color: Colors.primary,
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
            color: Colors.primary,
          }}>
          Male
        </Text>
        <Image
          style={{
            width: 20,
            height: 20,
            marginLeft: 60,
          }}
          source={require('../../assets/donate/Delete.png')}
        />
      </View>
    </View>
  );
};

export default MyDonationSinglePet;

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
