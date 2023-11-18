import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, ScrollView, TextInput, Picker, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { CheckBox } from 'react-native-elements';

const CoApplicantUpload = (props) => {

    const [couserId, setcoUserId] = useState(null);
    const [copanCard,setcoPanCard]= useState(null);
    const [coincomeProof,setcoIncomeProof]= useState(null);
    const [cobankS,setcoBankS]= useState(null);

    let openImagePickerAsync = async (val) => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (val == 1) {
            // setccoUserId(!pickerResult.cancelled);
            setcoUserId(pickerResult);
        }
        if (val == 2) {
            // setccoPanCard(!pickerResult.cancelled);
            setcoPanCard(pickerResult);
        }
        if (val == 3) {
            // setccoIncomeProof(!pickerResult.cancelled);
            setcoIncomeProof(pickerResult);
        }
        if (val == 4) {
            // setccoBankS(!pickerResult.cancelled);
            setcoBankS(pickerResult);
        }
    }
    // const data={};
    const submitHandler = () =>{
        // data = {
        //     couserIdPhoto : ccouserId
        // }
        if(couserId&&copanCard&&coincomeProof&&cobankS){
            Alert.alert('Uploaded Successfully');
            props.navigation.navigate('FullApp');
        }
        
        else{
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
                    checked={couserId === null ? false : true}
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
                    checked={copanCard === null ? false : true}
                    uncheckedIcon='plus'
                    checkedColor='green'
                    uncheckedColor='red'
                />
            </View>

            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>Income Proof</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(3)} style={styles.ButtonContainer}>
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
                    <Text style={styles.text}>Bank statement (1 year)</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openImagePickerAsync(4)} style={styles.ButtonContainer}>
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
                onPress={submitHandler}
            >
                <Text style={styles.ButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

CoApplicantUpload.navigationOptions = {
    // hearderTitle: ()=>'New Application',
    title: 'Upload Documents',
    height : 100
};
export default CoApplicantUpload;

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
        // marginBottom: 80,
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