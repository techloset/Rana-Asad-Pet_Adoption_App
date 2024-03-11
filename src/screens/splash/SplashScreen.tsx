import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/login/Splash.png')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
