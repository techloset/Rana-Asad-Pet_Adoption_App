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
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder="Search for a pet"
            placeholderTextColor={Colors.primary}
            onChangeText={text => setSearchTerm(text)}
            style={styles.searchInput}
          />
          <View style={styles.searchIconContainer}>
            <Image
              style={styles.searchIcon}
              source={require('../../assets/components/search.png')}
            />
          </View>
        </View>
      </View>

      <View>
        <ScrollView style={styles.categoryContainer} horizontal>
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
  searchInputContainer: {
    width: 329,
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#e9ecef',
    color: Colors.primary,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontFamily: 'Montserrat-Regular',
    opacity: 0.5,
  },
  searchIconContainer: {
    width: 82,
    height: 62,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    marginLeft: 245,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  searchIcon: {
    width: 19,
    height: 27,
  },
  categoryContainer: {
    marginTop: 20,
    gap: 40,
    left: 30,
    marginRight: 30,
  },
  categoryButtonContainer: {
    width: 63,
    height: 31,
    marginHorizontal: 5,
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
    paddingHorizontal: 15,
    marginBottom: 144,
  },
});

export default PetSearch;
