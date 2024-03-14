import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackparams} from '../navigation/stack/StackNavigation';

export interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackparams, 'SignUp'>;
}

export type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackparams, 'SignUp'>;
};

export interface User {
  uid: string;
  userName: string;
  email: string;
  password: string;
  photoURL: string;
  loading: boolean;
  error: AuthError | null;
}

export interface AuthError {
  code: string;
  message: string;
}

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: AuthError | null;
};
