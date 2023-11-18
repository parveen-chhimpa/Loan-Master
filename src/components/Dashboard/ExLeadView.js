import React, { useState, useEffect, useCallback, Component } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import call from "react-native-phone-call";
import Icon from "react-native-vector-icons/FontAwesome";

const ExLeadView = (props) => {
  const [data, setData] = useState(null);
  const [mobile, setMobile] = useState(null);
  useEffect(() => {
    setData(props.navigation.state.params.data);
    setMobile(props.navigation.state.params.data.mobileNo);
  }, []);

  // if (data) {
//   console.log(data);
  const args = {
    number: mobile, // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
  };
  // }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {data ? (
        <View style={{ paddingBottom: 30 }}>
          <View style={{ borderBottomWidth: 0.5, paddingBottom: 15 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={styles.text1}>{data.name}</Text>
                {/* <Text style={{ paddingLeft: 30, fontSize: 17, paddingTop: 10 }}>{data.productType}</Text> */}
              </View>
              <View style={{ paddingRight: 30, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={() => call(args)}
                  style={{
                    backgroundColor: "#00419A",
                    padding: 5,
                    borderRadius: 8,
                    paddingLeft: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 0.5,
                    borderColor: "lightblue",
                  }}
                >
                  <Icon
                    name="phone"
                    style={{ fontSize: 18, color: "white", paddingLeft: 0 }}
                  ></Icon>
                  <Text style={{ marginLeft: 7, fontSize: 15,color:'white' }}>Call</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.text1}>
              Loan Amount: ₹ {data.loanAmountRequired}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View style={styles.item}>
              <Text style={styles.text2}>Status: </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.status}</Text>
              {/* <Text style={{paddingLeft:30}}>({data.subtype})</Text> */}
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={styles.text2}>Product type: </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.productType}</Text>
              <Text style={{ paddingLeft: 30 }}>({data.subtype})</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={styles.text2}>Date of Updation </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.dateOfUpdation}</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={styles.text2}>City: </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.city}</Text>
            </View>
          </View>
          {/* <View>
                    <View>
                        <Text style={styles.text2}>District: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.district}</Text>
                    </View>
                </View> */}
          {/* <View>
                    <View>
                        <Text style={styles.text2}>State: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.state}</Text>
                    </View>
                </View> */}
          {/* <View>
                    <View>
                        <Text style={styles.text2}>Pincode </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.pincode}</Text>
                    </View>
                </View> */}
          {/* <View>
                    <View>
                        <Text style={styles.text2}>Gender </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.gender}</Text>
                    </View>
                </View> */}
          {/* <View>
                    <View>
                        <Text style={styles.text2}>Father Name: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.fatherName}</Text>
                    </View>
                </View> */}
          <View style={styles.item}>
            <View>
              <Text style={styles.text2}>Contact No: </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.mobileNo}</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={styles.text2}>Whats App No: </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.whatsAppMobileNo}</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.text2}>Note: </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.fwrap}</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.text2}>Agent Note: </Text>
            </View>
            <View>
              <Text style={styles.text1}>{data.wrap}</Text>
            </View>
          </View>
          {/* <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-around' }}>
                    <View>
                    </View>
                    <View>
                     <Text style={styles.text1}>{data.gender}</Text>
                        <Text style={styles.text1}>{data.fatherName}</Text>
                        <Text style={styles.text1}>{data.mobileNo}</Text>
                        <Text style={styles.text1}>{data.whatsAppMobileNo}</Text>
                        <Text style={styles.text1}>{data.address}</Text>
                    </View>
                </View> */}
        </View>
      ) : null}
    </ScrollView>
  );
};

ExLeadView.navigationOptions = (navData) => {
  return {
    // hearderTitle: ()=>'New Application',
    title: "Lead Info",
    headerTitleStyle: {
      color: "white",
    },
    headerStyle: {
      backgroundColor: "#00419A",
    },
    headerTintColor: "white",
  };
};

const styles = StyleSheet.create({
  text1: {
    paddingLeft: 30,
    fontSize: 17,
    paddingTop: 25,
    marginRight:25,
    // textAlign:'right'
  },
  text2: {
    paddingLeft: 30,
    fontSize: 17,
    paddingTop: 25,
    color: "grey",
    // marginRight: 50,
    // width:'50%'
  },
  item: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ExLeadView;
