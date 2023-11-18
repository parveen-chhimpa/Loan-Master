import React, { useState, useEffect } from 'react';
import {
    View, Text, StatusBar, TouchableOpacity, StyleSheet, Platform,
    TouchableNativeFeedback, ImageBackground, Image, AsyncStorage, ScrollView, Button, Share, Linking, ActivityIndicator
} from 'react-native';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync
} from 'expo-ads-admob';


const DocView = (props) => {
    const [spin, setspin] = useState(true);

    const bannerError = (e) => {
        console.log(e);
    }
    let image = props.navigation.state.params.link;
    let onShare = async () => {
        setspin(false);
        if (!(await Sharing.isAvailableAsync())) {
            alert(`Uh oh, sharing isn't available on your platform`);
            return;
        }
        const fileName = image.split('/').pop();
        // const newPath = FileSystem.documentDirectory + fileName;

        FileSystem.downloadAsync(
            image,
            FileSystem.documentDirectory + fileName
        )
            .then(({ uri }) => {
                //   console.log('Finished downloading to ', uri);
                setspin(true);
                Sharing.shareAsync(uri);
            })
            .catch(error => {
                console.error(error);
            });
        console.log('shsws');
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
        <View style={{ padding: 10, paddingRight: 30 }}>
            <View style={{ height: '100%', width: '100%', marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd', backgroundColor: 'white', borderRadius: 5 }}>
                <Image source={{ uri: props.navigation.state.params.link }}
                    style={{ width: '100%', height: '70%', resizeMode: 'cover' }}
                />
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

                {spin ? (
                    // <TouchableOpacity
                    //     onPress={onShare}
                    //     style={styles.UploadBt1}
                    // >
                    //     <View style={{ alignItems: 'center' }}>
                    //         <Text style={{ fontSize: 17, textAlign: 'center', color: 'white' }}>
                    //             <Icon name='share-alt'
                    //                 style={{ fontSize: 20, paddingLeft: 20, }}
                    //             />
                    //             <Text>    </Text>
                    //      SHARE IMAGE</Text>
                    //     </View>
                    // </TouchableOpacity>
                    <View style={styles.container}>
                    {
                        spin?(
                            <TouchableOpacity
                                onPress = { onShare }
                                style = { styles.UploadBt }
                                >
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>
                                        <Icon name='share-alt'
                                            style={{ fontSize: 20, paddingLeft: 20, }}
                                        />
                                        <Text>    </Text>
                                 SHARE IMAGE</Text>
                                </View>
                            </TouchableOpacity>
                        ) :
                            (
                                <ActivityIndicator size="large" color='blue' />
                            )
                        }
        
                        <TouchableOpacity
                        onPress={onShareLink}
                        style={styles.UploadBt1}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>
                                <Icon name='share-alt'
                                    style={{ fontSize: 20, paddingLeft: 20, }}
                                />
                                <Text>    </Text>
                                 SHARE LINK</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                ) :
                    (
                        <ActivityIndicator size="large" color='blue' />
                    )
                }

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
                    adUnitID="ca-app-pub-6875583242897347/3375030505"
                    // servePersonalizedAds={false}
                    onDidFailToReceiveAdWithError={(e) => bannerError(e)}
                />

            </View>
        </View>
    )
}
export default DocView;

const styles = StyleSheet.create({
    UploadBt: {
        // borderBottomWidth : 1,
        backgroundColor: '#32CD32',
        // width: 150,
        padding: 10,
        marginTop: 30,
        borderRadius: 6,
    },
    UploadBt1: {
        // borderBottomWidth : 1,
        backgroundColor: '#4169E1',
        // width: 150,
        padding: 10,
        marginTop: 30,
        borderRadius: 6,
    },
    logo1: {
        width: "100%",
        height: 90,
        margin: 10,
        resizeMode: 'stretch',
    },
    container: {
        // marginTop: 50 ,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})