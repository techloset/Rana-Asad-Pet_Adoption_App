import {
  Alert,
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
import {SignUpScreenProps} from '../../constants/types';
import {useSignUp} from './useSignUp';

const SignUp: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {state, handleChange, handleSignUp} = useSignUp({navigation});

  const [isChecked, setIsChecked] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.smallContainer}>
        <View>
          <Text style={{fontWeight: '800', fontSize: 36, color: '#101C1D'}}>
            Sign Up
          </Text>
        </View>
        <View>
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
              <Image
                style={{
                  width: 17,
                  height: 17,
                  backgroundColor: 'black',
                  borderWidth: 1,
                }}
                source={require('../../assets/login/Vector.png')}
              />
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
            <Text style={styles.buttonText}>Sign Up</Text>
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
    marginTop: 80,
    paddingHorizontal: 30,
  },
  label: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: '600',
    color: '#101C1D',
  },
  label2: {
    marginTop: 20,
    fontSize: 18,
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

  //   checkboxContainer: {
  //     flexDirection: 'row',
  //     marginBottom: 20,
  //     marginTop: 10,
  //   },

  underlineText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 185,
    height: 79,
    backgroundColor: '#101C1D',
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
  },
  buttonTextSignUp: {
    color: '#101C1D',
    fontSize: 20,
    fontWeight: '700',
  },
  containerbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 60,
    marginLeft: -9,
    marginTop: 20,
  },
  checkBoxLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#101C1D',
  },
});
