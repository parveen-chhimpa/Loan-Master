import React, { useState, useEffect, useCallback, Component } from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    FlatList,
    Button,
    Platform,
    ActivityIndicator,
    StyleSheet, TouchableOpacity,
    TouchableNativeFeedback, AsyncStorage
} from 'react-native';
import Application from '../Modals/application';
import Colors from '../../constants/Colors';

const ExistingApplication = props => {
    const userData = props.navigation.state.params.data;

    // const [userData, setUserData] = useState("");
    // useEffect(() => {
    //     const tryLogin = async () => {
    //         const user = await AsyncStorage.getItem('userData');
    //         const transformedData = JSON.parse(user);
    //         // console.log(transformedData);
    //         setUserData(transformedData);
    //     };
    //     tryLogin();
    // }, []);

    // const id = useSelector(state => state.auth.userId);

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const [apps, setapps] = useState([]);

    const loadapps = async () => {
        setError(null);
        setIsRefreshing(true);
        // if (userData) {
        try {
            // const response = await fetch(`https://my-client-project-273516.firebaseio.com/addNewApplication/${id}.json`);
            const response = await fetch(`http://www.easyloansco.com/connect/items/readcustfullapp.php?regid=${userData.userMobileNumber}`);
            const res = await response.json();
            const resData = res.cust;
            // setapps(resData);
            console.log(res.cust);
            const loadedapps = [];

            for (const key in resData) {
                loadedapps.push(
                    new Application(
                        key,
                        resData[key].fulladdr,
                        resData[key].city,
                        resData[key].distt,
                        resData[key].fathername,
                        resData[key].loanamt,
                        resData[key].phone,
                        resData[key].name,
                        resData[key].pin,
                        resData[key].producttype,
                        resData[key].productTypevalue,
                        resData[key].state,
                        resData[key].altphone,
                        resData[key].datetime,
                        resData[key].itramount,
                        resData[key].itr,
                        resData[key].bank,
                        resData[key].audit,
                        resData[key].auditamt,
                        resData[key].coappname,
                        resData[key].coappnum,
                        resData[key].corelation,
                        resData[key].country,
                        resData[key].familyincome,
                        resData[key].sex,
                        resData[key].salaryamt,
                        resData[key].rental,
                        resData[key].rentalincome,
                        resData[key].profile,
                        resData[key].monthlyincome,
                        resData[key].email,
                        resData[key].status,
                    )
                );
            }
            setapps(loadedapps);
            // await dispatch(productsActions.fetchProducts());
        } catch (err) {
            setError(err.message);
        }
        // }
        setIsRefreshing(false);
    };
    // console.log(apps);
    useEffect(() => {
        // console.log("getting");
        setIsLoading(true);
        loadapps().then(() => {
            setIsLoading(false);
        });
    }, []);

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>{error}</Text>
                <Button
                    title="Try again"
                    onPress={loadapps}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    if (!isLoading && apps.length < 1) {
        return (
            <View style={styles.centered}>
                <Text style={{ padding: 15 }}>No products found. Maybe start adding some!</Text>
            </View>
        );
    }
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        // <ScrollView>
        //     <View>
        <FlatList
            onRefresh={loadapps}
            refreshing={isRefreshing}
            data={apps}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <View
                    style={styles.card}
                >
                    <View style={styles.touchable}>
                        <TouchableCmp
                            onPress={() => props.navigation.navigate("ExAppView", { data: itemData.item })}
                            useForeground>
                            <View style={{
                                // flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <View style={styles.details}>
                                    <Text
                                        style={styles.title}
                                    >{itemData.item.name}
                                    </Text>
                                    <Text
                                        style={styles.price}
                                    >{itemData.item.productType}
                                    </Text>
                                    <Text
                                        style={styles.price}
                                    >₹ {itemData.item.loanAmountR}
                                    </Text>
                                </View>
                                {itemData.item.status === "Approved" ?
                                    <View>
                                        <Text style={{ color: 'green', margin: 20 }}>{itemData.item.status}</Text>
                                        {/* <Text>{itemData.item.dateOfCreation}</Text> */}
                                    </View>
                                    :
                                    <View>
                                        <Text style={{ color: '#4169E1', margin: 20 }}>{itemData.item.status}</Text>
                                        {/* <Text>{itemData.item.dateOfCreation}</Text> */}
                                    </View>
                                }
                            </View>
                        </TouchableCmp>
                    </View>
                </View>
            )}
        />
    );
};

ExistingApplication.navigationOptions = navData => {
    return {
        headerTitle: 'Application',
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: '#00419A'
        },
        headerTintColor: 'white'
    };
};

const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 7,
        borderRadius: 3,
        backgroundColor: 'white',
        height: 120,
        // height: 300,
        margin: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#4169E1',
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    details: {
        // alignItems: 'center',
        // height: '17%',
        padding: 10
    },
    title: {
        // fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        // fontFamily: 'open-sans',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20
    }
});

export default ExistingApplication;
