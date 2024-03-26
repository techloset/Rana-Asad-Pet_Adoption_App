import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import SideBar from './SideBar';
import DonateScreen from '../../screens/donateScreen/DonateScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props: any) => <SideBar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {zIndex: 1000},
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Add Pet" component={DonateScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
