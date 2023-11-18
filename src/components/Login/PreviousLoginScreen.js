import React, { useState, useEffect, useReducer, useCallback } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native';
// import Login from "./Login";
// import Otp_Verify from "./Otp_Verify";
import Colors from '../../../src/constants/Colors';
import { useDispatch } from 'react-redux';
import * as authActions from '../../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const LoginForm = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isSignup, setIsSignup] = useState(false);
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: ''
        },
        inputValidities: {
          email: false,
          password: false
        },
        formIsValid: false
      });

      useEffect(() => {
        if (error) {
          Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
      }, [error]);

      const authHandler = async () => {
        let action;
        if (isSignup) {
          action = authActions.signup(
            formState.inputValues.email,
            formState.inputValues.password
          );
        } else {
          action = authActions.login(
            formState.inputValues.email,
            formState.inputValues.password
          );
        }
        setError(null);
        setIsLoading(true);
        try {
          await dispatch(action);
          props.navigation.navigate('Shop');
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
            input: inputIdentifier
          });
        },
        [dispatchFormState]
      );
    // const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior='padding'
            keyboardVerticalOffset={50}
        >
            <StatusBar
                barStyle='light-content'
            />
            {/* <Login/> */}

            <Text style={styles.text}>Welcome Agent</Text>
            <TextInput
                placeholder="Enter Mobile Number"
                placeholderTextColor='grey'
                style={styles.input}
                returnKeyType="go"
                keyboardType='number-pad'
                required
                maxLength={10}
            />
            <Text style={styles.text1}>(OTP will be sent on this number)</Text>
            <TouchableOpacity
                style={styles.ButtonContainer}
                onPress={() => { props.value.navigation.navigate('Verify') }}
            >
                <Text style={styles.ButtonText}>GET OTP</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>Don't have an account</Text>
            <TouchableOpacity
                onPress={() => { props.value.navigation.navigate('Register') }}
            >
                <Text style={styles.text2}>Register Now</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
};

LoginForm.navigationOption = {
    title: 'Welcome',
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.blue : ''
    // },
}



export default LoginForm;

const styles = StyleSheet.create({
    container: {
        margin: 40,
        marginTop: 190,
        padding: 30,
        backgroundColor: 'white',
        height: 350,
        justifyContent: 'space-evenly',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        borderTopRightRadius: 115,
        borderBottomLeftRadius: 115,
        borderColor: 'black',
        borderWidth: .1


    },
    input: {
        height: 40,
        // backgroundColor : 'rgba(255,255,255,0.2)',
        borderBottomWidth: 1,
        // marginBottom : 200,
        // color: '#FFF',
        paddingHorizontal: 10
    },
    ButtonContainer: {
        marginTop: 30,
        backgroundColor: 'black',
        // height : 40
        paddingVertical: 15
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'serif'
    },
    text1: {
        fontSize: 10,
        color: 'blue',
    },
    text2: {
        // marginBottom : 200,
        textAlign: 'center',
        color: 'red',
    },
    text3: {
        marginTop: 30,
        // marginBottom : 200,
        textAlign: 'center',
    },
});