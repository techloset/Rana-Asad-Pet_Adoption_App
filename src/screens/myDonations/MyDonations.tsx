import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DonationPetData, LoginScreenProps} from '../../constants/types';
import {FlatList} from 'react-native';
import useMyDonations from './useMyDonations';
import {Colors} from '../../constants/color';

const MyDonations = ({navigation}: LoginScreenProps) => {
  const handlePetPress = (pet: DonationPetData) => {
    navigation.navigate('MyPetDetails', {pet});
  };

  const {filteredDonationData, handleDeleteItem, loading} = useMyDonations();

  return (
    <View style={styles.container}>
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
          My Donations
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DonateScreen');
          }}>
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
          {filteredDonationData.length > 0 ? (
            <FlatList
              data={filteredDonationData}
              keyExtractor={(item, index) =>
                item.uid.toString() || index.toString()
              }
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handlePetPress(item)}>
                  <View style={styles.smallContainer}>
                    <Image style={styles.one} source={{uri: item.image}} />
                    <View style={styles.two}>
                      <Text style={styles.petType}>
                        {item.petType.slice(0, 8)}
                      </Text>
                      <Text style={styles.age}>Age 4 Months</Text>
                      <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={styles.location}>
                          {item.location.slice(0, 10)}
                        </Text>
                        <Image
                          style={{width: 9, height: 13, marginLeft: 10}}
                          source={require('../../assets/donate/location.png')}
                        />
                      </View>
                      <Text style={styles.gender}>{item.gender}</Text>
                      <TouchableOpacity
                        onPress={() => handleDeleteItem(item.uid)}>
                        <Image
                          style={styles.likeIcon}
                          source={require('../../assets/donate/Delete.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            <Text
              style={{
                marginTop: 20,
                textAlign: 'center',
                fontWeight: '900',
                fontSize: 15,
                color: 'grey',
                fontFamily: 'Montserrat-Regular',
              }}>
              My Donation list is empty 😐
            </Text>
          )}
        </>
      )}
    </View>
  );
};
export default MyDonations;

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
    zIndex: 100,
    resizeMode: 'stretch',
  },
  two: {
    width: 147,
    height: 126,
    right: 20,
    zIndex: 2,
    paddingLeft: 45,
    paddingTop: 10,
    borderRadius: 20,
    fontFamily: 'Montserrat-Regular',
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
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
  location: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
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
});
