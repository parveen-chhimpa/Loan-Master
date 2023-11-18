import React from 'react';
import {
    View, Text, StatusBar, TouchableOpacity, StyleSheet, Platform,
    TouchableNativeFeedback, ImageBackground, Image, AsyncStorage, ScrollView, Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

const Leaderboard = () => {
    const bannerError = (e) => {
        console.log(e);
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ paddingBottom: 10, fontSize: 20, borderBottomWidth: 1, color: '#191970' }}>Rank</Text>
                        <Text style={styles.text1}>1</Text>
                        <Text style={styles.text1}>2</Text>
                        <Text style={styles.text1}>3</Text>
                        <Text style={styles.text1}>4</Text>
                        <Text style={styles.text1}>5</Text>
                        <Text style={styles.text1}>6</Text>
                        <Text style={styles.text1}>7</Text>
                        <Text style={styles.text1}>8</Text>
                        <Text style={styles.text1}>9</Text>
                        <Text style={styles.text1}>10</Text>
                        <Text style={styles.text1}>11</Text>
                        <Text style={styles.text1}>12</Text>
                    </View>
                    <View>
                        <Text style={{ paddingBottom: 10, fontSize: 20, borderBottomWidth: 1, color: '#191970' }}>Name</Text>
                        <Text style={styles.text2}>Ajay</Text>
                        <Text style={styles.text2}>Varinder</Text>
                        <Text style={styles.text2}>sandeep</Text>
                        <Text style={styles.text2}>Sumit</Text>
                        <Text style={styles.text2}>Gurpreet</Text>
                        <Text style={styles.text2}>Karamjeet</Text>
                        <Text style={styles.text2}>Anil</Text>
                        <Text style={styles.text2}>Rishi</Text>
                        <Text style={styles.text2}>Anil</Text>
                        <Text style={styles.text2}>Mohit</Text>
                        <Text style={styles.text2}>Manoj</Text>
                        <Text style={styles.text2}>Nikhil</Text>
                    </View>
                    <View>
                        <Text style={{ paddingBottom: 10, fontSize: 20, borderBottomWidth: 1, color: '#191970' }}>Leads</Text>
                        <Text style={styles.text3}>25</Text>
                        <Text style={styles.text3}>21</Text>
                        <Text style={styles.text3}>18</Text>
                        <Text style={styles.text3}>15</Text>
                        <Text style={styles.text3}>14</Text>
                        <Text style={styles.text3}>12</Text>
                        <Text style={styles.text3}>9</Text>
                        <Text style={styles.text3}>8</Text>
                        <Text style={styles.text3}>5</Text>
                        <Text style={styles.text3}>4</Text>
                        <Text style={styles.text3}>2</Text>
                        <Text style={styles.text3}>1</Text>
                    </View>
                </View>
            </ScrollView>
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
                    adUnitID="ca-app-pub-6875583242897347/6001193842"
                    // servePersonalizedAds={false}
                    onDidFailToReceiveAdWithError={(e) => bannerError(e)}
                />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        color: '#32CD32',
        textAlign: 'center',
        padding: 5
    },
    text2: {
        // color:'#32CD32',
        textAlign: 'left',
        padding: 5
    },
    text3: {
        color: '#4169E1',
        textAlign: 'center',
        padding: 5
    }
})

export default Leaderboard;


Leaderboard.navigationOptions = navData => {
    return {
        // hearderTitle: ()=>'New Application',
        // title: 'Info',
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: '#00419A'
        },
        headerTintColor: 'white'
    }
};