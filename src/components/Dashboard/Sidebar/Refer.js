import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
  Linking,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
import Icon from "react-native-vector-icons/FontAwesome";
// import * as Sharing from 'expo-sharing';
import { Share, Button } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
// import * as Clipboard from "expo-clipboard";

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import { TextInput } from "react-native-gesture-handler";

const Refer = () => {
  // console.log(props);
  const bannerError = (e) => {
    console.log(e);
  };
  // let mobileNo = '';
  const [id, setId] = useState(null);
  const [mobileNo, setmobileNo] = useState(null);
  const [email, setemail] = useState(null);
  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      // console.log('dkdjfkejt'+transformedData);
      setId(transformedData.partnerCode);
      setmobileNo(transformedData.userMobileNumber);
      setemail(transformedData.id);
      const m = transformedData.userMobileNumber;
      setImg(
        "http://www.easyloansco.com/connect/items/destination/" +
          transformedData.userMobileNumber +
          "/qr.png"
      );
      setIsLoading(false);
    };
    tryLogin();
  }, []);

  let onShare = async () => {
    try {
      await Share.share({
        message: `https://play.google.com/store/apps/details?id=com.loan.bansal_associates_loan  Use Refer Code (${id})`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState("");

  // useEffect(() => {
  //   const tryLogin = async () => {
  //     const user = await AsyncStorage.getItem("userData");
  //     const transformedData = JSON.parse(user);
  //     //   console.log("dkdjfkejt" + transformedData);
  //     //   mobileNo = transformedData.userMobileNumber;
  //     id = transformedData.userMobileNumber;
  //     const m = transformedData.userMobileNumber;
  //     setImg(
  //       "http://www.easyloansco.com/connect/items/destination/" +
  //         transformedData.userMobileNumber +
  //         "/certi.jpeg"
  //     );
  //     //   console.log("dkdjfkejt" + transformedData.userMobileNumber);
  //     setIsLoading(false);
  //   };
  //   tryLogin();
  // }, []);

  const [spin, setspin] = useState(true);

  let onShare1 = async () => {
    setspin(false);
    // console.log("1");
    try {
      if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }
      const fileName = img.split("/").pop();
      //   console.log(fileName);
      const messageText = "Text that you want to share goes here";
      FileSystem.downloadAsync(img, FileSystem.documentDirectory + fileName)
        .then(({ uri }) => {
          //   Clipboard.setString(
          //     `https://play.google.com/store/apps/details?id=com.loan.bansal_associates_loan  Use Refer Code (${id})`
          //   );
          //   console.log("Finished downloading to ", uri + messageText);
          const options = {
            mimeType: "image/jpeg",
            dialogTitle: messageText,
          };
          // try {
          setspin(true);
          Sharing.shareAsync(uri, options);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.error(err);
    }
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
        <View style={{ alignSelf: "center", width: "85%" }}>
          {/* <Image source={require("../../images/up.png")} style={styles.logo1} /> */}
        </View>
        <View
          style={{
            height: "45%",
            width: "95%",
            marginLeft: 10,
            borderWidth: 0.5,
            borderColor: "#dddddd",
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          {/* <View style={{ flex: 2 }}> */}
          <Image
            source={{ uri: img }}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
            }}
          />
          <View style={Styles.container}>
            <Text style={{ fontSize: 25 }}>Referral Code</Text>
            <TextInput
              style={Styles.input}
              // onChangeText={text => setmobileNo(text)}
              value={id}
              returnKeyType="next"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          {/* </View> */}
        </View>
        {/* <TouchableOpacity
                      onPress={onShare}
                      style={styles.UploadBt}
                  >
                      <View style={{ alignItems: 'center' }}>
                          <Text style={{ fontSize: 17, textAlign: 'center', color: 'white' }}>
                              <Icon name='whatsapp'
                                  style={{ fontSize: 20, paddingLeft: 20, }}
                              />
                              <Text>    </Text>
                               SHARE ON WHATSAPP Or OTHER NETWORKS</Text>
                      </View>
                  </TouchableOpacity> */}
        <View style={Styles.container1}>
          {spin ? (
            <TouchableOpacity onPress={onShare1} style={Styles.UploadBt}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 15, textAlign: "center", color: "white" }}
                >
                  <Icon
                    name="share-alt"
                    style={{ fontSize: 20, paddingLeft: 20 }}
                  />
                  <Text> </Text>
                  SHARE QR CODE
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator size="large" color="blue" />
          )}

          {mobileNo ? (
            <TouchableOpacity onPress={onShare} style={Styles.UploadBt1}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 17, textAlign: "center", color: "white" }}
                >
                  <Icon
                    name="share-alt"
                    style={{ fontSize: 20, paddingLeft: 20 }}
                  />
                  <Text> </Text>
                  SHARE REFER CODE
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator size="small" color="blue" />
          )}

          <TouchableOpacity
            // onPress={onShare1}
            onPress={() =>
              Linking.openURL(
                `http://www.easyloansco.com/viewsub.php?email=${email}`
              )
            }
            style={Styles.UploadBt1}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 17,
                  textAlign: "center",
                  color: "white",
                  //   paddingLeft: 10,
                }}
              >
                <Icon
                  name="share-alt"
                  style={{ fontSize: 20, paddingLeft: 20 }}
                />
                <Text> </Text>
                VIEW SUBPARTNER
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // return (
  //         <View
  //             style={Styles.container}
  //         >
  //             <Text style={{ fontSize: 25 }}>Referral Code</Text>
  //             <TextInput
  //                 style={Styles.input}
  //                 // onChangeText={text => setmobileNo(text)}
  //                 value={id}
  //                 returnKeyType="next"
  //                 editable={false}
  //                 selectTextOnFocus={false}
  //             />

  //             {mobileNo ? (
  //                 <TouchableOpacity
  //                     onPress={onShare}
  //                     style={Styles.UploadBt1}
  //                 >
  //                     <View style={{ alignItems: 'center' }}>
  //                         <Text style={{ fontSize: 17, textAlign: 'center', color: 'white' }}>
  //                             <Icon name='share-alt'
  //                                 style={{ fontSize: 20, paddingLeft: 20, }}
  //                             />
  //                             <Text>    </Text>
  //                          SHARE</Text>
  //                     </View>
  //                 </TouchableOpacity>
  //             ) :
  //                 (
  //                     <ActivityIndicator size="small" color='blue' />
  //                 )
  //             }
  //             <TouchableOpacity
  //                 // onPress={onShare1}
  //                 onPress={() => Linking.openURL(`http://www.easyloansco.com/viewsub.php?email=${email}`)}
  //                 style={Styles.UploadBt1}
  //             >
  //                 <View style={{ alignItems: 'center' }}>
  //                     <Text style={{ fontSize: 17, textAlign: 'center', color: 'white' }}>
  //                         <Icon name='share-alt'
  //                             style={{ fontSize: 20, paddingLeft: 20, }}
  //                         />
  //                         <Text>    </Text>
  //                          VIEW SUBPARTNER</Text>
  //                 </View>
  //             </TouchableOpacity>
  //             {/* <View style={{
  //                 flex: 1,
  //                 justifyContent: 'flex-end',
  //                 alignItems: 'center'
  //             }}>
  //                 <AdMobBanner
  //                     style={{
  //                         position: 'absolute',
  //                         bottom: 0,
  //                     }}
  //                     bannerSize="banner"
  //                     adUnitID="ca-app-pub-6875583242897347/4529627247"
  //                     onDidFailToReceiveAdWithError={(e) => bannerError(e)}
  //                 />
  //             </View> */}
  //         </View>
  //     )
};

Refer.navigationOptions = (navData) => {
  return {
    title: "Refer And Earn",
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
  logtext1: {
    fontSize: 20,
    color: "#4169E1",
    marginTop: 10,
  },
  text2: {
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    // marginTop: 50 ,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    // borderBottomWidth: 1,
    //white        // color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 0.2,
    borderColor: "lightgrey",
    marginTop: 5,
    elevation: 2,
    borderRadius: 5,
    marginBottom: 40,
    width: 200,
    color: "#1E90EF",
    textAlign: "center",
  },
  UploadBt1: {
    // borderBottomWidth : 1,
    backgroundColor: "#1E90EF",
    // width: 150,
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    width: 250,
  },
  UploadBt: {
    // borderBottomWidth : 1,
    backgroundColor: "#32CD32",
    // width: 150,
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    // height: 150,
    width: 250,
  },
});
export default Refer;
