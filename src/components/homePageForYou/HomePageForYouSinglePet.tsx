import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';
import {FlatList} from 'react-native';
import {DonationPetData, LoginScreenProps} from '../../constants/types';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '../../constants/color';

const HomePageForYouSinglePet = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const donationData = useAppSelector(state => state.donationPets.data);

  const handlePetPress = (pet: DonationPetData) => {
    navigation.navigate('Details', {pet});
  };

  useEffect(() => {
    dispatch(fetchCollectionData());
  }, [dispatch]);

  const memoizedData = useMemo(() => donationData, [donationData]);

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handlePetPress(item)}>
            <ImageBackground
              resizeMode="stretch"
              style={{
                width: 321,
                height: 161,
                marginTop: 20,
              }}
              imageStyle={styles.imageStyle}
              source={{uri: item.image}}>
              <View
                style={{
                  width: 175,
                  height: 125,
                  marginTop: 18,
                  marginLeft: 18,
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 29,
                    color: 'white',
                  }}>
                  {item.petType}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    color: 'white',
                  }}>
                  Age 4 Months
                </Text>
                <Text
                  style={{
                    fontWeight: '800',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 25,
                    color: Colors.primary,
                  }}>
                  ${item.amount}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomePageForYouSinglePet;

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },
});
