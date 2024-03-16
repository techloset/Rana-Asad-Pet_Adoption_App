import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const SearchBar = () => {
  const [searchTest, setSearchTest] = useState('');
  return (
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
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
