import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, ScrollView, TextInput, Picker, Alert, AsyncStorage } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import * as ImagePicker from 'expo-image-picker';

const LongCardForm = (props) => {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        const tryLogin = async () => {
            const user = await AsyncStorage.getItem('userData');
            const transformedData = JSON.parse(user);
            // console.log(transformedData);
            setUserData(transformedData);
        };
        tryLogin();
    }, []);
    // console.log(userData.userId);
    const [productType, setProductType] = useState("Home Loan");
    const [homeLoan, setHomeLoan] = useState("Constuction Loan");
    const [lapLoan, setLapLoan] = useState("Residential Property");
    const [typeSecured, setTypeSecured] = useState("Secured Loan");
    const [vehicleLoan, setVehicleLoan] = useState("Old Vehicle Loan");
    const [gender, setGender] = useState("Male");
    const [selectedProfile, setSelectedProfile] = useState("Business man");
    // const [selectedITR, setSelectedITR] = useState("1");
    const [ItrPaid, setItrPaid] = useState("NOT Paid");
    const [ItrAmount, setItrAmount] = useState(null);
    const [audit, setAudit] = useState("No");
    const [auditAmount, setAuditAmount] = useState(null);
    const [rentalAmount, setRentalAmount] = useState(null);
    const [rental, setRental] = useState("No");
    const [salaried, setSalaried] = useState("a/c by Cheque");
    const [accountType, setAccountType] = useState("Savings Account");
    const [name, setName] = useState(null);
    const [fatherName, setFatherName] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [district, setDistrict] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [monthlySalary, setMonthlySalary] = useState(null);
    const [monthlyIncome, setMonthlyIncome] = useState(null);
    const [fMonthlySalary, setFMonthlySalary] = useState(null);
    const [mobileNo, setMobileNo] = useState(null);
    const [wMobileNo, setWMobileNo] = useState(null);
    const [loanAmountR, setLoanAmountR] = useState(null);
    const [coAppName, setCoAppName] = useState(null);
    const [coMobileNo, setCoMobileNo] = useState(null);
    const [coRelation, setCoRelation] = useState("Mother");
    const [email, setEmail] = useState("");


    const submitHandler = () => {
        if (name
            && fatherName && address && city && district && state && country &&
            pincode && monthlyIncome && fMonthlySalary && mobileNo.length === 10
            && loanAmountR && coAppName && coMobileNo.length === 10 && coRelation && gender
        ) {

            if (productType === 'Home Loan') {
                sendPostRequest(homeLoan);
                console.log("1");
            }
            else if (productType === 'Lap Loan') {
                sendPostRequest(lapLoan);
                console.log("2");
            }
            else if (productType === 'Business Loan') {
                sendPostRequest(typeSecured);
                console.log("31");
            }
            else if (productType === "School Loan") {
                sendPostRequest(typeSecured);
                console.log("32");
            }
            else if (productType === 'Education Loan') {
                sendPostRequest(typeSecured);
                console.log("33");
            }
            else if (productType === 'Doctor Loan') {
                sendPostRequest(typeSecured);
                console.log("34");
            }
            else if (productType === 'Vehicle Loan') {
                sendPostRequest(vehicleLoan);
                console.log("4");
            }
            else {
                sendPostRequest('');
                console.log("5");
            }

            // sendPostRequest(typeProduct);
            // console.log(name + " " + typeProduct)
            props.navigation.navigate('UploadDocuments');
        }
        else {
            Alert.alert("Please fill all the required feilds correctly")
        }
    }
    async function sendPostRequest(productTypevalue) {
        // console.log("post request");
        // var date = new Date().getDate();
        // var month = new Date().getMonth() + 1;
        // var year = new Date().getFullYear();
        // let dateOfCreation = date + "/" + month + "/" + year;

        // const data = {
        //         altphone: wMobileNo,
        //         city: city,
        //         distt: district,
        //         email: email,
        //         loanamt: loanAmountR,
        //         name: name,
        //         phone: mobileNo,
        //         producttype: productType,
        //         regid: userData.userMobileNumber,
        //         sex: gender,
        //         status: "In Progress",
        //         subproducttype: productTypevalue,
        //         fathername: fatherName,
        //         fulladdr: address,
        //         pin: pincode,
        //         state: state,
        //         country: country,
        //         profile: selectedProfile,
        //     salaryamt: monthlySalary,
        //     salarymode: salaried,
        //         itr: ItrPaid,
        //     itramount: ItrAmount,
        //         audit: audit,
        //     auditamt: auditAmount,
        //         bank: accountType,
        //         monthlyincome: monthlyIncome,
        //         familyincome: fMonthlySalary,
        //         rental: rental,
        //     rentalincome: rentalAmount,
        //         coappname: coAppName,
        //         coappnum: coMobileNo,
        //         corelation: coRelation,
        //     password: mobileNo,
        // }
        // console.log(data);
        try {
            // const response = await fetch(`https://my-client-project-273516.firebaseio.com/addNewApplication/${userData.userId}.json`, {
            const response = await fetch(`http://www.easyloansco.com/connect/items/createcustfullapp.php`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // name,
                    // fatherName,
                    // address,
                    // city,
                    // district,
                    // state,
                    // country,
                    // pincode,
                    // selectedProfile,
                    // ItrPaid,
                    // ItrAmount,
                    // audit,
                    // auditAmount,
                    // accountType,
                    // monthlyIncome,
                    // monthlySalary,
                    // fMonthlySalary,
                    // rental,
                    // rentalAmount,
                    // mobileNo,
                    // wMobileNo,
                    // loanAmountR,
                    // productType,
                    // productTypevalue,
                    // coAppName,
                    // coMobileNo,
                    // coRelation,
                    // dateOfCreation,
                    // gender,
                    altphone: wMobileNo,
                    city: city,
                    distt: district,
                    email: email,
                    loanamt: loanAmountR,
                    name: name,
                    phone: mobileNo,
                    producttype: productType,
                    regid: userData.userMobileNumber,
                    sex: gender,
                    status: "In Progress",
                    subproducttype: productTypevalue,
                    fathername: fatherName,
                    fulladdr: address,
                    pin: pincode,
                    state: state,
                    country: country,
                    profile: selectedProfile,
                    salaryamt: monthlySalary,
                    salarymode: salaried,
                    itr: ItrPaid,
                    itramount: ItrAmount,
                    audit: audit,
                    auditamt: auditAmount,
                    bank: accountType,
                    monthlyincome: monthlyIncome,
                    familyincome: fMonthlySalary,
                    rental: rental,
                    rentalincome: rentalAmount,
                    coappname: coAppName,
                    coappnum: coMobileNo,
                    corelation: coRelation,
                    createdin: 'Fair Deal',
                    
                })
            });
            const resData = await response.json();
            console.log(resData);
            Alert.alert("Your Application is Submitted Successfuly");
        }
        catch (err) {
            alert("Something Wrong happened!"+err);
            console.log(err);
        }
    }


    return (
        <ScrollView style={styles.container}>
            <StatusBar
                barStyle='light-content'
            />
            <View>
                {/* <ScrollView > */}
                <View style={styles.field}>
                    <Text style={styles.text}>NAME<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setName(text.nativeEvent.text)}
                        autoCapitalize='words'
                        placeholder="Clients's Full Name*"
                    />
                    {/* { name==='' ?<View style={styles.errorContainer}>
                        <Text style={styles.errorText}>Please fill this </Text>
                    </View>:<Text>hii</Text>} */}
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>FATHER NAME<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        // onInputChange={textChangeHandler}
                        onEndEditing={text => setFatherName(text.nativeEvent.text)}
                        placeholder="Clients's Father Name"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>GENDER<Text style={styles.errorText}> *</Text></Text>
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
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>FULL ADDRESS<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setAddress(text.nativeEvent.text)}
                        placeholder="Enter Full Address"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>CITY<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setCity(text.nativeEvent.text)}
                        placeholder="Enter City"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>DISTRICT<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setDistrict(text.nativeEvent.text)}
                        placeholder="Enter District"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>STATE<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setState(text.nativeEvent.text)}
                        placeholder="Enter State"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>COUNTRY<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setCountry(text.nativeEvent.text)}
                        placeholder="Enter Country"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>PINCODE<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        keyboardType="numeric"
                        onEndEditing={text => setPincode(text.nativeEvent.text)}
                        maxLength={6}
                        placeholder="Enter Pincode"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>EMAIL</Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setEmail(text.nativeEvent.text)}
                        placeholder="Enter Email"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>SELECT PROFILE<Text style={styles.errorText}> *</Text></Text>
                    <Picker
                        selectedValue={selectedProfile}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedProfile(itemValue)}
                    >
                        <Picker.Item label="Business man" value="Business man" />
                        <Picker.Item label="Salaried" value="Salaried" />
                        <Picker.Item label="Self employed" value="Self employed" />
                        <Picker.Item label="Professional" value="Professional" />
                        <Picker.Item label="Freelancer" value="Freelancer" />
                    </Picker>
                    {selectedProfile === "Salaried" ?
                        <View>
                            <Text style={styles.text}>Salarierd how by</Text>
                            <Picker
                                selectedValue={salaried}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSalaried(itemValue)}
                            >
                                <Picker.Item label="a/c by Cheque" value="a/c by Cheque" />
                                <Picker.Item label="a/c by Online" value="a/c by Online" />
                                <Picker.Item label="Cash" value="Cash" />
                            </Picker>

                            {/* <View style={styles.field}> */}
                            <Text style={styles.text}>Monthy Salary Income<Text style={styles.errorText}> *</Text></Text>
                            <TextInput
                                style={styles.input}
                                returnKeyType="next"
                                keyboardType="numeric"
                                // onEndEditing={text => setPincode(text.nativeEvent.text)}
                                onEndEditing={text => setMonthlySalary(text.nativeEvent.text)}
                                maxLength={8}
                                placeholder="₹ 50000"

                            />
                        </View>
                        : null
                    }
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>ITR<Text style={styles.errorText}> *</Text></Text>
                    <Picker
                        selectedValue={ItrPaid}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setItrPaid(itemValue)}
                    >
                        <Picker.Item label="Not Paid" value="Not Paid" />
                        <Picker.Item label="Paid" value="Paid" />
                    </Picker>
                    {ItrPaid === "Paid" ?
                        (
                            <View>
                                <Text style={styles.text}>If paid how many:</Text>
                                <TextInput
                                    style={styles.input}
                                    returnKeyType="next"
                                    keyboardType="numeric"
                                    onEndEditing={text => setItrAmount(text.nativeEvent.text)}
                                    maxLength={8}
                                />
                            </View>
                        )
                        : null
                    }
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>AUDIT<Text style={styles.errorText}> *</Text></Text>
                    <Picker
                        selectedValue={audit}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setAudit(itemValue)}
                    >
                        <Picker.Item label="Yes" value="Yes" />
                        <Picker.Item label="No" value="No" />
                    </Picker>
                    {audit === 'Yes' ?
                        <View>
                            <Text style={styles.text}>If yes last year sale :</Text>
                            <TextInput
                                style={styles.input}
                                returnKeyType="next"
                                keyboardType="numeric"
                                onEndEditing={text => setAuditAmount(text.nativeEvent.text)}
                                maxLength={8}
                            />
                        </View>
                        : null
                    }
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>BANK ACCOUNT TYPE<Text style={styles.errorText}> *</Text></Text>
                    <Picker
                        selectedValue={accountType}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setAccountType(itemValue)}
                    >
                        <Picker.Item label="Savings Account" value="Savings Account" />
                        <Picker.Item label="Current Account" value="Current Account" />
                        <Picker.Item label="Limit Account" value="Limit Account" />
                    </Picker>
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}> MONTHLY INCOME<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        keyboardType="numeric"
                        onEndEditing={text => setMonthlyIncome(text.nativeEvent.text)}
                        maxLength={8}
                        placeholder="₹ 50000"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>FAMILY MONTHLY INCOME<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        keyboardType="numeric"
                        onEndEditing={text => setFMonthlySalary(text.nativeEvent.text)}
                        maxLength={8}
                        placeholder="₹ 50000"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>RENTAL INCOME<Text style={styles.errorText}> *</Text></Text>
                    <Picker
                        selectedValue={rental}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => setRental(itemValue)}
                    >
                        <Picker.Item label="Yes" value="Yes" />
                        <Picker.Item label="No" value="No" />
                    </Picker>
                    {rental === "Yes" ?
                        <View>
                            <Text style={styles.text}>If yes how much :</Text>
                            <TextInput
                                style={styles.input}
                                returnKeyType="next"
                                keyboardType="numeric"
                                onEndEditing={text => setRentalAmount(text.nativeEvent.text)}
                                maxLength={8}
                            />
                        </View>
                        : null
                    }
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>PRODUCT TYPE<Text style={styles.errorText}> *</Text></Text>
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
                        <Picker.Item label="Machinery Loan" value="Machinery Loan" />
                        <Picker.Item label="Doctor Loan" value="Doctor Loan" />
                        {/* <Picker.Item label="Docter loan (Unsecured)" value="16" /> */}
                        <Picker.Item label="School Loan" value="School Loan" />
                        {/* <Picker.Item label="School loan (Unsecured)" value="18" /> */}
                        <Picker.Item label="Flexi Loan" value="Flexi Loan" />
                        <Picker.Item label="Gold Loan" value="Gold Loan" />
                        {/* <Picker.Item label="Credit Card" value="Credit Card" /> */}
                    </Picker>
                    {productType === 'Home Loan' ?
                        <View>
                            <Picker
                                selectedValue={homeLoan}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) => setHomeLoan(itemValue)}
                            >
                                <Picker.Item label="Constuction Loan" value="Constuction Loan" />
                                <Picker.Item label="Refinance Loan" value="Refinance Loan" />
                                <Picker.Item label="Purchase Loan" value="Purchase Loan" />
                                <Picker.Item label="Plot + Construction Loan" value="Plot + Construction Loan" />
                            </Picker>
                        </View>
                        : null
                    }
                    {productType === 'Lap Loan' ?
                        <View>
                            <Picker
                                selectedValue={lapLoan}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) => setLapLoan(itemValue)}
                            >
                                <Picker.Item label="Residential Property" value="Residential Property" />
                                <Picker.Item label="Commercial Property" value="Commercial Property" />
                                <Picker.Item label="Industrial Property" value="Industrial Property" />
                                <Picker.Item label="Plain Plot" value="Plain Plot" />
                            </Picker>
                        </View>
                        : null
                    }
                    {productType === "School Loan" ?
                        <View>
                            <Picker
                                selectedValue={typeSecured}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) => setTypeSecured(itemValue)}
                            >
                                <Picker.Item label="Secured Loan" value="Secured Loan" />
                                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
                            </Picker>
                        </View>
                        : null
                    }
                    {productType === 'Business Loan' ?
                        <View>
                            <Picker
                                selectedValue={typeSecured}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) => setTypeSecured(itemValue)}
                            >
                                <Picker.Item label="Secured Loan" value="Secured Loan" />
                                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
                            </Picker>
                        </View>
                        : null
                    }
                    {productType === "Education Loan" ?
                        <View>
                            <Picker
                                selectedValue={typeSecured}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) => setTypeSecured(itemValue)}
                            >
                                <Picker.Item label="Secured Loan" value="Secured Loan" />
                                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
                            </Picker>
                        </View>
                        : null
                    }
                    {productType === "Doctor Loan" ?
                        <View>
                            <Picker
                                selectedValue={typeSecured}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) => setTypeSecured(itemValue)}
                            >
                                <Picker.Item label="Secured Loan" value="Secured Loan" />
                                <Picker.Item label="Unsecured Loan" value="Unsecured Loan" />
                            </Picker>
                        </View>
                        : null
                    }
                    {productType === 'Vehicle Loan' ?
                        <View>
                            <Picker
                                selectedValue={vehicleLoan}
                                style={{ height: 50, width: 200 }}
                                onValueChange={(itemValue, itemIndex) => setVehicleLoan(itemValue)}
                            >
                                <Picker.Item label="Old Vehicle Loan" value="Old Vehicle Loan" />
                                <Picker.Item label="New Vehicle Loan" value="New Vehicle Loan" />
                                <Picker.Item label="Commercial Vehicle" value="Commercial Vehicle" />
                            </Picker>
                        </View>
                        : null
                    }
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>MOBILE NUMBER<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        keyboardType="numeric"
                        onEndEditing={text => setMobileNo(text.nativeEvent.text)}
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
                        onEndEditing={text => setWMobileNo(text.nativeEvent.text)}
                        maxLength={10}
                        placeholder="9876543210"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>LOAN AMOUNT REQUIRED<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        keyboardType="numeric"
                        onEndEditing={text => setLoanAmountR(text.nativeEvent.text)}
                        maxLength={10}
                        placeholder="₹ 1000000"
                    />
                </View>
                {/* <View style={styles.field}>
                    <Text style={styles.text}>UPLOAD REQUIRED DOCUMENTS<Text style={styles.errorText}> *</Text></Text>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('UploadDocuments') }} style={styles.UploadBt}>
                        <Text style={{ color: 'white' }}>Click To Upload</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.field}>
                    <Text style={styles.text}>CO-APPLICANT NAME<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        onEndEditing={text => setCoAppName(text.nativeEvent.text)}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>CO-APPLICANT CONTACT NUMBER<Text style={styles.errorText}> *</Text></Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        keyboardType="numeric"
                        onEndEditing={text => setCoMobileNo(text.nativeEvent.text)}
                        maxLength={10}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>RELATION WITH CO APPLICATION<Text style={styles.errorText}> *</Text></Text>
                    <Picker
                        selectedValue={coRelation}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setCoRelation(itemValue)}
                    >
                        <Picker.Item label="Mother" value="Mother" />
                        <Picker.Item label="Father" value="Father" />
                        <Picker.Item label="Spouse" value="Spouse" />
                        <Picker.Item label="Real Brother" value="Real Brother" />
                        <Picker.Item label="Business Partner" value="Business Partner" />
                    </Picker>
                </View>
                {/* <View style={styles.field}>
                    <Text style={styles.text}>SEND REQUIRED DOCUMENTS
                    </Text>
                    <Text>To this mail </Text>
                    <Text>(care@Easyloansco.com)</Text>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('CoApplicantDocument') }} style={styles.UploadBt}>
                        <Text style={{ color: 'white' }}>Click To Upload</Text>
                    </TouchableOpacity>
                </View> */}
            </View>

            <TouchableOpacity
                style={styles.ButtonContainer}
                onPress={submitHandler}
            // () => { props.navigation.navigate('Dashboard') }}
            >
                <Text style={styles.ButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

LongCardForm.navigationOptions = navData => {
    return {
        // hearderTitle: ()=>'New Application',
        title: 'New Application',
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
    container: {
        flexDirection: "column",
        padding: 20,
        backgroundColor: '#F8F8FF',
        overflow: 'scroll'
    },
    ButtonContainer: {
        marginTop: 30,
        backgroundColor: 'darkorange',
        // height : 40
        paddingVertical: 15,
        marginBottom: 80,
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    text1: {
        fontSize: 50,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'serif',
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        // borderBottomWidth: 1,
        //white        // color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: .2,
        borderColor: 'lightgrey',
        marginTop: 5,
        elevation: 2,
        borderRadius: 5,
    },
    text: {
        // marginTop: 7,
        fontSize: 14,
        color: 'black'
    },
    UploadBt: {
        // borderBottomWidth : 1,
        backgroundColor: 'black',
        width: 150,
        padding: 3,
        marginTop: 10,

    },
    field: {
        // backgroundColor: "#f7f7f7",
        // padding: 5,
        margin: 10,
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'serif',
        color: 'red',
        fontSize: 13
    }
})
export default LongCardForm;
