import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {LoginScreenProps} from '../../constants/types';
import useLogin from './useLogin';
import {Colors} from '../../constants/color';

const Login = ({navigation}: LoginScreenProps) => {
  const {
    handleChange,
    handleLogin,
    handleNavigationToForgot,
    handleNavigationToLogin,
    isLoading,
    isChecked,
    setIsChecked,
  } = useLogin({navigation});

  return (
    <ScrollView style={styles.container}>
      <View style={styles.smallContainer}>
        <View>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 36,
              color: Colors.primary,
            }}>
            Login
          </Text>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => handleChange('email', val)}
            placeholder=""
          />
        </View>
        <View>
          <Text style={styles.label2}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => handleChange('password', val)}
            secureTextEntry
            placeholder=""
          />
        </View>
        <View>
          <Text
            style={styles.forgetPassword}
            onPress={handleNavigationToForgot}>
            Forgot Password?
          </Text>
        </View>

        <View style={styles.containerbox}>
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            checkedIcon={
              <View
                style={{
                  width: 17,
                  height: 17,
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
              />
            }
            uncheckedIcon={
              <View
                style={{
                  width: 17,
                  height: 17,
                  backgroundColor: 'black',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 10,
                    height: 9,
                    backgroundColor: 'black',
                    borderWidth: 1,
                  }}
                  source={require('../../assets/login/Vector.png')}
                />
              </View>
            }
          />
          <Text style={styles.checkBoxLabel}>
            I agree to the{' '}
            <Text style={[styles.underlineText]}>Terms of service</Text> and{' '}
            <Text style={[styles.underlineText]}>Privacy policy</Text>
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleLogin}>
            {isLoading ? (
              <ActivityIndicator color="white" size={'large'} />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Text
            style={styles.buttonTextSignUp}
            onPress={handleNavigationToLogin}>
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    width: '100%',
    marginTop: 170,
    paddingHorizontal: 30,
  },
  label: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    fontFamily: 'Montserrat-SemiBold',
  },
  label2: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    fontFamily: 'Montserrat-SemiBold',
  },
  forgetPassword: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    color: Colors.primary,
  },
  input: {
    borderBottomWidth: 2,
    width: 302,
    height: 40,
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
    borderColor: Colors.primary,
    fontSize: 16,
  },

  underlineText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonContainer: {
    width: 185,
    fontFamily: 'Montserrat-SemiBold',
    height: 79,
    backgroundColor: Colors.primary,
    borderRadius: 37,
    color: 'white',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonTextSignUp: {
    color: Colors.primary,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    fontWeight: '700',
  },
  containerbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 60,
    marginLeft: -9,
  },
  checkBoxLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    fontFamily: 'Montserrat-SemiBold',
  },
});
