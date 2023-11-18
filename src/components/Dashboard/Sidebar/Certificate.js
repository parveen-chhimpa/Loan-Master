import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
  AsyncStorage,
  ScrollView,
  Button,
  ActivityIndicator,
  Share,
} from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import Icon from "react-native-vector-icons/FontAwesome";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
// import ImageMarker from "react-native-image-marker";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
// import * as Clipboard from "expo-clipboard";

let id = "";

const Certificate = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState("");

  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      //   console.log("dkdjfkejt" + transformedData);
      //   mobileNo = transformedData.userMobileNumber;
      id = transformedData.userMobileNumber;
      const m = transformedData.userMobileNumber;
      setImg(
        "http://www.easyloansco.com/connect/items/destination/" +
          transformedData.userMobileNumber +
          "/certi.jpeg"
      );
      //   console.log("dkdjfkejt" + transformedData.userMobileNumber);
      setIsLoading(false);
    };
    tryLogin();
  }, []);

  //   if (isLoading) {
  //     return (
  //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //         <ActivityIndicator size="large" />
  //       </View>
  //     );
  //   }

  const [spin, setspin] = useState(true);
  //   let image =
  //     "http://www.easyloansco.com/connect/items/destination/" +
  //     img +
  //     "/certi.jpeg";
  //   console.log(img);
  //   console.log(props.navigation.state.params.data.userMobileNumber);

  let onShare = async () => {
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
          //     "Glad to be your financial advisor. Reach out to me for any Loan related information. Thanks"
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

  let onShareLink = async () => {
    try {
      await Share.share({
        message: `http://www.fairdealus.com/application/newapplication.php?id=${id}`,
      });

      // if (result.action === Share.sharedAction) {
      //     if (result.activityType) {
      //         // shared with activity type of result.activityType
      //     } else {
      //         // shared
      //     }
      // } else if (result.action === Share.dismissedAction) {
      //     // dismissed
      // }
    } catch (error) {
      alert(error.message);
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
            height: "65%",
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
        <View style={styles.container}>
          {spin ? (
            <TouchableOpacity onPress={onShare} style={styles.UploadBt}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 15, textAlign: "center", color: "white" }}
                >
                  <Icon
                    name="share-alt"
                    style={{ fontSize: 20, paddingLeft: 20 }}
                  />
                  <Text> </Text>
                  SHARE IMAGE
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator size="large" color="blue" />
          )}

          {/* <TouchableOpacity onPress={onShareLink} style={styles.UploadBt1}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ fontSize: 15, textAlign: "center", color: "white" }}
              >
                <Icon
                  name="share-alt"
                  style={{ fontSize: 20, paddingLeft: 20 }}
                />
                <Text> </Text>
                SHARE LINK
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

  //   return (
  //     <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
  //       <View style={{ alignSelf: "center", width: "85%" }}>
  //         {/* <Image source={require("../../images/up.png")} style={styles.logo1} /> */}
  //       </View>
  //       <View
  //         style={{
  //           height: "65%",
  //           width: "95%",
  //           marginLeft: 10,
  //           borderWidth: 0.5,
  //           borderColor: "#dddddd",
  //           backgroundColor: "white",
  //           borderRadius: 5,
  //         }}
  //       >
  //         {/* <View style={{ flex: 2 }}> */}
  //         <Image
  //           source={{ uri: img }}
  //           style={{ flex: 1, width: null, height: null, resizeMode: "stretch" }}
  //         />
  //         {/* </View> */}
  //       </View>
  //       {/* <TouchableOpacity
  //                 onPress={onShare}
  //                 style={styles.UploadBt}
  //             >
  //                 <View style={{ alignItems: 'center' }}>
  //                     <Text style={{ fontSize: 17, textAlign: 'center', color: 'white' }}>
  //                         <Icon name='whatsapp'
  //                             style={{ fontSize: 20, paddingLeft: 20, }}
  //                         />
  //                         <Text>    </Text>
  //                          SHARE ON WHATSAPP Or OTHER NETWORKS</Text>
  //                 </View>
  //             </TouchableOpacity> */}
  //       <View style={styles.container}>
  //         {spin ? (
  //           <TouchableOpacity onPress={onShare} style={styles.UploadBt}>
  //             <View style={{ alignItems: "center" }}>
  //               <Text
  //                 style={{ fontSize: 15, textAlign: "center", color: "white" }}
  //               >
  //                 <Icon
  //                   name="share-alt"
  //                   style={{ fontSize: 20, paddingLeft: 20 }}
  //                 />
  //                 <Text> </Text>
  //                 SHARE IMAGE
  //               </Text>
  //             </View>
  //           </TouchableOpacity>
  //         ) : (
  //           <ActivityIndicator size="large" color="blue" />
  //         )}

  //         <TouchableOpacity onPress={onShareLink} style={styles.UploadBt1}>
  //           <View style={{ alignItems: "center" }}>
  //             <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
  //               <Icon
  //                 name="share-alt"
  //                 style={{ fontSize: 20, paddingLeft: 20 }}
  //               />
  //               <Text> </Text>
  //               SHARE LINK
  //             </Text>
  //           </View>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
};
export default Certificate;

Certificate.navigationOptions = (navData) => {
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
    title: "Certificate",
  };
};

const styles = StyleSheet.create({
  UploadBt: {
    // borderBottomWidth : 1,
    backgroundColor: "#32CD32",
    // width: 150,
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    // height: 150,
    width: 170,
  },
  UploadBt1: {
    // borderBottomWidth : 1,
    backgroundColor: "#4169E1",
    // width: 150,
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    // height: 150,
    width: 170,
  },
  logo1: {
    width: "100%",
    height: 90,
    margin: 10,
    resizeMode: "stretch",
  },
  container: {
    // marginTop: 50 ,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
