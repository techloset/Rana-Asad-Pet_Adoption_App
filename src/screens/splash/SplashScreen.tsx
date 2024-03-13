import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {LoginScreenProps} from '../../../types/types';

const SplashScreen = ({navigation}: LoginScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
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
