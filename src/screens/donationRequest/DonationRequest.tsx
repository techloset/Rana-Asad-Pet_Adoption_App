import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import useDonationRequest from './useDonationRequest';
import {Colors} from '../../constants/color';

const DonationRequest = () => {
  const {requestData, handleSendEmailMessage} = useDonationRequest();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}>
        <Text style={{fontSize: 24, fontWeight: '700', color: Colors.primary}}>
          Donation Requests
        </Text>
      </View>

      {requestData.length > 0 ? (
        <FlatList
          data={requestData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{marginLeft: 15}}>
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
                          color: Colors.primary,
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.userName}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            color: Colors.primary,
                            fontSize: 18,
                            fontWeight: '700',
                          }}>
                          {item.petBreed.slice(0, 8)} .
                        </Text>
                        <Text
                          style={{
                            color: Colors.primary,
                            fontSize: 18,
                            fontWeight: '700',
                            fontFamily: 'Montserrat',
                          }}>
                          {item.petType.slice(0, 12)}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: Colors.primary,
                          fontSize: 10,
                          fontWeight: '500',
                          fontFamily: 'Montserrat',
                        }}>
                        {item.userEmail}
                      </Text>
                      <View
                        style={{flexDirection: 'row', gap: 8, marginTop: 3}}>
                        <Image
                          style={{
                            width: 10,
                            height: 13,
                          }}
                          source={require('../../assets/donate/location.png')}
                        />
                        <Text
                          style={{
                            color: Colors.primary,
                            fontSize: 10,
                            fontWeight: '500',
                            fontFamily: 'Montserrat',
                          }}>
                          {item.location}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: Colors.primary,
                          fontSize: 10,
                          fontWeight: '500',
                          fontFamily: 'Montserrat',
                        }}>
                        {item.adoptedDate}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => handleSendEmailMessage(item.userEmail)}>
                    <Text style={styles.buttonText}>Contact</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 15,
            color: 'grey',
          }}>
          Your donation request list is empty 😐
        </Text>
      )}
    </View>
  );
};

export default DonationRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  smallContainer: {
    width: '90%',
    paddingHorizontal: 10,
    marginTop: 20,
    marginHorizontal: 15,
    height: 184,
    marginBottom: 4,
    backgroundColor: '#fff',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 4,
  },

  twoContainer: {
    flexDirection: 'row',
  },
  secondContainer: {
    width: '100%',
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
    backgroundColor: Colors.primary,
    borderRadius: 34,
    color: 'white',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '700',
  },
});
