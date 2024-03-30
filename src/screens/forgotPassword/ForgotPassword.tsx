import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LoginScreenProps} from '../../constants/types';
import useForgotPassword from './useForgotPassword';
import {Colors} from '../../constants/color';

const ForgotPassword = ({navigation}: LoginScreenProps) => {
  const {setForgotEmail, handleRecoverPassword, handleGoBack, isLoading} =
    useForgotPassword({navigation});

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            style={{
              width: 25,
              height: 22,
              marginTop: '6%',
              marginLeft: '6%',
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
              color: Colors.primary,
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
            {isLoading ? (
              <ActivityIndicator color="white" size={'large'} />
            ) : (
              <Text style={styles.buttonText}>Recover</Text>
            )}
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
    marginTop: '55%',
    width: '100%',
    paddingHorizontal: '8.5%',
    flex: 12,
  },
  label: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    fontFamily: 'Montserrat-SemiBold',
  },
  putHeading: {
    marginTop: 7,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primary,
  },
  input: {
    borderBottomWidth: 2,
    width: '100%',
    height: 40,
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
    borderColor: Colors.primary,
    fontSize: 16,
  },

  buttonContainer: {
    width: '55%',
    height: 79,
    backgroundColor: Colors.primary,
    borderRadius: 37,
    color: 'white',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
  },
});
