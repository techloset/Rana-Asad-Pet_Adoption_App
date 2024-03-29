import {useEffect} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import {
  fetchCollectionData,
  removeDonationPet,
} from '../../store/slice/donationPetsSlice';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {showToast} from '../../components/toast/Toast';

const useMyDonations = () => {
  const dispatch = useAppDispatch();
  const donationData = useAppSelector(state => state.donationPets.data);
  const loading = useAppSelector(state => state.donationPets.loading);
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
        showToast('success', 'Success', 'Your pet successfully deleted');
        dispatch(removeDonationPet(uid));
      })
      .catch((error: string) => {
        showToast('error', 'Error', 'Error in pet deleting');
      });
  };

  return {
    filteredDonationData,
    handleDeleteItem,
    loading,
  };
};

export default useMyDonations;
