import React, { useState, useEffect, useReducer, useCallback } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Picker,
  Button,
  ActivityIndicator,
  Platform,
  AsyncStorage,
  Alert,
} from "react-native";
import Input from "../../UI/Input";
// import Card from '../UI/Card';
import Colors from "../../../constants/Colors";
import * as authActions from "../../../../store/actions/auth";
import { useDispatch } from "react-redux";

const EditProfile = (props) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      // console.log('dkdjfkejt'+transformedData);
      //   mobileNo = transformedData.userMobileNumber;
      setId(transformedData.partnerCode);
      //   id = transformedData.partnerType;
      //   console.log("dkdjfkejt" + transformedData.partnerCode);
    };
    tryLogin();
  }, []);
  // console.log(props.navigation.state.params.data);
  const [userData, setUserData] = useState(props.navigation.state.params.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [selectedProfile, setSelectedProfile] = useState(userData.profession);
  const [gender, setGender] = useState(userData.sex);
  const [accountType, setAccountType] = useState(userData.actype);
  const [email, setemail] = useState(userData.email);
  const [password, setpassword] = useState(userData.password);
  const [name, setname] = useState(userData.name);
  const [fname, setfname] = useState(userData.fname);
  const [city, setcity] = useState(userData.city);
  const [pincode, setpincode] = useState(userData.pin);
  const [mobileNo, setmobileNo] = useState(userData.phone);
  const [altmob, setaltmob] = useState(userData.altphone);
  const [addr, setaddr] = useState(userData.address);
  const [distt, setdistt] = useState(userData.distt);
  const [state, setstate] = useState(userData.state);
  const [salaryamt, setsalaryamt] = useState(userData.salaryamt);
  const [bankname, setbankname] = useState(userData.bankname);
  const [bankacno, setbankacno] = useState(userData.bankacno);
  const [ifsc, setifsc] = useState(userData.ifsc);
  const [acholder, setacholder] = useState(userData.acholder);
  const [regid, setregid] = useState(userData.regid);
  const [dob, setdob] = useState(userData.dob);

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);
  const dispatch = useDispatch();

  async function submitHandler() {
    if (
      name &&
      city &&
      pincode &&
      addr &&
      mobileNo.length === 10 &&
      email &&
      fname
    ) {
      setIsLoading(true);
      try {
        const data = {
          name: name,
          fname: fname,
          city: city,
          pin: pincode,
          phone: mobileNo,
          altphone: altmob,
          address: addr,
          email: email,
          partnerCode: id,
        };
        console.log(data);
        // const register = await fetch(`https://my-client-project-273516.firebaseio.com/registrations/${resData.localId}.json`, {
        const register = await fetch(
          `http://www.easyloansco.com/connect/items/updateagent.php`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              fname: fname,
              city: city,
              pin: pincode,
              phone: mobileNo,
              altphone: altmob,
              address: addr,
              email: email,
              partnercode: id,
            }),
          }
        );
        const regData = await register.json();
        console.log(regData);
        if (regData.message === "Item was updated.") {
          dispatch(authActions.logout());
          Alert.alert("Update Successfull ! Please Login Again. ");
          props.navigation.navigate("Welcome");
        } else {
          Alert.alert(regData.message);
          setIsLoading(false);
        }
      } catch (err) {
        // console.log(resData);
        // alert("Something Wrong happened!" + err);
        // throw new Error(err);
        setError(err.message);
        setIsLoading(false);
      }
    } else {
      Alert.alert("Please fill all the required feilds correctly ");
    }
  }
  return (
    <ScrollView>
      {userData ? (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              required
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
              value={name}
              onChangeText={(text) => setname(text)}
            />
            <Text style={styles.text}>Father Name</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              required
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
              value={fname}
              onChangeText={(text) => setfname(text)}
            />
            {/* <View style={styles.field}>
                            <Text style={styles.text}>Gender</Text>
                            <Picker
                                selectedValue={gender}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    setGender(itemValue)}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Others" value="Others" />
                            </Picker>
                        </View> */}
            {/* <Text style={styles.text}>Date of Birth</Text>
                        <TextInput
                            style={styles.input}
                            // onChangeText={text => setmobileNo(text)}
                            value={dob}
                            keyboardType="numeric"
                            required
                            // autoCapitalize="sentences"
                            // onChange={inputChangeHandler}
                            autoCorrect
                            returnKeyType="next"
                            // min={5000000000}
                            // maxLength={10}
                            editable={false}
                            selectTextOnFocus={false}
                        /> */}
            <Text style={styles.text}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setmobileNo(text)}
              value={mobileNo}
              keyboardType="numeric"
              required
              // autoCapitalize="sentences"
              // onChange={inputChangeHandler}
              autoCorrect
              returnKeyType="next"
              // min={5000000000}
              maxLength={10}
              // editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.text}>Alternate Mobile Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setaltmob(text)}
              value={altmob}
              keyboardType="numeric"
              required
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
              min={5000000000}
              maxLength={10}
            />
            <Text style={styles.text}>City</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setcity(text)}
              value={city}
              keyboardType="default"
              required
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            {/* <Text style={styles.text}>District</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setdistt(text)}
                            value={distt}
                            keyboardType="default"
                            required
                            autoCapitalize="sentences"
                            autoCorrect
                            returnKeyType="next"
                        />
                        <Text style={styles.text}>State</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setstate(text)}
                            value={state}
                            keyboardType="default"
                            required
                            autoCapitalize="sentences"
                            autoCorrect
                            returnKeyType="next"
                        /> */}
            <Text style={styles.text}>Full Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setaddr(text)}
              value={addr}
              keyboardType="default"
              required
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            <Text style={styles.text}>Pincode</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setpincode(text)}
              value={pincode}
              keyboardType="numeric"
              required
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
              min={100000}
              maxLength={6}
            />
            <Text style={styles.text}>E-Mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => set(text)}
              // value={}
              keyboardType="email-address"
              required
              autoCapitalize="none"
              onChangeText={(text) => setemail(text)}
              value={email}
            />
            {/* <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => set(text)}
                            value={password}
                            keyboardType="default"
                            secureTextEntry
                            required
                            minLength={5}
                            autoCapitalize="none"
                            editable={false}
                            selectTextOnFocus={false}
                        /> */}
            {/* <Text style={styles.text}>Profession</Text>
                        <Picker
                            selectedValue={selectedProfile}
                            style={{ height: 50, width: 250 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedProfile(itemValue)}
                        >
                            <Picker.Item label="Business man" value="Business man" />
                            <Picker.Item label="Salaried" value="Salaried" />
                            <Picker.Item label="Agent" value="Agent" />
                            <Picker.Item label="Student" value="Student" />
                            <Picker.Item label="Freelancer" value="Freelancer" />
                        </Picker> */}
            {/* <Text style={styles.text}>Monthly Salary</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setsalaryamt(text)}
                            value={salaryamt}
                            keyboardType="numeric"
                            required
                            autoCapitalize="sentences"
                            autoCorrect
                            returnKeyType="next"
                            // min={100000}
                            maxLength={8}
                        />
                        <View style={styles.field}>
                            <Text style={styles.text}>Bank Account Type</Text>
                            <Picker
                                selectedValue={accountType}
                                style={{ height: 50, width: 250 }}
                                // itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
                                onValueChange={(itemValue, itemIndex) => setAccountType(itemValue)}
                            >
                                <Picker.Item label="Savings Account" value="Savings Account" />
                                <Picker.Item label="Current Account" value="Current Account" />
                                <Picker.Item label="Limit Account" value="Limit Account" />
                            </Picker>
                        </View>
                        <Text style={styles.text}>Bank name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setbankname(text)}
                            value={bankname}
                            keyboardType="default"
                            required
                            autoCapitalize="sentences"
                            autoCorrect
                            returnKeyType="next"
                        />
                        <Text style={styles.text}>Bank Account Number</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setbankacno(text)}
                            value={bankacno}
                            keyboardType="numeric"
                            required
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            maxLength={15}
                        />
                        <Text style={styles.text}>IFSC code</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setifsc(text)}
                            value={ifsc}
                            keyboardType="default"
                            required
                            returnKeyType="next"
                            maxLength={11}
                        />
                        <Text style={styles.text}>Account Holder Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setacholder(text)}
                            value={acholder}
                            keyboardType="default"
                            required
                            autoCapitalize="sentences"
                            autoCorrect
                            returnKeyType="next"
                        /> */}
            {/* </View> */}
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                <Button
                  title={"Register"}
                  color={Colors.primary}
                  onPress={submitHandler}
                />
              )}
            </View>
          </View>
          {/* <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={() => { props.navigation.navigate('Dashboard') }}
                >
                    <Text style={styles.ButtonText}>Register</Text>
                </TouchableOpacity> */}
        </View>
      ) : null}
    </ScrollView>
  );
};

