import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {MyPetDetailsProps} from '../../constants/types';
import useMyPetDetails from './useMyPetDetails';
import {Colors} from '../../constants/color';

const MyPetDetails: React.FC<MyPetDetailsProps> = ({route, navigation}) => {
  const {pet}: any = route.params || {};
  const {handleDeleteItem} = useMyPetDetails({
    route,
    navigation,
  });

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          height: '50%',
        }}>
        <ImageBackground
          style={styles.backgroundImagee}
          source={{uri: pet.image}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 22,
                    marginTop: '30%',
                    marginLeft: 20,
                  }}
                  source={require('../../assets//donate/whiteArrow.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleDeleteItem(pet.uid);
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 22,
                    marginTop: '38%',
                    marginRight: 20,
                  }}
                  source={require('../../assets/donate/deleteWhite.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: '50%',
          zIndex: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '6%',
          }}>
          <View
            style={{
              width: '15%',
              height: 5,
              backgroundColor: '#E5E5E5',
              borderRadius: 16,
            }}></View>
        </View>
        <View style={{paddingHorizontal: '8%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: Colors.primary,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {pet.petType}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: Colors.primary,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {pet.petBreed.slice(0, 12)}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: '10%',
                  fontWeight: '700',
                  color: '#F6A530',
                  fontFamily: 'Montserrat-Regular',
                }}>
                ${pet.amount}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 5, marginTop: '4%'}}>
            <View
              style={{
                width: '25%',
                backgroundColor: 'rgba(246, 165, 48, 0.1)',
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: '#F6A530',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Age
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 3,
                  fontWeight: '600',
                  color: Colors.primary,
                  fontFamily: 'Montserrat-Regular',
                }}>
                4
              </Text>
            </View>
            <View
              style={{
                width: '25%',
                backgroundColor: 'rgba(246, 165, 48, 0.1)',
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: '#F6A530',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Gender
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: Colors.primary,
                  fontFamily: 'Montserrat-Regular',
                  marginTop: 3,
                }}>
                {pet.gender}
              </Text>
            </View>
            <View
              style={{
                width: '25%',
                backgroundColor: 'rgba(246, 165, 48, 0.1)',
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: '#F6A530',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Weight
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: Colors.primary,
                  marginTop: 3,
                  fontFamily: 'Montserrat-Regular',
                }}>
                2.1
              </Text>
            </View>
            <View
              style={{
                height: 57,
                width: '25%',
                backgroundColor: 'rgba(246, 165, 48, 0.1)',
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: '#F6A530',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Vaccine
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: Colors.primary,
                  marginTop: 3,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {pet.vaccinated}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              height: 50,
              width: '105%',
              marginTop: '4%',
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', gap: 20}}>
              <View>
                <Image
                  style={{width: 38, height: 38, borderRadius: 128}}
                  source={
                    pet?.userPhotoURL
                      ? {uri: pet?.userPhotoURL}
                      : require('../../assets/login/profilePicture.png')
                  }
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: Colors.primary,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {pet.currentUserName}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    opacity: 10,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Owner
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 7,
                alignItems: 'center',
              }}>
              <Text>{pet.location.slice(0, 10)}</Text>
              <Image
                style={{
                  width: 13,
                  height: 17,
                }}
                source={require('../../assets/donate/location.png')}
              />
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: '9%', paddingVertical: '2%'}}>
          <View style={{height: 50}}>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 13,
                fontWeight: '400',
                lineHeight: 15,
                fontFamily: 'Montserrat-Regular',
                letterSpacing: 1,
              }}>
              {pet.description.slice(0, 100)}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Adopt Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyPetDetails;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '86%',
    height: 74,
    backgroundColor: Colors.primary,
    borderRadius: 34,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Montserrat-Regular',
  },
  backgroundImage: {
    width: '100%',
    height: 768,
  },
  backgroundImagee: {
    width: '100%',
    height: '105%',
    resizeMode: 'cover',
  },
});
