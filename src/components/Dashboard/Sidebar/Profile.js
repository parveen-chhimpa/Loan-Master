import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Picker,
  Button,
  ActivityIndicator,
  Platform,
  AsyncStorage,
  Linking,
} from "react-native";
import * as authActions from "../../../../store/actions/auth";
import { useDispatch } from "react-redux";

const Profile = (props) => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      // console.log(transformedData);
      setUserData(transformedData);
      loadapps(transformedData);
    };
    tryLogin();
  }, []);
  const dispatch = useDispatch();

  const loadapps = async (userData) => {
    try {
      const response = await fetch(
        `http://www.easyloansco.com/connect/items/readagent.php?partnercode=${userData.partnerCode}`
      );
      const res = await response.json();
      // console.log(res);
      setUser(res.partner[0]);
    } catch (err) {
      alert("Please Login Again");
      dispatch(authActions.logout());
      // Alert.alert("Update Successfull ! Please Login Again. ")
      props.navigation.navigate("Welcome");
    }
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          height: 220,
          width: "90%",
          alignItems: "center",
          margin: 20,
          borderRadius: 15,
          elevation: 5,
          padding: 10,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Icon
          name="user-circle"
          style={{ fontSize: 100, alignItems: "center", margin: 10 }}
        />
        {userData ? (
          <View style={{ alignItems: "center" }}>
            <Text>{userData.userName}</Text>
            <Text>{userData.userMobileNumber}</Text>
          </View>
        ) : null}
      </View>
      {user ? (
        <TouchableOpacity
          style={{
            height: 70,
            width: "90%",
            margin: 20,
            padding: 5,
            alignItems: "center",
            borderRadius: 6,
            elevation: 5,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
          }}
          onPress={() =>
            props.navigation.navigate("EditProfile", { data: user })
          }
        >
          <Text>
            <Icon
              name="address-book"
              style={{ fontSize: 15, color: "#1E90EF" }}
            />{" "}
            Update Profile Information{" "}
            <Icon
              name="arrow-right"
              style={{ fontSize: 15, color: "#1E90EF" }}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size="small" color="blue" />
      )}

      <TouchableOpacity
        style={{
          height: 70,
          width: "90%",
          margin: 20,
          padding: 5,
          alignItems: "center",
          borderRadius: 6,
          elevation: 5,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
        // onPress={() => props.navigation.navigate("EditProfile", { data: user })}
        onPress={() =>
          Linking.openURL("http://www.easyloansco.com/updatepass.php")
        }
      >
        <Text>
          <Icon name="key" style={{ fontSize: 15, color: "#1E90EF" }} /> Update
          Password{" "}
          <Icon name="arrow-right" style={{ fontSize: 15, color: "#1E90EF" }} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
Profile.navigationOptions = (navData) => {
  return {
    // headerLeft: () =>
    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //         <Item
    //             title="Menu"
    //             iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
    //             onPress={() => {
    //                 navData.navigation.goBack();
    //             }}
    //         />
    //     </HeaderButtons>,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      height: 60,
    },
    title: "Your Profile",
    // headerTintColor: '#1E90EF',
    headerTitleStyle: {
      color: "white",
      fontFamily: "sans-serif",
      // fontSize: 10
    },
  };
};

export default Profile;
