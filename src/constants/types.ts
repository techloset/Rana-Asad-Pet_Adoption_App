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

export interface DonationPetData {
  uid: string;
  petType: string;
  petBreed: string;
  amount: string;
  vaccinated: string;
  gender: string;
  weight: string;
  location: string;
  description: string;
  image: string;
  createAt: string;
  userUID: string | '';
  userPhotoURL: string | '';
  currentUserEmail: string | '';
  currentUserName: string | '';
  like: boolean;
  email: string;
}

export interface DonationPetState {
  data: DonationPetData[];
  loading: boolean;
  error: string | null;
}
