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
import Lead from '../Modals/lead';
import Colors from '../../constants/Colors';

const ExistingLeads = props => {

    // console.log(props.navigation.state.params.data);
    // const [userData, setUserData] = useState("");
    const userData = props.navigation.state.params.data;
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
    const [leads, setLeads] = useState([]);

    const loadLeads = async () => {
        setError(null);
        setIsRefreshing(true);
        // if (userData) {
        try {
            // const response = await fetch(`https://my-client-project-273516.firebaseio.com/addLead/${id}.json`);
            const response = await fetch(`http://www.easyloansco.com/connect/items/readcustlead.php?partnercode=${userData.partnerCode}`);
            const res = await response.json();
            const resData = res.agentleads;
            // setLeads(resData);
            // console.log(resData);
            const loadedLeads = [];

            for (const key in resData) {
                loadedLeads.push(
                    new Lead(
                        key,
                        // resData[key].address,
                        resData[key].alt,
                        resData[key].city,
                        // resData[key].distt,
                        // resData[key].fatherName,
                        resData[key].email,
                        resData[key].fwrap,
                        resData[key].loanamt,
                        resData[key].loantype,
                        // resData[key].phone,
                        // resData[key].pincode,
                        resData[key].name,
                        resData[key].phone,
                        resData[key].status,
                        resData[key].subtype,
                        resData[key].updatedon,
                        // resData[key].sex,
                        resData[key].wrap,
                    )
                );
                // console.log(
                //     key,
                //     // resData[key].address,
                //     resData[key].city,
                //     resData[key].distt,
                //     // resData[key].fatherName,
                //     resData[key].loanamt,
                //     resData[key].phone,
                //     resData[key].name,
                //     // resData[key].pincode,
                //     resData[key].producttype,
                //     resData[key].subproducttype,
                //     // resData[key].state,
                //     resData[key].whatsAppMobileNo,
                //     resData[key].dateOfCreation,
                //     resData[key].gender,
                // )
            }
            setLeads(loadedLeads);
            // console.log(loadedLeads);
            // await dispatch(productsActions.fetchProducts());
        } catch (err) {
            setError(err.message);
        }
        // }
        setIsRefreshing(false);
    };
    useEffect(() => {
        // console.log("getting");
        setIsLoading(true);
        loadLeads().then(() => {
            setIsLoading(false);
        });
    }, []);

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>{error}</Text>
                <Button
                    title="Try again"
                    onPress={loadLeads}
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

    if (!isLoading && leads.length < 1) {
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
    // console.log(leads);
    return (
        // <ScrollView>
        //     <View>
        <FlatList
            onRefresh={loadLeads}
            refreshing={isRefreshing}
            data={leads}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <View
                    style={styles.card}
                >
                    <View style={styles.touchable}>
                        <TouchableCmp
                            onPress={() => props.navigation.navigate("ExLeadView", { data: itemData.item })}
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
                                    >₹ {itemData.item.loanAmountRequired}
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
        //     </View>
        // </ScrollView>
    );
};

ExistingLeads.navigationOptions = navData => {
    return {
        headerTitle: 'Leads',
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

export default ExistingLeads;
