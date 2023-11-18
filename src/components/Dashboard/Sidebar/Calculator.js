import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TextInput,
  ScrollView,
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

const Calculator = () => {
  const bannerError = (e) => {
    console.log(e);
  };
  const [amount, setAmount] = useState("100000");
  const [interest, setinterest] = useState("15");
  const [months, setmonths] = useState("36");
  const [emi, setemi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);
  // console.log(emi);
  useEffect(() => {
    let a = interest / 1200;
    if (a === 0) {
      setemi("0");
      setTotalInterest("0");
      setTotalPayable("0");
      return;
    }
    if (months === "") {
      setemi("0");
      setTotalInterest("0");
      setTotalPayable("0");
      return;
    }
    let b = Math.pow(1 + a, months);
    let val = (amount * a * b) / (b - 1);
    setemi(Math.round(val));
    setTotalInterest(Math.round(val * months - amount));
    setTotalPayable(Math.round(val * months));
    // console.log(val, a, months);
  }, [amount, interest, months]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginBottom: 50 }}>
        <View
          style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 7,
            marginTop: 20,
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
              <Text style={{ color: "#4169E1", fontSize: 18 }}>EMI</Text>
            </View>
            <View>
              <Text style={{ color: "#4169E1", fontSize: 25 }}>
                ₹ {emi < 1 ? "0" : emi}
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
              paddingTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 15 }}>Total Interest</Text>
              <Text style={{ fontSize: 12, color: "#4169E1" }}>
                ₹ {totalInterest}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 15 }}>Total Payable</Text>
              <Text
                style={{ color: "#4169E1", fontSize: 12, textAlign: "right" }}
              >
                ₹ {totalPayable}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 7,
            marginTop: 0,
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
              <Text style={{ fontSize: 12 }}>Loan Amount* (₹)</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                returnKeyType="next"
                keyboardType="numeric"
                onChange={(text) => setAmount(text.nativeEvent.text)}
                maxLength={10}
                value={amount}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 7,
            marginTop: 0,
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
              <Text style={{ fontSize: 12 }}>Loan Rate*</Text>
              <Text style={{ fontSize: 12 }}>(in %)</Text>
              <TextInput
                style={styles.input1}
                returnKeyType="next"
                keyboardType="numeric"
                onChange={(text) => setinterest(text.nativeEvent.text)}
                maxLength={5}
                value={interest}
              />
            </View>
            <View>
              <Text style={{ fontSize: 12 }}>Loan Tenure*</Text>
              <Text style={{ fontSize: 12 }}>(in months)</Text>
              <TextInput
                style={styles.input1}
                returnKeyType="next"
                keyboardType="numeric"
                onChange={(text) => setmonths(text.nativeEvent.text)}
                maxLength={3}
                value={months}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <Text style={{ fontSize: 15, color: "#191970" }}>PRODUCT</Text>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: 15,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
            <Text style={styles.text1}>Home Loan</Text>
            <Text style={styles.text1}>Lap Loan</Text>
            <Text style={styles.text1}>Business Loan</Text>
            <Text style={styles.text1}>(Unsecured)</Text>
            <Text style={styles.text1}>Personal Loan</Text>
            <Text style={styles.text1}>Education Loan</Text>
            <Text style={styles.text1}>Education Loan</Text>
            <Text style={styles.text1}>(Unsecured)</Text>
            <Text style={styles.text1}>Vehicle Loan</Text>
            <Text style={styles.text1}>Old Vehicle Loan</Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 15, color: "#191970", textAlign: "center" }}
            >
              ROI
            </Text>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: 15,
                borderBottomWidth: 1,
                color: "#191970",
                textAlign: "center",
              }}
            >
              (% approx)
            </Text>
            <Text style={styles.text2}>7.50</Text>
            <Text style={styles.text2}>9.50</Text>
            <Text style={styles.text2}>12.50</Text>
            <Text style={styles.text2}></Text>
            <Text style={styles.text2}>12.50</Text>
            <Text style={styles.text2}>9.50</Text>
            <Text style={styles.text2}>12.50</Text>
            <Text style={styles.text2}></Text>
            <Text style={styles.text2}>9.50</Text>
            <Text style={styles.text2}>11</Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, color: "#191970" }}>TENURE</Text>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: 15,
                borderBottomWidth: 1,
                color: "#191970",
                textAlign: "center",
              }}
            >
              (Y)
            </Text>
            <Text style={styles.text3}>15</Text>
            <Text style={styles.text3}>15</Text>
            <Text style={styles.text3}>5</Text>
            <Text style={styles.text3}></Text>
            <Text style={styles.text3}>5</Text>
            <Text style={styles.text3}>10</Text>
            <Text style={styles.text3}>10</Text>
            <Text style={styles.text3}></Text>
            <Text style={styles.text3}>5</Text>
            <Text style={styles.text3}>5</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <AdMobBanner
          style={{
            position: "absolute",
            bottom: 0,
          }}
          bannerSize="banner"
          adUnitID="ca-app-pub-6875583242897347/3326546198"
          servePersonalizedAds={false}
          onDidFailToReceiveAdWithError={(e) => bannerError(e)}
        />
      </View>
    </View>
  );
};

Calculator.navigationOptions = (navData) => {
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

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#F8F8FF",
    overflow: "scroll",
  },
  ButtonContainer: {
    marginTop: 30,
    backgroundColor: "darkorange",
    paddingVertical: 15,
    marginBottom: 80,
  },
  ButtonText: {
    color: "white",
    textAlign: "center",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 0.2,
    borderColor: "#4169E1",
    marginTop: 5,
    elevation: 2,
    borderRadius: 5,
    width: 150,
  },
  input1: {
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 0.2,
    borderColor: "#4169E1",
    marginTop: 5,
    elevation: 2,
    borderRadius: 5,
    width: 80,
  },
  text1: {
    textAlign: "left",
    padding: 7,
  },
  text2: {
    color: "#1E90EF",
    textAlign: "center",
    padding: 7,
  },
  text3: {
    color: "#1E90EF",
    textAlign: "center",
    padding: 7,
  },
});
