import React, { useState, useEffect } from 'react';
import {
    View, Text, StatusBar, TouchableOpacity, StyleSheet, Platform,
    TouchableNativeFeedback, ImageBackground, Image, AsyncStorage, ScrollView, Button
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import { SliderBox } from "react-native-image-slider-box";
import Category from '../Modals/sliderView';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

const Dashboard = (props) => {
    const bannerError = (e) => {
        console.log(e);
    }
    // console.log(props.navigation.state.params.data);
    let mobile = props.navigation.state.params.data.userMobileNumber;
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    const images = [
        'http://www.easyloansco.com/share/slider/1.jpg',
        'http://www.easyloansco.com/share/slider/2.jpg',
        'http://www.easyloansco.com/share/slider/3.jpg',
        'http://www.easyloansco.com/share/slider/4.jpg',
    ];

    return (
        // <View style={styles.mainView}>
        <ScrollView
            style={{ backgroundColor: '#FFFFFF', marginBottom: 20 }}
        // source={require('../../images/allPages.png')}
        >
            <SliderBox
                // ImageComponent={FastImage}
                images={images}
                sliderBoxHeight={200}
                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="lightblue"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'stretch'}
                paginationBoxStyle={{
                    position: "relative",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 5 }}
                imageLoadingColor="#2196F3"
            />
            {/* <Button
                title="Leaderboard"
                onPress={() => props.navigation.navigate('Leaderboard')}
            ></Button> */}
            <View style={{ backgroundColor: "#eeeeee" }}>

                <View style={styles.container}>
                    {/* <Text>Inside Dashboard</Text> */}
                    <StatusBar
                        barStyle='light-content'
                    />
                    {/* <Text>LongCard</Text> */}
                    {/* <View>
                        <TouchableOpacity
                            style={styles.ButtonContainer}
                            onPress={() => { props.navigation.navigate('UploadDocuments') }}
                        >
                            <Image
                                source={require('../../images/newapp1.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.ButtonText}>New Application</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View>
                        <TouchableOpacity
                            style={styles.ButtonContainer}
                            onPress={() => { props.navigation.navigate('ShortApp') }}
                        >
                            <Image
                                source={require('../../images/1.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.ButtonText}>New Lead</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={styles.ButtonContainer}
                            onPress={() => { props.navigation.navigate('ExistingLeads', { data: props.navigation.state.params.data }) }}
                        >
                            <Image
                                source={require('../../images/2.png')}
                                style={styles.logo2}
                            />
                            <Text style={styles.ButtonText}>Existing Leads</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.container}>
                    {/* <Text>Inside Dashboard</Text> */}
                    <StatusBar
                        barStyle='light-content'
                    />
                    {/* <Text>LongCard</Text> */}
                    {/* <View>
                        <TouchableOpacity
                            style={styles.ButtonContainer}
                            onPress={() => { props.navigation.navigate('ExistingApplication', { data: props.navigation.state.params.data }) }}
                        >
                            <Image
                                source={require('../../images/listLogo1.jpg')}
                                style={styles.logo}
                            />
                            <Text style={styles.ButtonText}>Existing Cases</Text>
                        </TouchableOpacity>
                    </View> */}
                    {/* <View >
                        <TouchableOpacity
                            style={styles.ButtonContainer}
                            onPress={() => { props.navigation.navigate('ExistingLeads', { data: props.navigation.state.params.data }) }}
                        >
                            <Image
                                source={require('../../images/2.png')}
                                style={styles.logo2}
                            />
                            <Text style={styles.ButtonText}>Existing Leads</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View>
                    <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20, fontFamily: 'sans-serif' }}>Share in your Network
                    <Text> </Text>
                        <Icon name='share-alt'
                            style={{ fontSize: 20, paddingLeft: 20, }}
                        />
                    </Text>
                </View>
                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/1.jpeg` , data:props.navigation.state.params.data })}
                        >
                            {/* <Category imageUri='http://www.easyloansco.com/share/whatsapp/1.jpg' */}
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/1.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/2.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/2.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/3.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/3.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/4.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/4.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/5.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/5.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/6.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/6.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/7.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/7.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/8.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/8.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/9.jpeg`  , data:props.navigation.state.params.data})}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/9.jpeg'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Share', { link: `http://www.easyloansco.com/connect/items/destination/${mobile}/10.jpeg` , data:props.navigation.state.params.data })}
                        >
                            <Category imageUri='http://www.easyloansco.com/share/whatsapp/10.jpeg'
                            />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View>
                    <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20, fontFamily: 'sans-serif' }}>Loan Document Checklist</Text>
                </View>
                <View style={{ height: 130, marginTop: 20, marginBottom: 50, marginRight: 10 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableCmp
                            onPress={() => props.navigation.navigate('Documents', { link: 'http://www.easyloansco.com/share/checklist/personal.png' })}
                        >
                            <View style={styles.doc}>
                                <View style={{ alignItems: 'center', }}>
                                    <Image
                                        source={require('../../images/personalLoanLogo.jpg')}
                                        style={styles.logo1}
                                    />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>Personal</Text>
                                </View>
                            </View>
                        </TouchableCmp>
                        <TouchableCmp
                            onPress={() => props.navigation.navigate('Documents', { link: 'http://www.easyloansco.com/share/checklist/prop.png' })}
                        >
                            <View style={styles.doc}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require('../../images/propLogo.png')}
                                        style={styles.logo1}
                                    />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>Proprietor</Text>
                                </View>
                            </View>
                        </TouchableCmp>
                        <TouchableCmp
                            onPress={() => props.navigation.navigate('Documents', { link: 'http://www.easyloansco.com/share/checklist/partnership.png' })}
                        >
                            <View style={styles.doc}>
                                <View style={{ alignItems: 'center', }}>
                                    <Image
                                        source={require('../../images/partnerLogo.png')}
                                        style={styles.logo1}
                                    />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>Partnership</Text>
                                </View>
                            </View>
                        </TouchableCmp>
                        <TouchableCmp
                            onPress={() => props.navigation.navigate('Documents', { link: 'http://www.easyloansco.com/share/checklist/privatelimited.png' })}
                        >
                            <View style={styles.doc}>
                                <View style={{ alignItems: 'center', }}>
                                    <Image
                                        source={require('../../images/privateLogo.jpg')}
                                        style={styles.logo1}
                                    />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, textAlign: 'center' }}>Private Limited</Text>
                                </View>
                            </View>
                        </TouchableCmp>
                    </ScrollView>
                </View>
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
                    adUnitID="ca-app-pub-6875583242897347/8204577551"
                    // servePersonalizedAds={false}
                    onDidFailToReceiveAdWithError={(e) => bannerError(e)}
                />
            </View> */}
        </ScrollView>

    )
};


