import {useEffect, useState} from 'react';
import {useAppSelector} from '../../store/store';
import {RequestPetData} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';
import {BackHandler, Linking} from 'react-native';
import {showToast} from '../../components/toast/Toast';
import {useNavigation} from '@react-navigation/native';

const useDonationRequest = () => {
  const navigation = useNavigation();
  const [requestData, setRequestData] = useState<RequestPetData[]>([]);
  const userData = useAppSelector(state => state.user.userData);

  useEffect(() => {
    const handleBackPress = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => backHandler.remove();
  }, [navigation]);

  const handleSendEmailMessage = (email: string) => {
    const mailtoLink = `mailto:${email}`;
    Linking.openURL(mailtoLink)
      .then()
      .catch(error => {
        showToast(
          'error',
          'Error',
          'Failed to open Gmail. Please make sure you have Gmail installed.',
        );
      });
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('adoptedPets')
      .onSnapshot(snapshot => {
        const data: RequestPetData[] = snapshot.docs.map(doc => ({
          petType: doc.data().petType,
          uid: doc.id,
          petBreed: doc.data().petBreed,
          vaccinated: doc.data().vaccinated,
          gender: doc.data().gender,
          weight: doc.data().weight,
          amount: doc.data().amount,
          location: doc.data().location,
          description: doc.data().description,
          image: doc.data().image,
          petUserEmail: doc.data().petUserEmail,
          petUserName: doc.data().petUserName,
          petUserUID: doc.data().petUserUID,
          petUserPhotoURL: doc.data().petUserPhotoURL,
          userEmail: doc.data().userEmail,
          userName: doc.data().userName,
          userPhotoURL: doc.data().userPhotoURL,
          userUID: doc.data().userUID,
          adoptedDate: doc.data().adoptedDate,
        }));
        const filteredData = data.filter(
          item => item.petUserEmail === userData?.email,
        );
        setRequestData(filteredData);
      });

    return () => unsubscribe();
  }, []);

  return {requestData, handleSendEmailMessage};
};

export default useDonationRequest;
