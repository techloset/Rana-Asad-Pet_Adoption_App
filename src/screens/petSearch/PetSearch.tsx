import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchSinglePet from '../../components/searchSinglePet/SearchSinglePet';
import usePetSearch from './usePetSearch';
import {Colors} from '../../constants/color';

const PetSearch = ({navigation, route}: any) => {
  const {searchTerm, selectedCategory, handleCategorySearch, setSearchTerm} =
    usePetSearch(route);

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: '5%',
            marginLeft: 5,
          }}>
          <View
            style={{
              width: '92%',
              height: 62,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'relative',
            }}>
            <View style={{width: '84%', height: 48}}>
              <TextInput
                placeholder="Search for a pet"
                placeholderTextColor={Colors.primary}
                onChangeText={val => setSearchTerm(val)}
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

      <View>
        <ScrollView
          style={styles.categoryContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <CategoryButton
            label="Dogs"
            onPress={() => handleCategorySearch('Dog')}
            isSelected={selectedCategory === 'Dog'}
          />
          <CategoryButton
            label="Cats"
            onPress={() => handleCategorySearch('Cats')}
            isSelected={selectedCategory === 'Cats'}
          />
          <CategoryButton
            label="Bunnies"
            onPress={() => handleCategorySearch('Bunnies')}
            isSelected={selectedCategory === 'Bunnies'}
          />
          <CategoryButton
            label="Turtles"
            onPress={() => handleCategorySearch('Turtle')}
            isSelected={selectedCategory === 'Turtle'}
          />
          <CategoryButton
            label="Cattles"
            onPress={() => handleCategorySearch('Cattle')}
            isSelected={selectedCategory === 'Cattle'}
          />
          <CategoryButton
            label="Sheeps"
            onPress={() => handleCategorySearch('Sheep')}
            isSelected={selectedCategory === 'Sheep'}
          />
          <CategoryButton
            label="Goats"
            onPress={() => handleCategorySearch('Goat')}
            isSelected={selectedCategory === 'Goat'}
          />
        </ScrollView>
      </View>

      <View style={styles.searchResultsContainer}>
        <SearchSinglePet navigation={navigation} searchTerm={searchTerm} />
      </View>
    </View>
  );
};

const CategoryButton = ({
  label,
  onPress,
  isSelected,
}: {
  label: string;
  onPress: () => void;
  isSelected: boolean;
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={[
        styles.categoryButtonContainer,
        isSelected && styles.selectedCategoryButtonContainer,
      ]}>
      <Text
        style={[
          styles.categoryButtonText,
          isSelected && styles.selectedcategoryButtonText,
        ]}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  categoryContainer: {
    gap: 40,
    left: '13%',
    marginRight: 30,
  },
  categoryButtonContainer: {
    width: '100%',
    height: 31,
    marginHorizontal: 15,
    borderRadius: 13,
    fontWeight: '600',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCategoryButtonContainer: {
    backgroundColor: '#F6A530',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  selectedcategoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  searchResultsContainer: {
    marginVertical: 10,
    marginBottom: 144,
  },
});

export default PetSearch;
