// let {email, password} = state;

// if (!email) {
//   return Alert.alert('please enter email correctly');
// }
// if (password.length < 6) {
//   return Alert.alert('please enter password correctly');
// }

// auth()
//   .signInWithEmailAndPassword(email, password)
//   .then(userCredential => {
//     const user = userCredential.user;
//     navigation.navigate('ForgotPassword');
//     console.log('login user', user);
//     console.log('User account signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/invalid-email') {
//       Alert.alert('That email address is invalid!');
//       console.log('That email address is invalid!');
//     }
//     Alert.alert('Login Error', error);
//     console.error('error => ', error);
//   });
