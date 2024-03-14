import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/Store';
import Drawerrr from './src/components/drawer/Drawerrr';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {/* <Provider store={store}> */}
      <StackNavigation />
      <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
      {/* </Provider> */}
    </NavigationContainer>
  );
}
