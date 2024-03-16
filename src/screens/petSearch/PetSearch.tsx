import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import {LoginScreenProps} from '../../constants/types';
import {useAppSelector} from '../../store/Store';
import FavoritePets from '../../components/favoritePets/FavoritePets';
import SearchSinglePet from '../../components/searchSinglePet/SearchSinglePet';
import {TextInput} from 'react-native';

const PetSearch = ({navigation}: LoginScreenProps) => {
  const [searchTest, setSearchTest] = useState('');
  const userData = useAppSelector(state => state.user.userData);

  return (
    <ScrollView>
      <View>
        <View style={{marginTop: 30}}>
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
                  placeholderTextColor={'#101C1D'}
                  onChangeText={val => setSearchTest(val)}
                  style={{
                    backgroundColor: '#F2F3FA',
                    color: '#101C1D',
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
                  backgroundColor: '#101C1D',
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

        <View style={{marginTop: 10, paddingHorizontal: 30}}>
          <ScrollView horizontal={true} style={{flexDirection: 'row', gap: 20}}>
            <View
              style={{
                width: 63,
                height: 31,
                borderRadius: 13,
                backgroundColor: '#F6A530',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                Dogs
              </Text>
            </View>
            <View
              style={{
                width: 63,
                height: 31,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>Cats</Text>
            </View>
            <View
              style={{
                width: 63,
                height: 31,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>Bunnies</Text>
            </View>
            <View
              style={{
                width: 63,
                height: 31,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>Birds</Text>
            </View>
            <View
              style={{
                width: 63,
                height: 31,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>Turtle</Text>
            </View>
            <View
              style={{
                width: 63,
                height: 31,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '600'}}>Monkey</Text>
            </View>
          </ScrollView>
        </View>

        <View style={{marginVertical: 30}}>
          <SearchSinglePet navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PetSearch;

const styles = StyleSheet.create({});
