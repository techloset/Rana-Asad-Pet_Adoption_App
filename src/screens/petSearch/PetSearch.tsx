import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import FavoriteSinglePet from '../../components/favoriteSinglePet/FavoriteSinglePet';
import {LoginScreenProps} from '../../../types/types';

const PetSearch = ({navigation}: LoginScreenProps) => {
  return (
    <ScrollView>
      <View>
        <View style={{marginTop: 30}}>
          <SearchBar />
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
          <FavoriteSinglePet />
          <FavoriteSinglePet />
          <FavoriteSinglePet />
          <FavoriteSinglePet />
          <FavoriteSinglePet />
        </View>
      </View>
    </ScrollView>
  );
};

export default PetSearch;

const styles = StyleSheet.create({});
