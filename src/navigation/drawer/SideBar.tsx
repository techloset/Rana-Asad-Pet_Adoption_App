import {DrawerActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, TextInput} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../../store/Store';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {clearUserData} from '../../store/slice/userSlice';
import auth from '@react-native-firebase/auth';

type SideBarProps = {
  navigation: any;
};

const SideBar = ({navigation}: SideBarProps) => {
  const dispatch = useAppDispatch();
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleNavigation = (screenName: string) => {
    navigation.navigate(screenName);
    setSelectedItem(screenName);
  };

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (_, {dispatch}) => {
      try {
        await auth().signOut();
        dispatch(clearUserData());
      } catch (error) {
        console.error('Error logging out:', error);
        throw error;
      }
    },
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={closeDrawer}>
          <Image
            style={{
              width: 19,
              height: 19,
              marginLeft: 30,
            }}
            source={require('../../assets/components/close.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <View
            style={{
              width: 246,
              height: 62,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'relative',
            }}>
            <View style={{width: 203, height: 48}}>
              <TextInput
                placeholder="Search for a pet"
                placeholderTextColor={'#101C1D'}
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
                width: 72,
                height: 54,
                backgroundColor: '#101C1D',
                borderRadius: 25,
                marginRight: 40,
                marginLeft: 170,
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

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => handleNavigation('Home')}>
        <Text
          style={[
            styles.item,
            selectedItem === 'Home' && {backgroundColor: 'lightgray'},
          ]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('DonateScreen')}>
        <Text
          style={[
            styles.item,
            selectedItem === 'DonateScreen' && {backgroundColor: 'lightgray'},
          ]}>
          Add_Pet
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('MyDonations')}>
        <Text
          style={[
            styles.item,
            selectedItem === 'MyDonations' && {backgroundColor: 'lightgray'},
          ]}>
          My Donation
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('DonationRequest')}>
        <Text
          style={[
            styles.item,
            selectedItem === 'DonationRequest' && {
              backgroundColor: 'lightgray',
            },
          ]}>
          Request
        </Text>
      </TouchableOpacity>

      <View style={{left: 35, top: 180}}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={{color: '#FB5D48', fontSize: 18, fontWeight: '600'}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 18,
    marginBottom: 15,
    padding: 10,
    paddingVertical: 14,
    paddingLeft: 35,
    color: '#101C1D',
    fontWeight: '600',
  },
});

export default SideBar;
