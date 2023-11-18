import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";
import * as authActions from "../../../store/actions/auth";
import { useDispatch } from "react-redux";

const Loader = (props) => {
  // const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const checkAgent = async (userData) => {
    try {
      // console.log(userData);
      // const response = await fetch(`https://my-client-project-273516.firebaseio.com/addNewApplication/${id}.json`);
      const response = await fetch(
        `http://www.easyloansco.com/connect/items/checkagentnew.php?id=${userData.partnerCode}`
      );
      const res = await response.json();
      console.log(res);
      if (res.message === "Ok") {
        alert("Welcome to Easy Loan");
      } else {
        dispatch(authActions.logout());
        // Alert.alert("Update Successfull ! Please Login Again. ")
        props.navigation.navigate("Welcome");
      }
      // setUser(res.agent[0]);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      // console.log('kvhhvhj'+transformedData);
      checkAgent(transformedData);
      props.navigation.replace("Dashboard", { data: transformedData });
    };
    tryLogin();
  }, []);
  // if(userData){
  //     props.navigation.replace('Dashboard', {data: userData });
  // }
  // conso
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
Loader.navigationOptions = (navData) => {
  return {
    // hearderTitle: ()=>'New Application',
    title: "",
    headerStyle: {
      // backgroundColor: '#00419A',
      height: 0,
    },
    headerTintColor: "white",
  };
};
