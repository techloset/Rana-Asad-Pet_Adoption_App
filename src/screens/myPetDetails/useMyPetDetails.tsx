import {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch} from '../../store/store';
import {firebase} from '@react-native-firebase/firestore';
import {removeDonationPet} from '../../store/slice/donationPetsSlice';
import {DonationPetData} from '../../constants/types';
import {RootStackparams} from '../../navigation/stack/StackNavigation';
import {showToast} from '../../components/toast/Toast';

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
  };

  useEffect(() => {
    navigation.setOptions({title: pet.petType});
  }, [navigation, pet]);

  const handleDeleteItem = (uid: string) => {
    firebase
      .firestore()
      .collection('donationPets')
      .doc(uid)
      .delete()
      .then(() => {
        showToast('success', 'Success', 'Document successfully deleted!');
        dispatch(removeDonationPet(uid));
        navigation.navigate('MyDonations');
      })
      .catch((error: string) => {
        console.error('Error removing document: ', error);
      });
  };

  return {handleDeleteItem};
};

export default useMyPetDetails;
