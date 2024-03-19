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
import {AddToFavoriteTypes, LoginScreenProps} from '../../constants/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {addToFavorite} from '../../store/slice/addToFavoriteSlice';
import {useAppDispatch} from '../../store/Store';
import {RootStackparams} from '../../navigation/stack/StackNavigation';

type DetailsScreenRouteProp = RouteProp<RootStackparams, 'Details'>;

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackparams,
  'Details'
>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const Details: React.FC<Props> = ({route, navigation}) => {
  const dispatch = useAppDispatch();
  const {pet} = route.params;

  const handleGoToBack = () => {
    navigation.goBack();
  };

  const handleAddToCart = (item: AddToFavoriteTypes) => {
    let cartProduct = {
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
    };
    dispatch(addToFavorite(cartProduct));
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <View>
          <ImageBackground
            style={styles.backgroundImage}
            source={
              pet.image
                ? {uri: pet.image}
                : require('../../assets/pets/heerni.jpg')
            }>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <TouchableOpacity onPress={handleGoToBack}>
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
                  <TouchableOpacity onPress={() => handleAddToCart(pet)}>
                    <Image
                      style={{
                        width: 25,
                        height: 22,
                        marginTop: 20,
                        marginRight: 20,
                      }}
                      source={require('../../assets/adoption/heartWhite.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 1.4,
                  backgroundColor: 'white',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
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
                <View style={{paddingHorizontal: 30, paddingVertical: 30}}>
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
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 15,
                          marginTop: 20,
                        }}>
                        <View
                          style={{
                            width: 38,
                            height: 38,
                            backgroundColor: '#C4C4C4',
                            borderRadius: 128,
                          }}></View>
                        <View style={{}}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: '600',
                              color: '#101C1D',
                            }}>
                            Shin Ryujin
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
                        <View
                          style={{
                            flexDirection: 'row',
                            right: -90,
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
                  </View>

                  <View>
                    <View style={{paddingVertical: 20}}>
                      <Text
                        style={{
                          color: '#101C1D',
                          fontSize: 13,
                          fontWeight: '400',
                          lineHeight: 15,
                          letterSpacing: 1,
                        }}>
                        {pet.description.slice(0, 160)}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Adopt Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 321,
    height: 74,
    backgroundColor: '#101C1D',
    borderRadius: 34,
    color: 'white',
    bottom: -30,
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
});
