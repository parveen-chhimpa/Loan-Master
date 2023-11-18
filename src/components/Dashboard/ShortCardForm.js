import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Picker,
  AsyncStorage,
  Alert,
} from "react-native";
import Input from "../UI/Input";

const ShortCardForm = (props) => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      // console.log(transformedData);
      setUserData(transformedData);
    };
    tryLogin();
  }, []);

  const [productType, setProductType] = useState("Home Loan");
  const [homeLoan, setHomeLoan] = useState("Constuction Loan");
  const [lapLoan, setLapLoan] = useState("Residential Property");
  const [typeSecured, setTypeSecured] = useState("Secured Loan");
  const [vehicleLoan, setVehicleLoan] = useState("Old Vehicle Loan");
  // const [typeProduct, setTypeProduct] = useState("default");
  const [gender, setGender] = useState("Male");
  const [name, setName] = useState(null);
  const [notes, setNotes] = useState(null);
  const [email, setEmail] = useState(null);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  // const [state, setState] = useState(null);
  // const [pincode, setPincode] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [whatsAppMobileNo, setWhatsAppMobileNo] = useState(null);
  const [loanAmountRequired, setLoanAmountRequired] = useState(null);
  const submitHandler = () => {
    // const typeProduct = '';

    if (name && city && mobileNo.length === 10 && loanAmountRequired) {
      if (productType === "Home Loan") {
        sendPostRequest(homeLoan);
        console.log("1");
      } else if (productType === "Lap Loan") {
        sendPostRequest(lapLoan);
        console.log("2");
      } else if (productType === "Business Loan") {
        sendPostRequest(typeSecured);
        console.log("31");
      } else if (productType === "School Loan") {
        sendPostRequest(typeSecured);
        console.log("32");
      } else if (productType === "Education Loan") {
        sendPostRequest(typeSecured);
        console.log("33");
      } else if (productType === "Doctor Loan") {
        sendPostRequest(typeSecured);
        console.log("34");
      } else if (productType === "Vehicle Loan") {
        sendPostRequest(vehicleLoan);
        console.log("4");
      } else {
        sendPostRequest("");
        console.log("5");
      }

      // sendPostRequest(typeProduct);
      // console.log(name + " " + typeProduct)
    } else {
      Alert.alert("Please fill all the required feilds correctly ");
    }
  };
  async function sendPostRequest(productTypevalue) {
    try {
      const data = {
        alt: whatsAppMobileNo,
        city: city,
        // distt: district,
        email: email,
        loanamt: loanAmountRequired,
        name: name,
        phone: mobileNo,
        loantype: productType,
        createdby: userData.partnerCode,
        // sex: gender,
        status: "In Progress",
        subtype: productTypevalue,
        fwrap: notes,
      };
      console.log(data);
      // const response = await fetch(`https://my-client-project-273516.firebaseio.com/addLead/${userData.userId}.json`, {
      const response = await fetch(
        `http://www.easyloansco.com/connect/items/createlead.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // id: mobileNo,
            alt: whatsAppMobileNo,
            city: city,
            // distt: district,
            email: email,
            loanamt: loanAmountRequired,
            name: name,
            phone: mobileNo,
            loantype: productType,
            createdby: userData.partnerCode,
            // sex: gender,
            status: "In Progress",
            subtype: productTypevalue,
            fwrap: notes,
          }),
        }
      );
      const resData = await response.json();
      console.log(resData);
      if (resData.message === "Item was created.") {
        // Alert.alert("Please check your details again");
        Alert.alert("Your Lead is Submitted Successfuly");
        props.navigation.navigate("Dashboard");
      } else if (
        resData.message === "Unable to create item. Data is incomplete."
      ) {
        Alert.alert("Please check your details again");
      } else {
        Alert.alert("Please check your details again");
        // Alert.alert("Your Lead is Submitted Successfuly");
        // props.navigation.navigate("Dashboard");
      }
    } catch (err) {
      // console.log(resData);
      alert("Something Wrong happened!  " + err);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <View style={styles.field}>
          <Text style={styles.text}>
            NAME<Text style={styles.errorText}> *</Text>
          </Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            onEndEditing={(text) => setName(text.nativeEvent.text)}
            autoCapitalize="words"
            placeholder="Clients's Full Name*"
          />
          {/* { name==='' ?<View style={styles.errorContainer}>
                        <Text style={styles.errorText}>Please fill this </Text>
                    </View>:<Text>hii</Text>} */}
        </View>
        {/* <View style={styles.field}>
                    <Text style={styles.text}>FATHER NAME<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        // onInputChange={textChangeHandler}
                        onEndEditing={text => setFatherName(text.nativeEvent.text)}
                        placeholder="Clients's Father Name"
                    />
                </View> */}
        {/* <View style={styles.field}>
                    <Text style={styles.text}>GENDER<Text style={styles.errorText}> *</Text></Text>
                    <Picker
                        selectedValue={gender}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setGender(itemValue)}
                    >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Others" value="Others" />
                    </Picker>
                </View> */}
        {/* <View style={styles.field}>
                    <Text style={styles.text}>FULL ADDRESS<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setAddress(text.nativeEvent.text)}
                        placeholder="Enter Full Address"
                    />
                </View> */}
        <View style={styles.field}>
          <Text style={styles.text}>
            CITY<Text style={styles.errorText}> *</Text>
          </Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            onEndEditing={(text) => setCity(text.nativeEvent.text)}
            placeholder="Enter City"
          />
        </View>
        {/* <View style={styles.field}>
                    <Text style={styles.text}>DISTRICT<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setDistrict(text.nativeEvent.text)}
                        placeholder="Enter District"
                    />
                </View> */}
        <View style={styles.field}>
          <Text style={styles.text}>EMAIL</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            onEndEditing={(text) => setEmail(text.nativeEvent.text)}
            placeholder="Enter Email"
          />
        </View>
        {/* <View style={styles.field}>
                    <Text style={styles.text}>STATE<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setState(text.nativeEvent.text)}
                        placeholder="Enter State"
                    />
                </View> */}
        {/* <View style={styles.field}>
                    <Text style={styles.text}>PINCODE<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        keyboardType="numeric"
                        onEndEditing={text => setPincode(text.nativeEvent.text)}
                        maxLength={6}
                        placeholder="Enter Pincode"
                    />
                </View> */}
        <View style={styles.field}>
          <Text style={styles.text}>
            Product Type<Text style={styles.errorText}> *</Text>
          </Text>
          <Picker
            selectedValue={productType}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setProductType(itemValue)}
          >
            <Picker.Item label="Home Loan" value="Home Loan" />
            {/* <Picker.Item label="Home loan (Refinance)" value="2" />
                        <Picker.Item label="Home loan (Purchase)" value="3" /> */}
            <Picker.Item label="Lap Loan" value="Lap Loan" />
            {/* <Picker.Item label="Lap loan (Commercial)" value="5" /> */}
            <Picker.Item label="Business Loan" value="Business Loan" />
            {/* <Picker.Item label="Business loan (Unsecured)" value="7" /> */}
            <Picker.Item label="Personal Loan" value="Personal Loan" />
            <Picker.Item label="Education Loan" value="Education Loan" />
            {/* <Picker.Item label="Education Loan (Unsecured)" value="10" /> */}
            <Picker.Item label="Project Loan" value="Project Loan" />
            <Picker.Item label="Vehicle Loan" value="Vehicle Loan" />
            {/* <Picker.Item label="Vehicle Loan (New Vehicle)" value="13" /> */}
            <Picker.Item label="Machinery Loan" value="Machinary Loan" />
            <Picker.Item label="Doctor Loan" value="Doctor Loan" />
            {/* <Picker.Item label="Docter loan (Unsecured)" value="16" /> */}
            <Picker.Item label="School Loan" value="School Loan" />
            {/* <Picker.Item label="School loan (Unsecured)" value="18" /> */}
            <Picker.Item label="Flexi Loan" value="Flexi Loan" />
            <Picker.Item label="Gold Loan" value="Gold Loan" />
            {/* <Picker.Item label="Credit Card" value="Credit Card" /> */}
          </Picker>
          {productType === "Home Loan" ? (
            <View>
              <Picker
                selectedValue={homeLoan}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) => setHomeLoan(itemValue)}
              >
                <Picker.Item
                  label="Constuction Loan"
                  value="Constuction Loan"
                />
                <Picker.Item label="Refinance Loan" value="Refinance Loan" />
                <Picker.Item label="Purchase Loan" value="Purchase Loan" />
                <Picker.Item
                  label="Plot + Construction Loan"
                  value="Plot + Construction Loan"
                />
              </Picker>
            </View>
          ) : null}
          {productType === "Lap Loan" ? (
            <View>
              <Picker
                selectedValue={lapLoan}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) => setLapLoan(itemValue)}
              >
                <Picker.Item
                  label="Residential Property"
                  value="Residential Property"
                />
                <Picker.Item
                  label="Commercial Property"
                  value="Commercial Property"
                />
                <Picker.Item
                  label="Industrial Property"
                  value="Industrial Property"
                />
                <Picker.Item label="Plain Plot" value="Plain Plot" />
              </Picker>
            </View>
          ) : null}
          {productType === "School Loan" ? (
            <View>
              <Picker
                selectedValue={typeSecured}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeSecured(itemValue)
                }
              >
                <Picker.Item label="Secured Loan" value="Secured Loan" />
                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
              </Picker>
            </View>
          ) : null}
          {productType === "Business Loan" ? (
            <View>
              <Picker
                selectedValue={typeSecured}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeSecured(itemValue)
                }
              >
                <Picker.Item label="Secured Loan" value="Secured Loan" />
                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
              </Picker>
            </View>
          ) : null}
          {productType === "Education Loan" ? (
            <View>
              <Picker
                selectedValue={typeSecured}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeSecured(itemValue)
                }
              >
                <Picker.Item label="Secured Loan" value="Secured Loan" />
                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
              </Picker>
            </View>
          ) : null}
          {productType === "Doctor Loan" ? (
            <View>
              <Picker
                selectedValue={typeSecured}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeSecured(itemValue)
                }
              >
                <Picker.Item label="Secured Loan" value="Secured Loan" />
                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
              </Picker>
            </View>
          ) : null}
          {productType === "Vehicle Loan" ? (
            <View>
              <Picker
                selectedValue={vehicleLoan}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setVehicleLoan(itemValue)
                }
              >
                <Picker.Item
                  label="Old Vehicle Loan"
                  value="Old Vehicle Loan"
                />
                <Picker.Item
                  label="New Vehicle Loan"
                  value="New Vehicle Loan"
                />
                <Picker.Item
                  label="Commercial Vehicle"
                  value="Commercial Vehicle"
                />
              </Picker>
            </View>
          ) : null}
        </View>
        <View style={styles.field}>
          <Text style={styles.text}>
            MOBILE NUMBER<Text style={styles.errorText}> *</Text>
          </Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            keyboardType="numeric"
            onEndEditing={(text) => setMobileNo(text.nativeEvent.text)}
            maxLength={10}
            placeholder="9876543210"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.text}>ALTERNATE WHAT'S APP NUMBER</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            keyboardType="numeric"
            onEndEditing={(text) => setWhatsAppMobileNo(text.nativeEvent.text)}
            maxLength={10}
            placeholder="9876543210"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.text}>
            LOAN AMOUNT REQUIRED<Text style={styles.errorText}> *</Text>
          </Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            keyboardType="numeric"
            onEndEditing={(text) =>
              setLoanAmountRequired(text.nativeEvent.text)
            }
            maxLength={10}
            placeholder="₹ 1000000"
          />
        </View>
        {/* </ScrollView> */}
      </View>

      <View style={styles.field}>
        <Text style={styles.text}>NOTES</Text>
        <TextInput
          style={styles.input}
          returnKeyType="next"
          onEndEditing={(text) => setNotes(text.nativeEvent.text)}
          autoCapitalize="words"
          placeholder="Add notes"
        />
        {/* { name==='' ?<View style={styles.errorContainer}>
                        <Text style={styles.errorText}>Please fill this </Text>
                    </View>:<Text>hii</Text>} */}
      </View>

      <TouchableOpacity style={styles.ButtonContainer} onPress={submitHandler}>
        <Text style={styles.ButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

ShortCardForm.navigationOptions = (navData) => {
  return {
    title: "New Lead",
    headerTitleStyle: {
      color: "white",
    },
    headerStyle: {
      backgroundColor: "#00419A",
      height: 60,
    },
    headerTintColor: "white",
  };
};
export default ShortCardForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: "white",
    overflow: "scroll",
    // marginTop : -10,
    // borderRadius :50
  },
  ButtonContainer: {
    marginTop: 30,
    backgroundColor: "darkorange",
    // height : 40
    paddingVertical: 15,
    marginBottom: 80,
  },
  ButtonText: {
    color: "white",
    textAlign: "center",
  },
  text1: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
    fontFamily: "serif",
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
  },
  field: {
    // backgroundColor: "#f7f7f7",
    // padding: 5,
    margin: 10,
  },
  text: {
    marginTop: 15,
    fontSize: 15,
    // fontFamily: 'open-sans-bold',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: "serif",
    color: "red",
    fontSize: 13,
  },
  picker: {
    height: 50,
    width: 200,
    // backgroundColor : "#f7f7f7",
  },
});
