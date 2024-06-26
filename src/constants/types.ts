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

export type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

type MyPetDetailsRouteProp = RouteProp<RootStackparams, 'MyPetDetails'>;

type MyPetDetailsNavigationProp = StackNavigationProp<
  RootStackparams,
  'MyPetDetails'
>;

export type MyPetDetailsProps = {
  route: MyPetDetailsRouteProp;
  navigation: MyPetDetailsNavigationProp;
};

export interface State {
  userName: string;
  email: string;
  password: string;
}

export interface User {
  userName: string;
  email: string;
  password: string;
  uid: string;
  photoURL: string;
}

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
  uid: string;
  petBreed: string;
  vaccinated: boolean;
  gender: string;
  weight: number;
  location: string;
  description: string;
  image: string;
  createAt: Date;
  currentUserUID: string | undefined;
  currentUserPhotoURL?: string | undefined;
  currentUserEmail: string | undefined;
  currentUserName: string | undefined;
  amount: number;
}

export interface AddToFavorite {
  favoriteData: AddToFavoriteTypes[];
  loading: boolean;
  error: string | null;
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
export interface searchPet {
  petType: any;
}

export interface RequestPetData {
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
  petUserEmail: string;
  petUserName: string;
  petUserPhotoURL: string;
  petUserUID: string;
  userEmail: string;
  userName: string;
  userPhotoURL: string;
  userUID: string;
  adoptedDate: string;
}

export interface DonationPetState {
  data: DonationPetData[];
  loading: boolean;
  error: string | null;
}

export interface RequestPetState {
  requestData: RequestPetData[];
  loading: boolean;
  error: string | null;
}
