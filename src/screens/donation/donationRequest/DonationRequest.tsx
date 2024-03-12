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
import FavoriteSinglePet from '../../../components/favoriteSinglePet/FavoriteSinglePet';
import DonationRequestSinglePet from '../../../components/donationRequestSinglePet/DonationRequestSinglePet';

const DonationRequest = () => {
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
          Donation Requests
        </Text>
      </View>
      {/* <View style={{alignItems: 'center'}}>
        <View style={styles.smallContainer}>
          <View style={styles.twoContainer}>
            <View style={styles.secondContainer}>
              <View style={styles.one}></View>
              <View style={styles.two}>
                <Text
                  style={{color: '#101C1D', fontSize: 18, fontWeight: '700'}}>
                  Talha
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{color: '#101C1D', fontSize: 18, fontWeight: '700'}}>
                    Cavachon .
                  </Text>
                  <Text
                    style={{color: '#101C1D', fontSize: 18, fontWeight: '700'}}>
                    Dog
                  </Text>
                </View>
                <Text
                  style={{color: '#101C1D', fontSize: 10, fontWeight: '500'}}>
                  info@techloset.com
                </Text>
                <View style={{flexDirection: 'row', gap: 8, marginTop: 3}}>
                  <Image
                    style={{
                      width: 10,
                      height: 13,
                    }}
                    source={require('../../assets/donate/location.png')}
                  />
                  <Text
                    style={{color: '#101C1D', fontSize: 10, fontWeight: '500'}}>
                    Lahore, PK.
                  </Text>
                </View>
                <Text
                  style={{color: '#101C1D', fontSize: 10, fontWeight: '500'}}>
                  January 21, 2024
                </Text>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

      <DonationRequestSinglePet />
      <DonationRequestSinglePet />
      <DonationRequestSinglePet />
      <DonationRequestSinglePet />
    </ScrollView>
  );
};

export default DonationRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  smallContainer: {
    width: 330,
    paddingHorizontal: 10,
    marginTop: 20,
    height: 184,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: 'black',
  },

  twoContainer: {
    flexDirection: 'row',
  },
  secondContainer: {
    width: 249,
    marginTop: 15,
    marginStart: 5,
    flexDirection: 'row',
    height: 95,
  },
  one: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
    zIndex: 20,
  },
  two: {
    zIndex: 20,
    marginLeft: 30,
  },
  buttonContainer: {
    width: 255,
    height: 36,
    backgroundColor: '#101C1D',
    borderRadius: 34,
    color: 'white',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
