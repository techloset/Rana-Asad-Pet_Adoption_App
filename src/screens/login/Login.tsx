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
import {CheckBox, Icon} from 'react-native-elements';
import {LoginScreenProps, User} from '../../constants/types';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

const initialState = {email: '', password: ''};

const Login = ({navigation}: LoginScreenProps) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const [state, setState] = useState(initialState);

  const handleChange = (name: string, value: string) => {
    setState(s => ({...s, [name]: value}));
  };

  const handleLogin = async () => {
    let {email, password} = state;

    if (!email) {
      return Alert.alert('please enter email correctly');
    }
    if (password.length < 6) {
      return Alert.alert('please enter password correctly');
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        navigation.navigate('ForgotPassword');
        console.log('login user', user);
        console.log('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
          console.log('That email address is invalid!');
        }
        Alert.alert('Login Error', error);
        console.error('error => ', error);
      });
  };

  const handleNavigationToLogin = () => {
    navigation.navigate('SignUp');
  };
  const handleNavigationToForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.smallContainer}>
        <View>
          <Text style={{fontWeight: '800', fontSize: 36, color: '#101C1D'}}>
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
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
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
  },
  checkBoxLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#101C1D',
  },
});
