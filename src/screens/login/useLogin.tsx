import {Alert} from 'react-native';
import {useState} from 'react';
import {LoginScreenProps, UserData} from '../../constants/types';
import {useAppDispatch} from '../../store/Store';
import {fetchUserDataSuccess} from '../../store/slice/Slice';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const initialState = {email: '', password: ''};

export const useLogin = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = (name: string, value: string) => {
    setState(s => ({...s, [name]: value}));
  };

  const handleNavigationToLogin = () => {
    navigation.navigate('SignUp');
  };
  const handleNavigationToForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = async () => {
    let {email, password} = state;

    if (!email) {
      return Alert.alert('please enter email correctly');
    }
    if (password.length < 6) {
      return Alert.alert('please enter password correctly');
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      console.log('login UID', user.uid);

      if (user) {
        const userData = await fetchUserData(user.uid);
        if (userData) {
          dispatch(fetchUserDataSuccess(userData));
          //   navigation.navigate('ForgotPassword');
        } else {
          console.log('user fetch not found!');
        }
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
        console.log('That email address is invalid!');
      } else {
        console.error('Error signing in:', error);
      }
    }
  };

  const fetchUserData = async (uid: string) => {
    try {
      const userRef = firestore().collection('Users').doc(uid); // Use firestore module
      const doc = await userRef.get();

      if (doc.exists) {
        const userData = doc.data();
        return userData as UserData;
      } else {
        console.log('No user data found!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  return {
    state,
    handleChange,
    handleLogin,
    handleNavigationToForgot,
    handleNavigationToLogin,
  };
};

export default useLogin;
// -----------------------------------------------------
// User
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({email, password}: SignIn, {dispatch}) => {
//     dispatch(setLoading(true));
//     try {
//       if (!email || !password) {
//         throw new Error('Please enter all fields');
//       }
//       const userCredential = await auth().signInWithEmailAndPassword(
//         email,
//         password,
//       );
//       const currentUser = userCredential?.user;

//       if (currentUser) {
//         dispatch(
//           setUser({
//             ...currentUser,
//             displayName: currentUser?.displayName || '',
//             email: currentUser?.email || '',
//           }),
//         );
//       }
//       ToastAndroid.show('User logged in success!', ToastAndroid.SHORT);
//     } catch (error: any) {
//       dispatch(setError(error.message));
//       throw new error();
//     } finally {
//       dispatch(setLoading(false));
//     }
//   },
// ); please explain this code line by line

// ------------------------------------------

// import {Alert} from 'react-native';
// import {useState} from 'react';
// import {LoginScreenProps, UserData} from '../../constants/types';
// import {useAppDispatch} from '../../store/Store';
// import {fetchUserDataSuccess} from '../../store/slice/Slice';
// import auth from '@react-native-firebase/auth';

// const initialState = {email: '', password: ''};

// export const useLogin = ({navigation}: LoginScreenProps) => {
//   const dispatch = useAppDispatch();
//   const [state, setState] = useState(initialState);

//   const handleChange = (name: string, value: string) => {
//     setState(prevState => ({...prevState, [name]: value}));
//   };

//   const handleNavigationToLogin = () => {
//     navigation.navigate('SignUp');
//   };

//   const handleNavigationToForgot = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const handleLogin = async () => {
//     const {email, password} = state;

//     if (!email || !password) {
//       return Alert.alert('Please enter both email and password');
//     }

//     try {
//       const userCredential = await auth().signInWithEmailAndPassword(
//         email,
//         password,
//       );
//       const currentUser = userCredential?.user;
//       console.log('currect User Data', currentUser);

//       if (currentUser) {
//         dispatch(
//           fetchUserDataSuccess({
//             uid: currentUser.uid,
//             email: currentUser.email || '',
//             userName: currentUser.displayName || '',
//             password: currentUser.passwor || '',
//             photoURL: currentUser.displayName || '',
//           }),
//         );
//         navigation.navigate('ForgotPassword');
//       } else {
//         throw new Error('Failed to sign in');
//       }
//     } catch (error: any) {
//       Alert.alert('Error', error.message || 'An error occurred during sign-in');
//     }
//   };

//   return {
//     state,
//     handleChange,
//     handleLogin,
//     handleNavigationToForgot,
//     handleNavigationToLogin,
//   };
// };

// export default useLogin;
