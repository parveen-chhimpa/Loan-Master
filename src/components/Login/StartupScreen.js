import React, { useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as authActions from '../../../store/actions/auth';

const StartupScreen = props => {
  const dispatch = useDispatch();

 
  // const [data,setData] = useState(null);
  // let userData = null;

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      // setData(userData);
      // console.log(userData.userMobileNumber);
      if (!userData) {
        props.navigation.navigate('Welcome');
        return;
      }
      // checkAgent(userData);

      // const transformedData = JSON.parse(userData);
      // const { token, userId, expiryDate } = transformedData;
      // console.log(userData);
      // const expirationDate = new Date(expiryDate);

      // if (expirationDate <= new Date() || !token || !userId) {
      //   props.navigation.navigate('Welcome');
      //   return;
      // }

      // const expirationTime = expirationDate.getTime() - new Date().getTime();
      // console.log("expirationTime");
      // props.navigation.navigate('Share', { link: 'http://www.easyloansco.com/share/whatsapp/2.jpg' })
      props.navigation.navigate("Loader");
      // dispatch(authActions.authenticate(userId, token, expirationTime));
    };

    tryLogin();
    // }, [dispatch]);
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
