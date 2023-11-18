import React, { useState, useEffect, useCallback, Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    Platform,
    ActivityIndicator,
    StyleSheet, TouchableOpacity,
    TouchableNativeFeedback, ScrollView
} from 'react-native';
import call from 'react-native-phone-call';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExAppView = props => {
    const [data, setData] = useState(null);
    const [mobile, setMobile] = useState(null);
    useEffect(() => {
        setData(props.navigation.state.params.data);
        setMobile(props.navigation.state.params.data.mobileNo);
    }, [])
    console.log(data);
    // if (data) {
    const args = {
        number: mobile, // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    // }
    // console.log(data);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            {data ? <View style={{ paddingBottom: 30 }}>
                <View style={{ borderBottomWidth: .5, paddingBottom: 15, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.text1}>{data.name}</Text>
                            {/* <Text style={{ paddingLeft: 30, fontSize: 17, paddingTop: 10 }}>{data.productType}</Text> */}
                        </View>
                        <View style={{ paddingRight: 30, paddingTop: 30 }}>
                            <TouchableOpacity
                                onPress={() => call(args)}
                                style={{ backgroundColor: '#FFE4B5', padding: 5, borderRadius: 8, paddingLeft: 15, flexDirection: 'row', alignItems: 'center', borderWidth: .5, borderColor: 'orange' }}
                            >
                                <Icon name='phone' style={{ fontSize: 15, color: "#FF4500", paddingLeft: 0 }}></Icon>
                                <Text style={{ marginLeft: 7, fontSize: 10 }}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.text1}>Loan Amount: ₹ {data.loanAmountR}</Text>
                </View>

                <View>
                    <View>
                        <Text style={styles.text2}>Product type: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.productType}</Text>
                        <Text style={{ paddingLeft: 30 }}>({data.productTypevalue})</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Date: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.dateOfCreation}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>City: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.city}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>District: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.district}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>State: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.state}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Country: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.country}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Pincode </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.pincode}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Gender </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.gender}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Father Name: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.fatherName}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Contact No: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.mobileNo}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Whats App No: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.wMobileNo}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Address: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.address}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Itr Paid: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.ItrPaid}</Text>
                    </View>
                </View>
                {data.ItrPaid === 'Paid' ?
                    < View >
                        <View>
                            <Text style={styles.text2}>Itr Amount: </Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>{data.ItrAmount}</Text>
                        </View>
                    </View> : null
                }
                <View>
                    <View>
                        <Text style={styles.text2}>Account Type: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.accountType}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Audit: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.audit}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Audit Amount: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.auditAmount}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Co Applicant Name: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.coAppName}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Co Mobile No: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.coMobileNo}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Co Relation: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.coRelation}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Family Monthly Salary: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.fMonthlySalary}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Monthly Income: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.monthlyIncome}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Rental Income: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.rental}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Rental Amount: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.rentalAmount}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Selected Profile: </Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>{data.selectedProfile}</Text>
                    </View>
                </View>
            </View> : null
            }
        </ScrollView >
    );
};

ExAppView.navigationOptions = navData => {
    return {
        // hearderTitle: ()=>'New Application',
        title: 'Info',
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: '#00419A'
        },
        headerTintColor: 'white'
    }
};

const styles = StyleSheet.create({
    text1: {
        paddingLeft: 30,
        fontSize: 17,
        paddingTop: 15
    },
    text2: {
        paddingLeft: 30,
        fontSize: 17,
        paddingTop: 25,
        color: 'grey',
    }
})

export default ExAppView;
