import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
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

const ContactUs = () => {
  const bannerError = (e) => {
    console.log(e);
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          margin: 15,
          borderRadius: 7,
        }}
      >
        <Text style={Styles.text1}>Address</Text>
        <Text style={Styles.text2}>
          Address : Patiala Road Near Harihar Honda Agency above Advento Gym,
          Sunam, Distt Sangrur(IND)
        </Text>
        <Text style={Styles.text1}>Reach us at :</Text>
        <Text style={Styles.text2}>info@easyloansco.com</Text>
        <Text style={Styles.text1}>Contact Number</Text>
        <Text style={Styles.text2}>+91-9517726154</Text>
        <Text style={Styles.text1}>Landline</Text>
        <Text style={Styles.text2}>0167-6512832</Text>
      </View>
      {/* <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
                // marginBottom: 36
            }}>
                <AdMobBanner
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        // width:'100%'
                        // marginBottom: 50
                    }}
                    bannerSize="banner"
                    adUnitID="ca-app-pub-6875583242897347/8627357189"
                    // servePersonalizedAds={false}
                    onDidFailToReceiveAdWithError={(e) => bannerError(e)}
                />

            </View> */}
    </View>
  );
};

ContactUs.navigationOptions = (navData) => {
  return {
    title: "Contact Us",
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
const Styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    color: "#4169E1",
    marginTop: 10,
  },
  text2: {
    fontSize: 15,
  },
});
export default ContactUs;
