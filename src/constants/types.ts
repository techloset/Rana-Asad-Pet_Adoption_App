import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackparams} from '../navigation/stack/StackNavigation';

export interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackparams, 'SignUp'>;
}

export type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackparams, 'SignUp'>;
};

export interface UserData {
  uid: string;
  userName: string;
  password: string;
  photoURL: string;
  email: string;
}

export interface UserState {
  userData: UserData | null;
  isLoading: boolean;
  error: string | null;
}
