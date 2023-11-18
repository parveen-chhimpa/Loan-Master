import { AsyncStorage } from "react-native";

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export const authenticate = (name, mobile) => {
  return { type: AUTHENTICATE, name: name, mobile: mobile };
};

export const signup = (
  email,
  password,
  name,
  fname,
  city,
  pin,
  mobileNo,
  altmob,
  addr,
  // distt,
  // state,
  // salaryamt,
  // bankname,
  // bankacno,
  // ifsc,
  // acholder,
  regid,
  profession,
  gender,
  // actype,
  dob
) => {
  return async (dispatch) => {
    // const response = await fetch(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArINPw5-o_a75yKfMiEMtv6gw2dWuuwMs',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       returnSecureToken: true
    //     })
    //   }
    // );

    // if (!response.ok) {
    //   const errorResData = await response.json();
    //   const errorId = errorResData.error.message;
    //   let message = 'Something went wrong!';
    //   if (errorId === 'EMAIL_EXISTS') {
    //     message = 'This email exists already!';
    //   }
    //   throw new Error(message);
    // }

    // const resData = await response.json();
    // console.log(resData);

    try {
      // var date = new Date().getDate();
      // var month = new Date().getMonth() + 1;
      // var year = new Date().getFullYear();
      // let dateOfCreation = date + "/" + month + "/" + year;
      const r = regid === "" ? "self" : regid;
      // const data = {
      //   name: name,
      //   fname: fname,
      //   city: city,
      //   pin: pin,
      //   mobile: mobileNo,
      //   altmob: altmob,
      //   addr: addr,
      // distt: distt,
      // state: state,
      // salaryamt: salaryamt,
      // bankname: bankname,
      // bankacno: bankacno,
      // ifsc: ifsc,
      // acholder: acholder,
      // regemp: regid,
      // profession: profession,
      // sex: gender,
      // actype: actype,
      // email: email,
      // password: password,
      // dob: dob,
      // role: 'Partner',
      // createdin: 'Fair Deal',
      // regby: r,
      // role: 'Partner',
      // createdin: 'Fair Deal'
      // };
      // console.log(data);
      // const register = await fetch(`https://my-client-project-273516.firebaseio.com/registrations/${resData.localId}.json`, {
      const register = await fetch(
        `http://www.easyloansco.com/connect/items/createagent.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            fname: fname,
            city: city,
            pin: pin,
            phone: mobileNo,
            altphone: altmob,
            address: addr,
            // distt: distt,
            // state: state,
            // salaryamt: salaryamt,
            // bankname: bankname,
            // bankacno: bankacno,
            // ifsc: ifsc,
            // acholder: acholder,
            // regemp: regid,
            profession: profession,
            gender: gender,
            // actype: actype,
            email: email,
            password: password,
            dob: dob,
            // role: 'Partner',
            // createdin: 'Fair Deal',
            regby: r,
          }),
        }
      );
      const regData = await register.json();
      console.log(regData.message);
      if (regData.message === "Unable to create item. Data is incomplete.") {
        throw new Error(
          "Sorry, your data is incomplete. Please Check you details again."
        );
      }
      if (regData.message === "Unable to create item.") {
        throw new Error(
          "Sorry, You registration was Unsuccessful. Please check your Mobile number or contact us via Email- contactus@fairdealus.com"
        );
      }
      if (regData.message === "User Already Exits.") {
        throw new Error("User Already Exits, Please check again.");
      }
    } catch (err) {
      // console.log(resData);
      alert("Something Wrong happened!" + err);
      throw new Error(err);
    }

    // dispatch(authenticate(name, mobileNo));
  };
};

export const login = (email, password) => {
  console.log(email + password);
  return async (dispatch) => {
    // const response = await fetch(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArINPw5-o_a75yKfMiEMtv6gw2dWuuwMs',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       returnSecureToken: true
    //     })
    //   }
    // );
    const response = await fetch(
      `http://www.easyloansco.com/connect/items/custlogin.php?email=${email}&password=${password}`
      // {
      //   method: 'Get',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     email: email,
      //     password: password,
      //     returnSecureToken: true
      //   })
      // }
    );

    // if (!response.ok) {
    //   const errorResData = await response.json();
    //   const errorId = errorResData.error.message;
    //   let message = 'Something went wrong!';
    //   if (errorId === 'EMAIL_NOT_FOUND') {
    //     message = 'This email could not be found!';
    //   } else if (errorId === 'INVALID_PASSWORD') {
    //     message = 'This password is not valid!';
    //   }
    //   throw new Error(message);
    // }

    const resData = await response.json();
    // console.log(resData.agent[0].mobile);
    // let name = "";
    // let mobileNo = "";
    // try {
    //   const register = await fetch(`https://my-client-project-273516.firebaseio.com/registrations/${resData.localId}.json`)
    //   const regData = await register.json();
    //   console.log(regData);
    //   for (const key in regData) {
    //     name = regData[key].name;
    //     mobileNo = regData[key].mobile;
    //     // console.log(key);
    //   }
    //   // console.log("naame"+name);
    // }
    console.log(resData);
    // catch (err) {
    //   // alert(err);
    //   throw new Error("Something Wrong happened!");
    // }

    dispatch(authenticate(resData.partner[0].name, resData.partner[0].mobile));
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(resData.expiresIn) * 1000
    // );
    saveDataToStorage(
      resData.partner[0].name,
      resData.partner[0].phone,
      resData.partner[0].email,
      resData.partner[0].partner_type,
      resData.partner[0].partner_code
    );
  };
};

export const logout = () => {
  // clearLogoutTimer();
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};

const saveDataToStorage = (
  name,
  mobileNo,
  email,
  partner_type,
  partner_code
) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      // expiryDate: expirationDate.toISOString(),
      userName: name,
      userMobileNumber: mobileNo,
      id: email,
      partnerType: partner_type,
      partnerCode: partner_code,
    })
  );
};
