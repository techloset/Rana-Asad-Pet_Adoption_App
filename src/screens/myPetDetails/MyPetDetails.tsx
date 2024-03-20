import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native-elements';
import {LoginScreenProps} from '../../constants/types';
import {useAppDispatch} from '../../store/Store';
import {RootStackparams} from '../../navigation/stack/StackNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/firestore';
import {removeDonationPet} from '../../store/slice/donationPetsSlice';
import useMyPetDetails from './useMyPetDetails';

type DetailsScreenRouteProp = RouteProp<RootStackparams, 'MyPetDetails'>;

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackparams,
  'MyPetDetails'
>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const MyPetDetails: React.FC<Props> = ({route, navigation}) => {
  const {pet}: any = route.params || {};
  const {handleDeleteItem} = useMyPetDetails({
    route,
    navigation,
  });

  return (
    <View style={{}}>
      <View
        style={{
          height: 340,
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
                    marginTop: 20,
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
                    marginTop: 20,
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
          zIndex: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              width: 54,
              height: 5,
              backgroundColor: '#E5E5E5',
              borderRadius: 16,
            }}></View>
        </View>
        <View style={{paddingHorizontal: 30, paddingTop: 30}}>
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
                  color: '#101C1D',
                }}>
                {pet.petType}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: '#101C1D',
                }}>
                {pet.petBreed}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 10,
                  fontWeight: '700',
                  color: '#F6A530',
                }}>
                ${pet.amount}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
            <View
              style={{
                height: 59,
                width: 75,
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
                }}>
                Age
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 3,
                  fontWeight: '600',
                  color: '#101C1D',
                }}>
                4
              </Text>
            </View>
            <View
              style={{
                height: 59,
                width: 75,
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
                }}>
                Gender
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#101C1D',
                  marginTop: 3,
                }}>
                {pet.gender}
              </Text>
            </View>
            <View
              style={{
                height: 59,
                width: 75,
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
                }}>
                Weight
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#101C1D',
                  marginTop: 3,
                }}>
                2.1
              </Text>
            </View>
            <View
              style={{
                height: 59,
                width: 75,
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
                }}>
                Vaccine
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#101C1D',
                  marginTop: 3,
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
              marginTop: 20,
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
                    color: '#101C1D',
                  }}>
                  {pet.currentUserName}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    opacity: 10,
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

        <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
          <View style={{height: 50}}>
            <Text
              style={{
                color: '#101C1D',
                fontSize: 13,
                fontWeight: '400',
                lineHeight: 15,
                letterSpacing: 1,
              }}>
              {pet.description.slice(0, 125)}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
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
    width: 321,
    height: 74,
    backgroundColor: '#101C1D',
    borderRadius: 34,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  backgroundImage: {
    width: '100%',
    height: 768,
  },
  backgroundImagee: {
    width: '100%',
    height: 370,
    resizeMode: 'cover',
  },
});
