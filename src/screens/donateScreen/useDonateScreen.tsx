import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {DonationScreen, LoginScreenProps} from '../../constants/types';
import {fetchCollectionData} from '../../store/slice/donationPetsSlice';

const petType = [
  {label: 'Dog', value: 'Dog'},
  {label: 'Cat', value: 'Cat'},
  {label: 'Rabbit ', value: 'Rabbit '},
  {label: 'Horse', value: 'Horse'},
  {label: 'Cavachon dog', value: 'Cavachon dog'},
];
const vaccinatedData = [
  {label: 'Yes', value: 'Yes'},
  {label: 'No', value: 'No'},
];
const genderList = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
];

const useDonateScreen = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name: keyof DonationScreen, value: string) => {
    setState(prevState => ({...prevState, [name]: value}));
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [state, setState] = useState<DonationScreen>({
    petType: '',
    vaccinated: '',
    gender: '',
    petBreed: '',
    amount: '',
    weight: '',
    location: '',
    description: '',
    image: '',
    uid: '',
    currentUserEmail: userData?.email || '',
    userUID: userData?.uid || '',
    userPhotoURL: userData?.photoURL || '',
    currentUserName: userData?.userName || '',
  });

  const handleDonation = async () => {
    setIsLoading(true);
    try {
      const uploadUri = selectedImage!;
      const imageName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

      const storageRef = storage().ref(`images/${imageName}`);
      await storageRef.putFile(uploadUri);

      const imageURL = await storageRef.getDownloadURL();

      await firestore()
        .collection('donationPets')
        .add({
          ...state,
          image: imageURL,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      dispatch(fetchCollectionData());

      setState({
        petType: '',
        vaccinated: '',
        gender: '',
        petBreed: '',
        amount: '',
        weight: '',
        location: '',
        description: '',
        image: '',
        uid: '',
        currentUserEmail: userData?.email || '',
        userUID: userData?.uid || '',
        userPhotoURL: userData?.photoURL || '',
        currentUserName: userData?.userName || '',
      });

      setSelectedImage(null);

      navigation.navigate('Home');
      console.log('Donation added successfully');
    } catch (error) {
      console.log('Error adding donation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        includeBase64: false,
      });
      setSelectedImage(image.path);
      setState(prevState => ({...prevState, image: image.path}));
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    selectedImage,
    handleChange,
    handleDonation,
    handleImagePicker,
    handleGoBack,
    petType,
    vaccinatedData,
    genderList,
    state,
    isLoading,
  };
};

export default useDonateScreen;
