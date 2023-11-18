import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, ScrollView, TextInput, Picker, KeyboardType, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadDoc = (props) => {
    const [userId, setUserId] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [itrBalanceS, setItrBalanceS] = useState(null);
    const [bankS, setBankS] = useState(null);
    const [psPhoto, setpsPhoto] = useState(null);
    const [homePic, setHomePic] = useState(null);
    const [businessPic, setBusinessPic] = useState(null);
    const [audit3y, setAudit3y] = useState(null);
    const [bill, setBill] = useState(null);

    const [couserId, setcoUserId] = useState(null);
    const [copanCard, setcoPanCard] = useState(null);
    const [coincomeProof, setcoIncomeProof] = useState(null);
    const [cobankS, setcoBankS] = useState(null);
    let openImagePickerAsync = async (val) => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            alert("Please Select the image");
            return;
        }
        if (val == 1) {
            console.log("gergetah");
            setUserId(pickerResult.uri);
        }
        if (val == 2) {
            setPanCard(pickerResult.uri);
        }
        if (val == 3) {
            setItrBalanceS(pickerResult.uri);
        }
        if (val == 4) {
            setBankS(pickerResult.uri);
        }
        if (val == 5) {
            setpsPhoto(pickerResult.uri);
        }
        if (val == 6) {
            setHomePic(pickerResult.uri);
        }
        if (val == 7) {
            setBusinessPic(pickerResult.uri);
        }
        if (val == 8) {
            setAudit3y(pickerResult.uri);
        }
        if (val == 9) {
            setBill(pickerResult.uri);
        }
        if (val == 10) {
            setcoUserId(pickerResult.uri);
        }
        if (val == 11) {
            setcoPanCard(pickerResult.uri);
        }
        if (val == 12) {
            setcoIncomeProof(pickerResult.uri);
        }
        if (val == 13) {
            setcoBankS(pickerResult.uri);
        }

    }
    // const data={};
    const submitHandle = async () => {

        if (userId && panCard
            // && itrBalanceS && bankS && psPhoto && homePic
            // && businessPic && audit3y && bill && cobankS && coincomeProof && copanCard && couserId
        ) {
            try {
                const response = await fetch(`http://www.easyloansco.com/connect/items/upload.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        save: 'save',
                        myfile1: userId,
                        // user_name: 'efjifg',
                        // panCard: panCard,
                        // itrBalanceS: itrBalanceS,
                        // bankS: bankS,
                        // psPhoto: psPhoto,
                        // homePic: homePic,
                        // businessPic: businessPic,
                        // audit3y: audit3y,
                        // bill: bill,
                        // cobankS: cobankS,
                        // coincomeProof: coincomeProof,
                        // copanCard: copanCard,
                        // couserId: couserId,
                    })
                });
                // const resData = await response.json();
                // console.log(resData);
                Alert.alert("Your Documents is Submitted Successfuly");
            }
            // console.log(resData);
            catch (err) {
                alert("Something Wrong happened!" + err);
                console.log(err);
            }
            // Alert.alert('Uploaded Successfully');
            props.navigation.navigate('Dashboard');
        }

        else {
            Alert.alert('Please upload all the documents')
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>User ID (Addhar Card) </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(1)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={userId === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Pan Card </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(2)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={panCard === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>3 year ITR and computation/ Balance sheet</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(3)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={itrBalanceS === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Bank Statement(1 year)</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(4)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={bankS === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Passport Size Photo,</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(5)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={psPhoto === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Home Pic</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(6)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={homePic === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Business Pic</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(7)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={businessPic === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Audit 3 years</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(8)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={audit3y === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>STD or Electricity bill</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(9)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={bill === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Co-applicant User ID (Addhar Card) </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(10)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={couserId === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Co-applicant Pan Card </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(11)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={copanCard === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>

            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Co-applicant Income Proof</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(12)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={coincomeProof === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Co-applicant Bank statement (1 year)</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(13)} style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <CheckBox
                    // title='Click Here'
                    checked={cobankS === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>
            <TouchableOpacity
                style={styles.ButtonContainerSubmit}
                onPress={submitHandle}
            >
                <Text style={styles.ButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

UploadDoc.navigationOptions = {
    // hearderTitle: ()=>'New Application',
    title: 'Upload Documents',
};

export default UploadDoc;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'column'
    },
    ButtonContainer: {
        // marginTop: 30,
        backgroundColor: 'black',
        // height : 40
        paddingVertical: 10,
        // marginBottom: 80,
        width: 80
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    ButtonContainerSubmit: {
        marginTop: 30,
        backgroundColor: 'darkorange',
        // height : 40
        paddingVertical: 10,
        marginBottom: 80,
        // width: 250
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // padding: 5,
        marginTop: 20,
    },
    text: {
        marginLeft: 10,
        fontSize: 17,
        // marginTop : 10,
        width: 200,

    }
})