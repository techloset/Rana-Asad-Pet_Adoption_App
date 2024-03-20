import {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch} from '../../store/Store';
import {firebase} from '@react-native-firebase/firestore';
import {removeDonationPet} from '../../store/slice/donationPetsSlice';
import {DonationPetData} from '../../constants/types';
import {RootStackparams} from '../../navigation/stack/StackNavigation';

type DetailsScreenRouteProp = RouteProp<RootStackparams, 'MyPetDetails'>;
type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackparams,
  'MyPetDetails'
>;

type UseMyPetDetailsProps = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const useMyPetDetails = ({route, navigation}: UseMyPetDetailsProps) => {
  const dispatch = useAppDispatch();
  const {pet}: {pet: DonationPetData} = route.params || {
    pet: {} as DonationPetData,
  }; // Provide a default value for pet

  useEffect(() => {
    navigation.setOptions({title: pet.petType});
  }, [navigation, pet]);

  const handleGoToBack = () => {
    navigation.goBack();
  };

  const handleDeleteItem = (uid: string) => {
    firebase
      .firestore()
      .collection('donationPets')
      .doc(uid)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        dispatch(removeDonationPet(uid));
        navigation.navigate('MyDonations');
      })
      .catch((error: string) => {
        console.error('Error removing document: ', error);
      });
  };

  return {handleGoToBack, handleDeleteItem};
};

export default useMyPetDetails;
