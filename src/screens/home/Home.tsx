import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import SearchBar from '../../components/searchBar/SearchBar';
import {useAppSelector} from '../../store/Store';
import {UserData} from '../../constants/types';

const Home = () => {
  const userData = useAppSelector(state => state.user.userData);

  console.log('photoURL', userData?.photoURL);

  return (
    <View>
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              paddingTop: 50,
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                width: 33,
                height: 13,
              }}
              source={require('../../assets/adoption/drawerLogo.png')}
            />
            <Image
              style={{
                width: 46,
                height: 46,
                borderRadius: 123,
                backgroundColor: '#C4C4C4',
              }}
              source={{uri: userData?.photoURL}}></Image>
          </View>

          <View>
            <View
              style={{
                marginTop: 5,
                width: 267,
                height: 139,
                marginHorizontal: 30,
              }}>
              <Text style={{fontWeight: '800', fontSize: 36, color: '#101C1D'}}>
                Find an Awesome Pets for You
              </Text>
            </View>
          </View>

          <View>
            <SearchBar />
          </View>

          <View style={{marginVertical: 20}}>
            <ScrollView
              horizontal={true}
              style={{flexDirection: 'row', paddingHorizontal: 20}}>
              <View
                style={{
                  width: 72,
                  height: 102,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '',
                }}>
                <Image
                  style={{
                    backgroundColor: '#C4C4C4',
                    width: 72,
                    height: 72,
                    borderRadius: 62,
                  }}
                  source={{uri: userData?.photoURL}}></Image>
                <Text
                  style={{
                    color: '#101C1D',
                    marginTop: 7,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Cats
                </Text>
              </View>
              <View
                style={{
                  width: 72,
                  height: 102,
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '',
                }}>
                <Image
                  style={{
                    backgroundColor: '#C4C4C4',
                    width: 72,
                    height: 72,
                    borderRadius: 62,
                  }}
                  source={{uri: userData?.photoURL}}></Image>
                <Text
                  style={{
                    color: '#101C1D',
                    marginTop: 7,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Cats
                </Text>
              </View>
              <View
                style={{
                  width: 72,
                  height: 102,
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '',
                }}>
                <Image
                  style={{
                    backgroundColor: '#C4C4C4',
                    width: 72,
                    height: 72,
                    borderRadius: 62,
                  }}
                  source={{uri: userData?.photoURL}}></Image>
                <Text
                  style={{
                    color: '#101C1D',
                    marginTop: 7,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Cats
                </Text>
              </View>
              <View
                style={{
                  width: 72,
                  height: 102,
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '',
                }}>
                <Image
                  style={{
                    backgroundColor: '#C4C4C4',
                    width: 72,
                    height: 72,
                    borderRadius: 62,
                  }}
                  source={{uri: userData?.photoURL}}></Image>
                <Text
                  style={{
                    color: '#101C1D',
                    marginTop: 7,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Cats
                </Text>
              </View>
              <View
                style={{
                  width: 72,
                  height: 102,
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '',
                }}>
                <Image
                  style={{
                    backgroundColor: '#C4C4C4',
                    width: 72,
                    height: 72,
                    borderRadius: 62,
                  }}
                  source={{uri: userData?.photoURL}}></Image>
                <Text
                  style={{
                    color: '#101C1D',
                    marginTop: 7,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Cats
                </Text>
              </View>
              <View
                style={{
                  width: 72,
                  height: 102,
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '',
                }}>
                <Image
                  style={{
                    backgroundColor: '#C4C4C4',
                    width: 72,
                    height: 72,
                    borderRadius: 62,
                  }}
                  source={{uri: userData?.photoURL}}></Image>
                <Text
                  style={{
                    color: '#101C1D',
                    marginTop: 7,
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Cats
                </Text>
              </View>
            </ScrollView>
          </View>

          <View style={{paddingHorizontal: 30, marginVertical: 10}}>
            <Text style={{color: '#101C1D', fontWeight: '700', fontSize: 18}}>
              For you
            </Text>
          </View>

          <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                paddingHorizontal: 20,
                marginVertical: 10,
                height: 235,
              }}>
              <ImageBackground
                style={{
                  width: 321,
                  height: 161,
                  marginTop: 20,
                  borderRadius: 20,
                }}
                source={{uri: userData?.photoURL}}>
                <View
                  style={{
                    width: 175,
                    height: 125,
                    marginTop: 18,
                    marginLeft: 18,
                  }}>
                  <Text
                    style={{fontWeight: '800', fontSize: 29, color: 'white'}}>
                    Cavachon dog
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: 14, color: 'white'}}>
                    Age 4 Months
                  </Text>
                  <Text
                    style={{fontWeight: '800', fontSize: 25, color: '#101C1D'}}>
                    $250
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: 321,
                  height: 161,
                  marginTop: 20,
                  borderRadius: 20,
                }}
                source={{uri: userData?.photoURL}}>
                <View
                  style={{
                    width: 175,
                    height: 125,
                    marginTop: 18,
                    marginLeft: 18,
                  }}>
                  <Text
                    style={{fontWeight: '800', fontSize: 29, color: 'white'}}>
                    Cavachon dog
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: 14, color: 'white'}}>
                    Age 4 Months
                  </Text>
                  <Text
                    style={{fontWeight: '800', fontSize: 25, color: '#101C1D'}}>
                    $250
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                style={{
                  width: 321,
                  height: 161,
                  marginTop: 20,
                  borderRadius: 20,
                }}
                source={{uri: userData?.photoURL}}>
                <View
                  style={{
                    width: 175,
                    height: 125,
                    marginTop: 18,
                    marginLeft: 18,
                  }}>
                  <Text
                    style={{fontWeight: '800', fontSize: 29, color: 'white'}}>
                    Cavachon dog
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: 14, color: 'white'}}>
                    Age 4 Months
                  </Text>
                  <Text
                    style={{fontWeight: '800', fontSize: 25, color: '#101C1D'}}>
                    $250
                  </Text>
                </View>
              </ImageBackground>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
