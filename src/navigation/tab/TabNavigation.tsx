import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PetSearch from '../../screens/petSearch/PetSearch';
import Favorites from '../../screens/favorites/Favorites';
import Profile from '../../screens/profile/Profile';
import Home from '../../screens/home/Home';
import {Image, StyleSheet, View} from 'react-native';
import DonateScreen from '../../screens/donateScreen/DonateScreen';
import FavoritePets from '../../components/favoritePets/FavoritePets';
import MyDonations from '../../screens/myDonations/MyDonations';
import DonationRequest from '../../screens/donationRequest/DonationRequest';
import DrawerNavigation from '../drawer/DrawerNavigation';
import DrawerHome from '../drawer/DrawerHome';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          ...navbars.navigation,
        },
      }}>
      <Tab.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navbars.navbarContainer,
                focused ? navbars.iconFocused : navbars.iconUnfocused,
              ]}>
              {focused ? (
                <Image
                  source={require('../../assets/tabIcons/activeHome.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/tabIcons/inactiveHome.png')}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PetSearch"
        component={PetSearch}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navbars.navbarContainer,
                focused ? navbars.iconFocused : navbars.iconUnfocused,
              ]}>
              {focused ? (
                <Image
                  source={require('../../assets/tabIcons/activeSearch.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/tabIcons/inactiveSearch.png')}
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navbars.navbarContainer,
                focused ? navbars.iconFocused : navbars.iconUnfocused,
              ]}>
              {focused ? (
                <Image
                  source={require('../../assets/tabIcons/activeFavorite.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/tabIcons/inactiveFavorite.png')}
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navbars.navbarContainer,
                focused ? navbars.iconFocused : navbars.iconUnfocused,
              ]}>
              {focused ? (
                <Image
                  source={require('../../assets/tabIcons/activeProfile.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/tabIcons/inactiveProfile.png')}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const navbars = StyleSheet.create({
  navigation: {
    backgroundColor: 'white',
    height: 70,
    width: 'auto',
    zIndex: 1,
  },

  navbarContainer: {
    width: 68,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconFocused: {
    backgroundColor: 'black',
  },
  iconUnfocused: {
    backgroundColor: 'transparent',
  },
});
