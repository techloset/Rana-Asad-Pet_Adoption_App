import Toast from 'react-native-toast-message';

export const showToast = (
  type: 'success' | 'error',
  text1: string,
  text2?: string,
) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2 || '',
    visibilityTime: 3000,
  });
};
