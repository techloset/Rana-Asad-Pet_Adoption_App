import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {LoginScreenProps, searchPet} from '../../constants/types';
import HomePageForYouSinglePet from '../../components/homePageForYou/HomePageForYouSinglePet';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import useHome from './useHome';
import {Colors} from '../../constants/color';

const Home = ({navigation}: LoginScreenProps) => {
  const {setSearchTest, handlePetSearch, memoizedData, userData, openDrawer} =
    useHome({
      navigation,
    });

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
            <TouchableOpacity onPress={openDrawer}>
              <Image
                style={{
                  width: 33,
                  height: 13,
                }}
                source={require('../../assets/adoption/drawerLogo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: '-2%'}}
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 123,
                  backgroundColor: '#C4C4C4',
                }}
                source={
                  userData?.photoURL
                    ? {uri: userData.photoURL}
                    : require('../../assets/login/profilePicture.png')
                }></Image>
            </TouchableOpacity>
          </View>

          <View>
            <View
              style={{
                marginTop: '5%',
                width: '60%',
                marginHorizontal: '8%',
              }}>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 36,
                  color: Colors.primary,
                }}>
                Find an Awesome Pets for You
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: '4%',
                marginLeft: '3%',
              }}>
              <View
                style={{
                  width: '92%',
                  height: 62,
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                <View style={{width: '83%', height: 48}}>
                  <TextInput
                    placeholder="Search for a pet"
                    placeholderTextColor={Colors.primary}
                    onChangeText={val => setSearchTest(val)}
                    style={{
                      backgroundColor: '#e9ecef',
                      color: Colors.primary,
                      fontFamily: 'Montserrat-Regular',
                      paddingHorizontal: 15,
                      borderRadius: 20,
                      opacity: 0.5,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '10%',
                    height: 62,
                    backgroundColor: Colors.primary,
                    borderRadius: 25,
                    marginLeft: '70%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                  }}>
                  <Image
                    style={{
                      width: 19,
                      height: 27,
                    }}
                    source={require('../../assets/components/search.png')}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingHorizontal: '5%'}}>
            {memoizedData.length === 0 ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 15,
                    marginVertical: 30,
                  }}>
                  not found
                </Text>
              </View>
            ) : (
              <FlatList
                data={memoizedData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.uid}
                renderItem={({item}) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handlePetSearch(item.petType)}>
                    <View
                      style={{
                        width: '90%',
                        height: 132,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 3,
                      }}>
                      <Image
                        style={{
                          backgroundColor: '#C4C4C4',
                          width: 72,
                          height: 72,
                          borderRadius: 36,
                        }}
                        source={{uri: item.image}}
                      />
                      <Text
                        style={{
                          lineHeight: 17,
                          color: Colors.primary,
                          marginTop: 11,
                          fontSize: 14,
                          fontWeight: '600',
                          fontFamily: 'Montserrat-SemiBold',
                        }}>
                        {item.petType.slice(0, 8)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
          <View style={{paddingHorizontal: 30, marginTop: 10}}>
            <Text
              style={{
                color: Colors.primary,
                fontFamily: 'Montserrat-Regular',
                fontWeight: '700',
                fontSize: 18,
              }}>
              For you
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              marginVertical: 10,
              height: '34%',
              marginBottom: '-57%',
            }}>
            <HomePageForYouSinglePet navigation={navigation} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
