import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {LoginScreenProps} from '../../constants/types';
import useFavorites from './useFavorites';
import {Colors} from '../../constants/color';

const Favorites = ({navigation}: LoginScreenProps) => {
  const {filteredData, handleGoToPetSearch, loading, handleDeleteItem} =
    useFavorites({
      navigation,
    });

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Montserrat-Regular',
            fontWeight: '700',
            color: Colors.primary,
          }}>
          Favorites
        </Text>
        <TouchableOpacity onPress={handleGoToPetSearch}>
          <Image
            style={{
              width: 22,
              height: 22,
            }}
            source={require('../../assets/donate/plus.png')}
          />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator
          style={{marginTop: 20}}
          size={'large'}
          color="#000"
        />
      ) : (
        <>
          {filteredData?.length > 0 ? (
            filteredData.map((item, i) => (
              <View style={styles.smallContainer} key={item.uid}>
                <Image style={styles.one} source={{uri: item.image}}></Image>
                <View style={styles.two}>
                  <Text style={styles.petType}>{item.petType.slice(0, 8)}</Text>
                  <Text style={styles.age}>Age 4 Months</Text>
                  <View style={styles.locationContainer}>
                    <Text style={styles.location}>FSD</Text>
                    <Image
                      style={styles.locationIcon}
                      source={require('../../assets/donate/location.png')}
                    />
                  </View>
                  <Text style={styles.gender}>Male</Text>
                  <TouchableOpacity onPress={() => handleDeleteItem(item.uid)}>
                    <Image
                      style={styles.likeIcon}
                      source={require('../../assets/adoption/heartRed.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <View style={{marginTop: 20}}>
              <Text style={styles.emptyText}>
                Your Favorite List Is Empty 😐
              </Text>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  smallContainer: {
    width: 341,
    marginTop: 20,
    height: 141,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  one: {
    width: 194,
    height: 141,
    borderRadius: 25,
    backgroundColor: '#C4C4C4',
    resizeMode: 'stretch',
    zIndex: 20,
  },
  two: {
    width: 147,
    height: 126,
    zIndex: 1,
    right: 20,
    paddingLeft: 45,
    paddingTop: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  petType: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  age: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
    color: Colors.primary,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  location: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  locationIcon: {
    width: 9,
    height: 13,
    marginLeft: 10,
  },
  gender: {
    marginTop: 7,
    fontSize: 10,
    fontWeight: '500',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  likeIcon: {
    width: 16,
    height: 15,
    marginLeft: 60,
  },
  emptyText: {
    fontWeight: '900',
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
  },
});
