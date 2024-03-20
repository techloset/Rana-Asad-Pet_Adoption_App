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
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {
  DonationPetData,
  LoginScreenProps,
  UserData,
} from '../../constants/types';
import HomePageForYouSinglePet from '../../components/homePageForYou/HomePageForYouSinglePet';
import {TouchableOpacity} from 'react-native';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {FlatList} from 'react-native';

const Home = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const donationData = useAppSelector(state => state.donationPets.data);

  const handlePetPress = (pet: DonationPetData) => {
    navigation.navigate('Details', {pet});
  };

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
            <Image
              style={{
                width: 33,
                height: 13,
              }}
              source={require('../../assets/adoption/drawerLogo.png')}
            />
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
              <Text style={{fontWeight: '800', fontSize: 36, color: '#101C1D'}}>
                Find an Awesome Pets for You
              </Text>
            </View>
          </View>

          <View>
            <SearchBar />
          </View>

          <View style={{paddingHorizontal: 20}}>
            <FlatList
              data={donationData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
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
                        color: '#101C1D',
                        marginTop: 7,
                        fontSize: 14,
                        fontWeight: '600',
                      }}>
                      {item.petType.slice(0, 8)}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
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
                height: 180,
              }}>
              <HomePageForYouSinglePet />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
