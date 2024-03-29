import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {LoginScreenProps, State, User} from '../../constants/types';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {showToast} from '../../components/toast/Toast';

export const useSignUp = ({navigation}: LoginScreenProps) => {
  const [isChecked, setIsChecked] = useState(false);
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
      return showToast('error', 'Error', 'Please enter your name');
    }
    if (!email) {
      return showToast('error', 'Error', 'Please enter your email');
    }
    if (!password) {
      return showToast('error', 'Error', 'Please enter your password');
    }

    setIsLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      const user = userCredential.user;
      await createUserProfile(user);
      showToast('success', 'Success', 'User account signed up');
      navigation.navigate('Login');
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        showToast('error', 'Error', 'That email address is invalid!');
      }
      showToast('error', 'Error', 'Error signing up. Please try again.');
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
      photoURL:
        'https://firebasestorage.googleapis.com/v0/b/petadoptionapp-d9647.appspot.com/o/profilePicture.png?alt=media&token=81733297-7f4e-46ca-942a-56081f1c7809',
    };

    try {
      navigation.navigate('Login');
      await firestore().collection('Users').doc(user.uid).set(userData);
      navigation.navigate('Login');
    } catch (error) {
      showToast('error', 'Error', 'Firestore error');
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
