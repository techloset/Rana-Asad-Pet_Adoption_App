import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LoginScreenProps, UserData} from '../../constants/types';
import auth from '@react-native-firebase/auth';

const ForgotPassword = ({navigation}: LoginScreenProps) => {
  const [forgotEmail, setForgotEmail] = useState('');

  const handleRecoverPassword = async () => {
    try {
      if (forgotEmail.trim() === '') {
        Alert.alert('Error', 'Please enter your email');
      } else {
        await auth().sendPasswordResetEmail(forgotEmail);
        console.log('Password Recovery');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Password recovery failed:', error);
      Alert.alert('Error', 'Failed to recover password. Please try again.');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            style={{
              width: 25,
              height: 22,
              marginTop: 20,
              marginLeft: 20,
            }}
            source={require('../../assets/login/forgot.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.smallContainer}>
        <View>
          <Text
            style={{
              fontWeight: '800',
              lineHeight: 43,
              fontSize: 36,
              color: '#101C1D',
            }}>
            Recover Password
          </Text>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setForgotEmail}
            placeholder=""
          />
        </View>

        <View>
          <Text style={styles.putHeading}>
            Put your email above to get recovery URL
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleRecoverPassword}>
            <Text style={styles.buttonText}>Recover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  smallContainer: {
    marginTop: 200,
    width: '100%',
    paddingHorizontal: 30,
    flex: 12,
  },
  label: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '600',
    color: '#101C1D',
  },
  putHeading: {
    marginTop: 7,
    fontSize: 14,
    fontWeight: '600',
    color: '#101C1D',
  },
  forgetPassword: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'right',
    fontWeight: '600',
    color: '#101C1D',
  },
  input: {
    borderBottomWidth: 2,
    width: 302,
    height: 40,
    color: '#101C1D',
    borderColor: '#101C1D',
    fontSize: 16,
  },

  buttonContainer: {
    width: 185,
    height: 79,
    backgroundColor: '#101C1D',
    borderRadius: 37,
    color: 'white',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
