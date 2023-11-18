import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ActivityIndicator,
  AsyncStorage,
  Button,
  FlatList,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

let id = "";

const Payout = () => {
  const bannerError = (e) => {
    console.log(e);
  };

  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      // console.log('dkdjfkejt'+transformedData);
      //   mobileNo = transformedData.userMobileNumber;
      id = transformedData.partnerType;
      // console.log("dkdjfkejt" + transformedData.partnerType);
      setIsLoading(true);
      loadLeads().then(() => {
        setIsLoading(false);
      });
      // setUserData(transformedData);
    };
    tryLogin();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  // const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(null);

  const loadLeads = async () => {
    setError(null);
    // setIsRefreshing(true);
    try {
      const response = await fetch(
        `http://www.easyloansco.com/connect/items/payout.php?type=${id}`
      );
      const res = await response.json();
      console.log(res);
      setData(res.payout);
      // const resData = res.agentleads;
    } catch (err) {
      setError(err.message);
    }
    // setIsRefreshing(false);
  };
  //   useEffect(() => {
  //     setIsLoading(true);
  //     loadLeads().then(() => {
  //       setIsLoading(false);
  //     });
  //   }, []);

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
        <Button
          title="Try again"
          onPress={loadLeads}
          // color={Colors.primary}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // if (!isLoading && leads.length < 1) {
  //     return (
  //         <View style={styles.centered}>
  //             <Text style={{ padding: 15 }}>No products found. Maybe start adding some!</Text>
  //         </View>
  //     );
  // }

  const renderCategory = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        elevation: 1,
        alignItems: "center",
      }}
    >
      <View>
        <Text>{item.type}</Text>
      </View>
      <View>
        <Text style={{ color: "#32CD32" }}>{item.percent}</Text>
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      {data ? (
        <View
          style={{
            margin: 40,
            backgroundColor: "white",
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 15,
              justifyContent: "space-between",
              elevation: 1,
              alignItems: "center",
              backgroundColor: "#4169E1",
              borderRadius: 5,
            }}
          >
            <View>
              <Text style={{ color: "white" }}>Loan Type</Text>
            </View>
            <View>
              <Text style={{ color: "white" }}>Commission</Text>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={renderCategory}
            keyExtractor={(item) => `${item.type}`}
          />
          <View
            style={{
              margin: 10,
              backgroundColor: "lightgrey",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 12 }}>
              E.g. On a Business Laon (for a client)
            </Text>
            <Text style={{ fontSize: 12 }}>
              of ₹10 lacs you will earn ₹5,000
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

Payout.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),

    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      height: 60,
    },
    headerTitleStyle: {
      color: "white",
      fontFamily: "sans-serif",
      // fontSize: 10
    },
    title: "Payout Structure",
  };
};

export default Payout;
