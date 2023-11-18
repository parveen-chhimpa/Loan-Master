import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  AsyncStorage,
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

const Wallet = () => {
  const bannerError = (e) => {
    console.log(e);
  };

  //   const [id, setId] = useState(null);
  // let mobileNo = "";
  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      //   console.log("dkdjfkejt" + transformedData.partnerCode);
      // partnerCode = transformedData.partnerCode;
      //   setId(transformedData.partnerCode);
      get(transformedData.partnerCode);
    };
    tryLogin();
  }, []);

  async function get(partnerCode) {
    const response = await fetch(
      `http://www.easyloansco.com/connect/items/comm.php?partnercode=${partnerCode}`
    );
    const resData = await response.json();
    console.log(resData);
    // setData(resData);
    settincome(resData.partner[0].tincome);
    setwincome(resData.partner[0].wincome);
    setMyEarning(resData.partner[0].myincome);
    setrearning(resData.partner[0].refincome);
  }

  const [tincome, settincome] = useState(null);
  const [rearning, setrearning] = useState(null);
  const [wincome, setwincome] = useState(null);
  const [myEarning, setMyEarning] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          margin: 20,
          backgroundColor: "white",
          backgroundColor: "#4169E1",
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
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 18 }}>Total earnings</Text>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 25 }}>
              ₹ {tincome ? tincome : "0"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
            elevation: 1,
            alignItems: "center",
            paddingTop: 5,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 18 }}>Wallet Balance</Text>
            <Text style={{ color: "white", fontSize: 12 }}>
              Payable in next payment cycle
            </Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>₹ {wincome ? wincome : "0"}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
            elevation: 1,
            alignItems: "center",
            paddingTop: 5,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 18 }}>My Earning</Text>
            <Text style={{ color: "white", fontSize: 12 }}>
              Earning through loan leads
            </Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>
              ₹ {myEarning ? myEarning : "0"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
            elevation: 1,
            alignItems: "center",
            paddingTop: 5,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 18 }}>
              Referral Earning
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>
              Earning through refer
            </Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>
              ₹ {rearning ? rearning : "0"}
            </Text>
          </View>
        </View>
      </View>
      {/* <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <AdMobBanner
                    style={{
                        position: 'absolute',
                        bottom: 0,
                    }}
                    bannerSize="banner"
                    adUnitID="ca-app-pub-6875583242897347/6190263086"
                    onDidFailToReceiveAdWithError={(e) => bannerError(e)}
                />
            </View> */}
    </View>
  );
};

Wallet.navigationOptions = (navData) => {
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
  };
};

export default Wallet;
