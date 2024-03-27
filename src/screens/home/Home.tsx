import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {useAppDispatch} from '../../store/store';
import {LoginScreenProps} from '../../constants/types';
import HomePageForYouSinglePet from '../../components/homePageForYou/HomePageForYouSinglePet';
import {TouchableOpacity} from 'react-native';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {FlatList} from 'react-native';
import useHome from './useHome';
import {Colors} from '../../constants/color';
import {showToast} from '../../components/toast/Toast';

const Home = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const {setSearchTest, memoizedData, userData, openDrawer, handlePetPress} =
    useHome({
      navigation,
    });

  useEffect(() => {
    dispatch(fetchCollectionData());
  }, [dispatch]);

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
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                style={{
                  width: 46,
                  height: 46,
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
                marginTop: 5,
                width: 267,
                height: 139,
                marginHorizontal: 30,
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
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <View
                style={{
                  width: 329,
                  height: 62,
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                <View style={{width: 278, height: 48}}>
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
                    width: 82,
                    height: 62,
                    backgroundColor: Colors.primary,
                    borderRadius: 25,
                    marginRight: 40,
                    marginLeft: 245,
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

          <View style={{paddingHorizontal: 20}}>
            <FlatList
              data={memoizedData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.uid}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handlePetPress(item)}>
                  <View
                    style={{
                      width: 72,
                      height: 132,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 10,
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
          </View>
          <View style={{paddingHorizontal: 30}}>
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
              height: 200,
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
