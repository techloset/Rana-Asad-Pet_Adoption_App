import {useEffect} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {
  fetchCollectionData,
  removeDonationPet,
} from '../../store/slice/donationPetsSlice';
import {useAppDispatch, useAppSelector} from '../../store/Store';

const useMyDonations = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const donationData = useAppSelector(state => state.donationPets.data);
  const userData = useAppSelector(state => state.user.userData);

  useEffect(() => {
    dispatch(fetchCollectionData());
  }, []);

  const filteredDonationData = donationData.filter(
    item => item.currentUserEmail === userData?.email,
  );

  const handleDeleteItem = (uid: string) => {
    firebase
      .firestore()
      .collection('donationPets')
      .doc(uid)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        dispatch(removeDonationPet(uid));
      })
      .catch((error: string) => {
        console.error('Error removing document: ', error);
      });
  };

  return {
    filteredDonationData,
    handleDeleteItem,
  };
};

export default useMyDonations;
