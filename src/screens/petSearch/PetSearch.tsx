import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SearchSinglePet from '../../components/searchSinglePet/SearchSinglePet';
import {LoginScreenProps} from '../../constants/types';
import {useAppSelector} from '../../store/Store';

const PetSearch = ({navigation}: LoginScreenProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const userData = useAppSelector(state => state.user.userData);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder="Search for a pet"
            placeholderTextColor={'#101C1D'}
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
        <View style={styles.categoryContainer}>
          <CategoryButton label="Dogs" />
          <CategoryButton label="Cats" />
          <CategoryButton label="Bunnies" />
          <CategoryButton label="Birds" />
          <CategoryButton label="Turtle" />
          <CategoryButton label="Monkey" />
        </View>
      </View>
      <ScrollView style={styles.searchResultsContainer}>
        <SearchSinglePet navigation={navigation} searchTerm={searchTerm} />
      </ScrollView>
    </View>
  );
};

const CategoryButton = ({label}: {label: string}) => (
  <View style={styles.categoryButtonContainer}>
    <Text style={styles.categoryButtonText}>{label}</Text>
  </View>
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
    backgroundColor: '#F2F3FA',
    color: '#101C1D',
    paddingHorizontal: 15,
    borderRadius: 20,
    opacity: 0.5,
  },
  searchIconContainer: {
    width: 82,
    height: 62,
    backgroundColor: '#101C1D',
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
    marginTop: 10,
    gap: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryButtonContainer: {
    width: 63,
    height: 31,
    borderRadius: 13,
    backgroundColor: '#F6A530',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  searchResultsContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
});

export default PetSearch;