EditProfile.navigationOptions = (navData) => {
  return {
    // headerLeft: () =>
    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //         <Item
    //             title="Menu"
    //             iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
    //             onPress={() => {
    //                 navData.navigation.goBack();
    //             }}
    //         />
    //     </HeaderButtons>,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      height: 60,
    },
    title: "Edit Profile",
    // headerTintColor: '#1E90EF',
    headerTitleStyle: {
      color: "white",
      fontFamily: "sans-serif",
      // fontSize: 10
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 40,
    backgroundColor: "white",
    overflow: "scroll",
  },
  // text: {
  //     marginTop: 15,
  //     // fontSize: 20,
  //     fontFamily: 'open-sans-bold',
  //     marginVertical: 8
  // },
  text1: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
    fontFamily: "serif",
  },
  // input: {
  //     height: 40,
  //     // backgroundColor : 'rgba(255,255,255,0.2)',
  //     borderBottomWidth: 1,
  //     // marginBottom : 200,
  //     // color: '#FFF',
  //     paddingHorizontal: 10,
  //     fontSize: 20,
  // },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  input: {
    height: 40,
    backgroundColor: "white",
    // borderBottomWidth: 1,
    //white        // color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 0.2,
    borderColor: "lightgrey",
    marginTop: 5,
    elevation: 2,
    borderRadius: 5,
    marginBottom: 40,
  },
  text: {
    // marginTop: 7,
    fontSize: 14,
    color: "black",
  },
});

export default EditProfile;
