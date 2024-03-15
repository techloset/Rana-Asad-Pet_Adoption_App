import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack/StackNavigation';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {store} from './src/store/Store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          <StackNavigation />
          <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
        </Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
