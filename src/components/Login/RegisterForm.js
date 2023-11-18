import React, { useState, useEffect, useReducer, useCallback } from "react";
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
  Alert,
} from "react-native";
import Input from "../UI/Input";
// import Card from '../UI/Card';
import Colors from "../../constants/Colors";
import * as authActions from "../../../store/actions/auth";
import { useDispatch } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
// import RNDateTimePicker from "@react-native-community/datetimepicker";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const RegisterForm = (props) => {
  const [selectedProfile, setSelectedProfile] = useState("Shop Keeper");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [gender, setGender] = useState("Male");
  const [regid, setregid] = useState("self");
  //   const [accountType, setAccountType] = useState("Savings Account");
  const [date, setDate] = useState(new Date(1198051730000));
  const [dateValue, setDateValue] = useState(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  // const showDatepicker = () => {
  //   showMode("date");
  // };
  //   console.log(dateValue);

  const onChange = (event, selectedDate) => {
    // console.log(selectedDate);
    const currentDate = selectedDate || date;
    setShow(false);
    // setShow(false);
    setDate(currentDate);
    // const d = currentDate.slice(0,10);
    // console.log(selectedDate);
    setDateValue(currentDate);
  };

  const showMode = () => {
    setShow(true);
    // setMode(currentMode);
  };

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: null,
      password: null,
      name: null,
      fatherName: null,
      city: null,
      pincode: null,
      mobileNo: null,
      altmob: null,
      addr: null,
      // distt: null,
      // state: null,
      // salaryamt: null,
      // bankname: null,
      // bankacno: null,
      // ifsc: null,
      // acholder: null,
      //   dob: null,
      // regid: 'self',
      // role: 'Partner',
      // createdin: 'Fair Deal'
    },
    inputValidities: {
      email: false,
      password: false,
      name: false,
      fatherName: false,
      city: false,
      pincode: false,
      mobileNo: false,
      altmob: false,
      addr: false,
      // distt: false,
      // state: false,
      // salaryamt: false,
      // bankname: false,
      // bankacno: false,
      // ifsc: false,
      // acholder: false,
      //   dob: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const authHandler = async () => {
    // let action;
    // if (isSignup) {
    if (
      formState.inputValues.email &&
      formState.inputValues.password &&
      formState.inputValues.name &&
      formState.inputValues.fatherName &&
      formState.inputValues.city &&
      formState.inputValues.pincode &&
      formState.inputValues.mobileNo &&
      formState.inputValues.altmob &&
      formState.inputValues.addr &&
      dateValue
      // && formState.inputValues.distt && formState.inputValues.state
      // && formState.inputValues.salaryamt && formState.inputValues.bankname && formState.inputValues.bankacno && formState.inputValues.ifsc && formState.inputValues.acholder
      //   formState.inputValues.dob
    ) {
      let action = authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password,
        formState.inputValues.name,
        formState.inputValues.fatherName,
        formState.inputValues.city,
        formState.inputValues.pincode,
        formState.inputValues.mobileNo,
        formState.inputValues.altmob,
        formState.inputValues.addr,
        // formState.inputValues.distt,
        // formState.inputValues.state,
        // formState.inputValues.salaryamt,
        // formState.inputValues.bankname,
        // formState.inputValues.bankacno,
        // formState.inputValues.ifsc,
        // formState.inputValues.acholder,
        regid,
        selectedProfile,
        gender,
        // accountType,
        date
        // formState.inputValues.dob
      );
      setError(null);
      setIsLoading(true);
      // console.log("njnks"+formState.inputValidities.name);
      try {
        // console.log(formState.inputValidities.email);
        await dispatch(action);
        props.navigation.navigate("Login");
        alert("You are Successfully Registered. Please login to continue.");
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    } else {
      Alert.alert("Please Fill all the inputs");
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <Input
            id="name"
            label="Name"
            keyboardType="default"
            required
            autoCapitalize="sentences"
            errorText="Please enter name."
            onInputChange={inputChangeHandler}
            initialValue=""
            autoCorrect
            returnKeyType="next"
          />
          <Input
            id="fatherName"
            label="Father Name"
            keyboardType="default"
            required
            autoCapitalize="sentences"
            errorText="Please enter Father Name."
            onInputChange={inputChangeHandler}
            initialValue=""
            autoCorrect
            returnKeyType="next"
          />
          <View style={styles.field}>
            <Text style={styles.text}>Gender</Text>
            <Picker
              selectedValue={gender}
              style={{ height: 50, width: 200 }}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>
          {/* <View> */}
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="calendar"
              onChange={onChange}
            />
          )}
          {/* </View> */}
          {/* <RNDateTimePicker value={new Date()} /> */}
          <Text style={{ marginVertical: 8 }}>Date of Birth</Text>
          {/* <Button onPress={showMode} title="Set date of birth" /> */}
          <TouchableOpacity onPress={showMode}>
            <TextInput
              style={styles.input}
              value={date.toLocaleDateString()}
              editable={false}
            />
          </TouchableOpacity>
          {/* 
          <TouchableOpacity onPress={showMode}>
            <Input
              label="Shift Starts At"
              placeholder={"01/01/2019 - 09:00 AM"}
              editable={false}
              value={date.toLocaleDateString()}
            />
          </TouchableOpacity> */}
          <Input
            id="mobileNo"
            label="Mobile Number"
            keyboardType="numeric"
            required
            autoCapitalize="sentences"
            errorText="Please enter Mobile Number."
            onInputChange={inputChangeHandler}
            initialValue=""
            autoCorrect
            returnKeyType="next"
            min={5000000000}
            maxLength={10}
          />
          <Input
            id="altmob"
            label="Alternate Mobile Number"
            keyboardType="numeric"
            required
            autoCapitalize="sentences"
            errorText="Please enter Alternate Mobile Number."
            onInputChange={inputChangeHandler}
            initialValue=""
            autoCorrect
            returnKeyType="next"
            min={5000000000}
            maxLength={10}
          />
          <Input
            id="city"
            label="City"
            keyboardType="default"
            required
            autoCapitalize="sentences"
            errorText="Please enter City."
            onInputChange={inputChangeHandler}
            initialValue=""
            autoCorrect
            returnKeyType="next"
          />
          {/* <Input
                        id="distt"
                        label="District"
                        keyboardType="default"
                        required
                        autoCapitalize="sentences"
                        errorText="Please enter District."
                        onInputChange={inputChangeHandler}
                        initialValue=""
                        autoCorrect
                        returnKeyType="next"
                    />
                    <Input
                        id="state"
                        label="State"
                        keyboardType="default"
                        required
                        autoCapitalize="sentences"
                        errorText="Please enter State."
                        onInputChange={inputChangeHandler}
                        initialValue=""
                        autoCorrect
                        returnKeyType="next"
                    /> */}
          <Input
            id="addr"
            label="Full Address"
            keyboardType="default"
            required
            autoCapitalize="sentences"
            errorText="Please enter Address."
            onInputChange={inputChangeHandler}
            initialValue=""
            autoCorrect
            returnKeyType="next"
          />
          <Input
            id="pincode"
            label="Pincode"
            keyboardType="numeric"
            required
            autoCapitalize="sentences"
            errorText="Please enter Pincode."
            onInputChange={inputChangeHandler}
            initialValue=""
            autoCorrect
            returnKeyType="next"
            min={100000}
            maxLength={6}
          />
          <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <Input
            id="password"
            label="Set Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <Text style={styles.text}>Profession</Text>
          <Picker
            selectedValue={selectedProfile}
            style={{ height: 50, width: 250 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedProfile(itemValue)
            }
          >
            <Picker.Item label="Shop Keeper" value="Shop Keeper" />
            <Picker.Item label="Job Seeker" value="Job Seeker" />
            <Picker.Item label="Cement Store" value="Cement Store" />
            <Picker.Item label="Marbel Store" value="Marbel Store" />
            <Picker.Item label="C.A." value="C.A." />
            <Picker.Item label="Accountant" value="Accountant" />
            <Picker.Item label="Vasika Navis" value="Vasika Navis" />
            <Picker.Item label="Property Dealer" value="Property Dealer" />
            <Picker.Item label="Colonisers" value="Colonisers" />
            <Picker.Item label="Advocate" value="Advocate" />
            <Picker.Item label="ILets Institute" value="ILets Institute" />
            <Picker.Item label="Freelancer" value="Freelancer" />
          </Picker>
          {/* <Input
                        id="salaryamt"
                        label="Monthly Salary"
                        keyboardType="numeric"
                        required
                        autoCapitalize="sentences"
                        errorText="Please enter Monthly Salary."
                        onInputChange={inputChangeHandler}
                        initialValue=""
                        autoCorrect
                        returnKeyType="next"
                        // min={100000}
                        maxLength={8}
                    /> */}
          <View style={styles.field}>
            {/* <Text style={styles.text}>Bank Account Type</Text>
                        <Picker
                            selectedValue={accountType}
                            style={{ height: 50, width: 250 }}
                            onValueChange={(itemValue, itemIndex) => setAccountType(itemValue)}
                        >
                            <Picker.Item label="Savings Account" value="Savings Account" />
                            <Picker.Item label="Current Account" value="Current Account" />
                            <Picker.Item label="Limit Account" value="Limit Account" />
                        </Picker>
                        <Input
                            id="bankname"
                            label="Enter your bank name"
                            keyboardType="default"
                            required
                            autoCapitalize="sentences"
                            errorText="Please enter bank name."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            autoCorrect
                            returnKeyType="next"
                        />
                        <Input
                            id="bankacno"
                            label="Bank Account Number"
                            keyboardType="numeric"
                            required
                            autoCapitalize="sentences"
                            errorText="Please enter Bank Account Number."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            // autoCorrect
                            returnKeyType="next"
                            // min={100000}
                            maxLength={15}
                        />
                        <Input
                            id="ifsc"
                            label="IFSC code"
                            keyboardType="default"
                            required
                            // autoCapitalize="sentences"
                            errorText="Please enter IFSC code."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            // autoCorrect
                            returnKeyType="next"
                            maxLength={11}
                        />
                        <Input
                            id="acholder"
                            label="Account Holder Name"
                            keyboardType="default"
                            required
                            autoCapitalize="sentences"
                            errorText="Please enter account holder name."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            autoCorrect
                            returnKeyType="next"
                        /> */}
            <Text style={styles.text}>Referral Code </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setregid(text)}
              // value={}
              keyboardType="default"
              required
              autoCapitalize="sentences"
              onChange={inputChangeHandler}
              autoCorrect
              returnKeyType="next"
            />
          </View>
          <View style={styles.buttonContainer}>
            {isLoading ? (
              <ActivityIndicator size="small" color={Colors.primary} />
            ) : (
              <Button
                title={"Register"}
                color={Colors.primary}
                onPress={authHandler}
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
    </ScrollView>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 40,
    backgroundColor: "white",
    overflow: "scroll",
  },
  text: {
    marginTop: 15,
    // fontSize: 20,
    // fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  text1: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
    fontFamily: "serif",
  },
  input: {
    height: 40,
    // backgroundColor : 'rgba(255,255,255,0.2)',
    borderBottomWidth: 1,
    // marginBottom : 200,
    // color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 20,
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
