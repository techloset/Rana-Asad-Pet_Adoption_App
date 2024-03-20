import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackparams} from '../navigation/stack/StackNavigation';
import {RouteProp} from '@react-navigation/native';

export interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackparams, 'SignUp'>;
}

export type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackparams, 'SignUp'>;
};

type DetailsScreenRouteProp = RouteProp<RootStackparams, 'Details'>;

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackparams,
  'Details'
>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

export interface DonationScreen {
  petType: string;
  vaccinated: string;
  gender: string;
  petBreed: string;
  amount: string;
  uid: string;
  weight: string;
  location: string;
  description: string;
  image: string;
  userUID: string;
  currentUserEmail: string;
  userPhotoURL: string;
  currentUserName: string;
}

export interface AddToFavoriteTypes {
  petType: string;
  vaccinated: string;
  gender: string;
  petBreed: string;
  amount: string;
  uid: string;
  weight: string;
  location: string;
  description: string;
  image: string;
}

export interface AddToFavorite {
  cart: AddToFavoriteTypes[];
}

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
  email: string;
}

export interface DonationPetState {
  data: DonationPetData[];
  loading: boolean;
  error: string | null;
}
