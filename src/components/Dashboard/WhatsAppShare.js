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
// import ImageMarker from "react-native-image-marker";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

const WhatsAppShare = (props) => {
  const [spin, setspin] = useState(true);
  let image = props.navigation.state.params.link;
  console.log(props.navigation.state.params.data.userMobileNumber);
  const bannerError = (e) => {
    console.log(e);
  };

  let onShare = async () => {
    setspin(false);
    // console.log("1");
    try {
      if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }
      const fileName = image.split("/").pop();
      // console.log("2");
      FileSystem.downloadAsync(image, FileSystem.documentDirectory + fileName)
        .then(({ uri }) => {
          // console.log('Finished downloading to ', uri);
          // try {
          setspin(true);
          Sharing.shareAsync(uri);

          // }
          // catch (err) {
          //     console.log(err);
          // }
          // console.log("4");
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
        message: `http://www.fairdealus.com/application/newapplication.php?id=${props.navigation.state.params.data.userMobileNumber}`,
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

  return (
    <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      <View style={{ alignSelf: "center", width: "85%" }}>
        <Image source={require("../../images/up.png")} style={styles.logo1} />
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
          source={{ uri: props.navigation.state.params.link }}
          style={{ flex: 1, width: null, height: null, resizeMode: "stretch" }}
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

        <TouchableOpacity onPress={onShareLink} style={styles.UploadBt1}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
              <Icon
                name="share-alt"
                style={{ fontSize: 20, paddingLeft: 20 }}
              />
              <Text> </Text>
              SHARE LINK
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{
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
                adUnitID="ca-app-pub-6875583242897347/5610816803"
                // servePersonalizedAds={false}
                onDidFailToReceiveAdWithError={(e) => bannerError(e)}
            />

        </View>
    </View>
  );
};
export default WhatsAppShare;

WhatsAppShare.navigationOptions = (navData) => {
  return {
    // hearderTitle: ()=>'New Application',
    title: "SHARE",
    headerTitleStyle: {
      color: "white",
    },
    headerStyle: {
      backgroundColor: "#1E90EF",
    },
    headerTintColor: "white",
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
