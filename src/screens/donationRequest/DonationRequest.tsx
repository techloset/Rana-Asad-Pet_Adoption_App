import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {fetchRequestData} from '../../store/slice/requestSlice';
import {FlatList} from 'react-native';

const DonationRequest = () => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector(state => state.user.userData);
  const requestData = useAppSelector(state => state.requestPets.requestData);

  const filteredDonationData = requestData.filter(
    item => item.petUserEmail === userData?.email,
  );

  useEffect(() => {
    dispatch(fetchRequestData());
  }, [dispatch]);

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
      <FlatList
        data={filteredDonationData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ScrollView style={{marginLeft: 15}}>
            <View style={styles.smallContainer}>
              <View style={styles.twoContainer}>
                <View style={styles.secondContainer}>
                  <View style={styles.one}>
                    <Image
                      style={{
                        backgroundColor: '#C4C4C4',
                        width: 72,
                        height: 72,
                        borderRadius: 36,
                      }}
                      source={{uri: item?.userPhotoURL}}
                    />
                  </View>
                  <View style={styles.two}>
                    <Text
                      style={{
                        color: '#101C1D',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.userName}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: '#101C1D',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.petBreed.slice(0, 6)} .
                      </Text>
                      <Text
                        style={{
                          color: '#101C1D',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.petType.slice(0, 12)}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#101C1D',
                        fontSize: 10,
                        fontWeight: '500',
                      }}>
                      {item.userEmail}
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
                        style={{
                          color: '#101C1D',
                          fontSize: 10,
                          fontWeight: '500',
                        }}>
                        {item.location}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#101C1D',
                        fontSize: 10,
                        fontWeight: '500',
                      }}>
                      {item.adoptedDate}
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
          </ScrollView>
        )}
      />
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