const styles = StyleSheet.create({
    mainView: {
        marginTop: 100,
    },
    ButtonContainer: {
        marginTop: 15,
        backgroundColor: 'white',
        // flex: 1,
        height: 150,
        width: 170,
        // marginLeft:20
        // paddingVertical: 15
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10,
        // borderColor: 'black',
        // borderWidth: .5
        // shadowColor: 'rgba(0,0,0, .4)', // IOS
        // shadowOffset: { height: 1, width: 1 }, // IOS
        // shadowOpacity: 1, // IOS
        // shadowRadius: 1, //IOS
        // backgroundColor: '#fff',
        elevation: 6,
        flexDirection: 'column'
    },
    ButtonText: {
        // padding: 20,
        color: 'black',
        textAlign: 'center',
        // fontFamily: 'serif',
        fontSize: 20,
    },
    container: {
        // marginTop: 50 ,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    img: {
        // height:10,
        // width:10,
        // opacity:0.3,
        flex: 1,
        resizeMode: 'cover',
    },
    logo: {
        // flex:1,
        // marginLeft: 50,
        height: 80,
        width: 80,
    },
    logo2: {
        height: 80,
        width: 80,
    },
    logo1: {
        width: 50,
        height: 60,
        margin: 10
    },
    doc: {
        height: 120,
        width: 100,
        marginLeft: 20,
        borderWidth: 0.3,
        borderColor: '#00BFFF',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 2
    }
});
export default Dashboard;

Dashboard.navigationOptions = (navData) => {
    // console.log(navData.navigation.state.params.data.userName);
    return {
        // title: navData.userN,
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#1E90EF' : '',
            height: 60
        },
        title: "Hi, " + navData.navigation.state.params.data.userName,
        headerTintColor: 'white',
        headerTitleStyle: {
            color: 'white',
            // fontFamily: 'sans-serif'
        },

    }
};


