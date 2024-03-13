// import {View, Text} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import PetSearch from '../../screens/petSearch/PetSearch';
// import Favorites from '../../screens/favorites/Favorites';
// import Profile from '../../screens/profile/Profile';
// import Home from '../../screens/home/Home';

// const Tab = createBottomTabNavigator();

// const TabNavigation = () => {
//   return (
//     <>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{headerShown: false}}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="PetSearch" component={PetSearch} />
//         <Tab.Screen name="Favorite" component={Favorites} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </>
//   );
// };

// import {View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PetSearch from '../../screens/petSearch/PetSearch';
import Favorites from '../../screens/favorites/Favorites';
import Profile from '../../screens/profile/Profile';
import Home from '../../screens/home/Home';
import MyDonations from '../../screens/myDonations/MyDonations';
import DonationRequest from '../../screens/donationRequest/DonationRequest';
import {Image, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [adoption, setAdoption] = useState(true);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: navs.navigation,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  navs.tabIconContainer,
                  focused ? navs.tabIconFocused : navs.tabIconUnfocused,
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
        {adoption ? (
          <Tab.Screen
            name="PetSearch"
            component={PetSearch}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={[
                    navs.tabIconContainer,
                    focused ? navs.tabIconFocused : navs.tabIconUnfocused,
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
        ) : (
          <Tab.Screen
            name="MyDonations"
            component={MyDonations}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={[
                    navs.tabIconContainer,
                    focused ? navs.tabIconFocused : navs.tabIconUnfocused,
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
        )}
        {adoption ? (
          <Tab.Screen
            name="favorites"
            component={Favorites}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={[
                    navs.tabIconContainer,
                    focused ? navs.tabIconFocused : navs.tabIconUnfocused,
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
        ) : (
          <Tab.Screen
            name="DonationRequest"
            component={DonationRequest}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={[
                    navs.tabIconContainer,
                    focused ? navs.tabIconFocused : navs.tabIconUnfocused,
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
        )}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  navs.tabIconContainer,
                  focused ? navs.tabIconFocused : navs.tabIconUnfocused,
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
    </>
  );
};

export default TabNavigation;

const navs = StyleSheet.create({
  navigation: {
    backgroundColor: 'white',
    height: 80,
    width: 'auto',
  },

  tabIconContainer: {
    width: 68,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  tabIconFocused: {
    backgroundColor: 'black',
  },
  tabIconUnfocused: {
    backgroundColor: 'transparent',
  },
});
