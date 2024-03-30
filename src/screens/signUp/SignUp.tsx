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
import React from 'react';
import {CheckBox} from 'react-native-elements';
import {SignUpScreenProps} from '../../constants/types';
import {useSignUp} from './useSignUp';
import {Colors} from '../../constants/color';

const SignUp: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {
    state,
    handleChange,
    handleSignUp,
    isChecked,
    setIsChecked,
    isLoading,
  } = useSignUp({navigation});

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
            Sign Up
          </Text>
        </View>
        <View style={{marginTop: '10%'}}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={state.userName}
            onChangeText={val => handleChange('userName', val)}
            placeholder=""
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={state.email}
            keyboardType="email-address"
            onChangeText={val => handleChange('email', val)}
            placeholder=""
          />
        </View>
        <View>
          <Text style={styles.label2}>Password</Text>
          <TextInput
            style={styles.input}
            value={state.password}
            onChangeText={val => handleChange('password', val)}
            secureTextEntry
            placeholder=""
          />
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
            onPress={handleSignUp}>
            {isLoading ? (
              <ActivityIndicator color="white" size={'large'} />
            ) : (
              <Text style={styles.buttonText}>Sign Up</Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: '10%',
            alignItems: 'center',
          }}>
          <Text
            style={styles.buttonTextSignUp}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    width: '100%',
    marginTop: '22%',

    paddingHorizontal: 30,
  },
  label: {
    marginTop: '6%',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primary,
  },
  label2: {
    marginTop: '7%',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primary,
  },
  input: {
    borderBottomWidth: 2,
    width: '100%',
    color: Colors.primary,
    fontFamily: 'Montserrat-Regular',
    borderColor: Colors.primary,
    fontSize: 16,
  },

  underlineText: {
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '54%',
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
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '700',
  },
  buttonTextSignUp: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primary,
    fontSize: 20,
    fontWeight: '700',
  },
  containerbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '20%',
    marginLeft: -9,
    marginTop: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  checkBoxLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    color: Colors.primary,
  },
});
