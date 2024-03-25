import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {LoginScreenProps} from '../../constants/types';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface State {
  userName: string;
  email: string;
  password: string;
}

interface User {
  userName: string;
  email: string;
  password: string;
  uid: string;
  photoURL: string;
}

export const useSignUp = ({navigation}: LoginScreenProps) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState<State>({
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = (name: keyof State, value: string) => {
    setState(prevState => ({...prevState, [name]: value}));
  };

  const handleSignUp = async () => {
    const {email, password, userName} = state;

    if (!userName) {
      return Alert.alert('Please Enter Your User-Name');
    }
    if (!email) {
      return Alert.alert('Please Enter Your Email');
    }
    if (!password) {
      return Alert.alert('Please Enter Your Password');
    }

    setIsLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      await createUserProfile(user);
      navigation.navigate('Login');
      console.log('User account signed up!');
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      Alert.alert('Error signing up. Please try again.');
      console.error('Error signing up:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createUserProfile = async (user: FirebaseAuthTypes.User) => {
    const userData: User = {
      userName: state.userName,
      email: user.email ?? '',
      password: state.password,
      uid: user.uid,
      photoURL: 'https://via.placeholder.com/50x50',
    };

    try {
      await firestore().collection('Users').doc(user.uid).set(userData);
      console.log('User added!');
    } catch (error) {
      console.error('Firestore error:', error);
    }
  };

  return {
    state,
    handleChange,
    handleSignUp,
    isChecked,
    setIsChecked,
    isLoading,
  };
};
