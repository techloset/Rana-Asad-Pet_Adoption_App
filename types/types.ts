import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackparams} from '../src/navigation/stack/StackNavigation';

export interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackparams, 'SignUp'>;
}
