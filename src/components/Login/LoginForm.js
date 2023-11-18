import React, { useState, useEffect, useReducer, useCallback } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  Linking,
  Dimensions,
} from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from "react-redux";

import Input from "../UI/Input";
import Card from "../UI/Card";
import Colors from "../../constants/Colors";
import * as authActions from "../../../store/actions/auth";
import { TouchableOpacity } from "react-native";

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

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", "Please enter Email and Password", [
        { text: "Okay" },
      ]);
    }
  }, [error]);

  const authHandler = async () => {
    // let action;
    let action = authActions.login(
      formState.inputValues.email,
      formState.inputValues.password
    );
    // }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate("Dashboard");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
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

  return (
    // <ImageBackground
    //     // style={styles.img}
    //     style={[styles.fixed, styles.containter]}
    //     source={require('../../images/hhh.png')}
    // >
    <KeyboardAvoidingView
      // behavior="padding"
      // keyboardVerticalOffset={-100}
      style={styles.screen}
    >
      {/* <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}> */}
      <View style={styles.gradient}>
        {/* <Image
                        style={styles.logo}
                        source={require('../../images/bansal2.png')}
                    /> */}
        <Card style={styles.authContainer}>
          <ScrollView>
            <Text style={styles.text1}>Sign in</Text>
            <Text style={styles.text2}>to get started</Text>
            <Input
              id="email"
              label="Email"
              keyboardType="default"
              placeholder="Enter Email"
              required
              // email
              autoCapitalize="none"
              errorText="Please enter a valid email."
              onInputChange={inputChangeHandler}
              initialValue=""
              // min={5000000000}
              // maxLength={10}
              // style={styles.input1}
            />
            <Input
              id="password"
              label="PASSWORD"
              keyboardType="default"
              placeholder=" Enter Password"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                <Button title={"Login"} color={"black"} onPress={authHandler} />
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Text style={{ textAlign: "center" }}>Don't have account </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Register");
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "red", fontSize: 20 }}
                >
                  Register
                </Text>
              </TouchableOpacity>
              {/* <Button
                                    // title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                                    title={'Register'}
                                    color={Colors.accent}
                                    // onPress={() => {
                                    //   setIsSignup(prevState => !prevState);
                                    // }}
                                    onPress={() => { props.navigation.navigate('Register') }}
                                /> */}
            </View>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL("http://www.easyloansco.com/forgetpass.php")
              }
            >
              Forgot Password ?
            </Text>
          </ScrollView>
        </Card>
        {/* </LinearGradient> */}
      </View>
    </KeyboardAvoidingView>
    // </ImageBackground>
  );
};

LoginForm.navigationOptions = {
  title: "Welcome to Easy Loan",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "white" : "",
    height: 80,
  },
  headerTitleStyle: {
    fontFamily: "serif",
    fontSize: 20,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: 80,
  },
  gradient: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  authContainer: {
    marginTop: 100,
    // justifyContent:"center",
    width: "80%",
    maxWidth: 400,
    maxHeight: 500,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  img: {
    flex: 1,
    // resizeMode: 'stretch',
  },
  text1: {
    fontSize: 25,
  },
  text2: {
    fontSize: 15,
    marginBottom: 10,
  },
  link: {
    // color: 'lightgreen',
    textAlign: "right",
    fontSize: 10,
    marginTop: 5,
  },
  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: "transparent",
  },
  // input1: {
  //     // borderWidth: .2,
  //     // borderColor: 'lightgrey',
  //     backgroundColor : 'red'
  // }
});

export default LoginForm;
