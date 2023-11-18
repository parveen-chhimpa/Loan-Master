import React, { useEffect, useState } from "react";
import {
  Button,
  Platform,
  View,
  SafeAreaView,
  Text,
  TouchableNativeFeedback,
  Image,
  AsyncStorage,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerNavigatorItems,
} from "react-navigation-drawer";
// import Login from '../components/Login/Login';
// import Otp_Verify from '../components/Login/Otp_Verify';
import RegisterForm from "../components/Login/RegisterForm";
import Dashboard from "../components/Dashboard/Dashboard";
import ExistingLeads from "../components/Dashboard/ExistingLeads";
import ShortCardForm from "../components/Dashboard/ShortCardForm";
import ExLeadView from "../components/Dashboard/ExLeadView";
import ExistingApplication from "../components/Dashboard/ExistingApplication";
import ExAppView from "../components/Dashboard/ExAppView";
import Leaderboard from "../components/Dashboard/Leaderboard";
import Loader from "../components/Dashboard/Loader";
import WhatsAppShare from "../components/Dashboard/WhatsAppShare";
import DocView from "../components/Dashboard/DocView";
import LongCardForm from "../components/Dashboard/LongCardForm";
import UploadDoc from "../components/Dashboard/UploadDoc";
import CoApplicantUpload from "../components/Dashboard/CoApplicantUpload";
import FAQ from "../components/Dashboard/Sidebar/FAQ";
import CreateAgent from "../components/Dashboard/Sidebar/CreateAgent";
import Calculator from "../components/Dashboard/Sidebar/Calculator";
import Payout from "../components/Dashboard/Sidebar/Payout";
import VisitingCard from "../components/Dashboard/Sidebar/VisitingCard";
import Certificate from "../components/Dashboard/Sidebar/Certificate";
import Wallet from "../components/Dashboard/Sidebar/Wallet";
import EditProfile from "../components/Dashboard/Sidebar/EditProfile";
import Profile from "../components/Dashboard/Sidebar/Profile";
import TermC from "../components/Dashboard/Sidebar/TermC";
import ContactUs from "../components/Dashboard/Sidebar/ContactUs";
import Refer from "../components/Dashboard/Sidebar/Refer";
import PrivacyPolicy from "../components/Dashboard/Sidebar/PrivacyPolicy";
import Colors from "../constants/Colors";
import { Dimensions } from "react-native";
import LoginForm from "../components/Login/LoginForm";
// import { color } from 'react-native-reanimated';
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";
import StartUpScreen from "../components/Login/StartupScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "white" : "",
  },
  headerTitleStyle: {
    fontFamily: "serif",
  },
  // headerBackTitleStyle: {
  //     fontFamily: 'open-sans'
  // },
  headerTintColor: Platform.OS === "android" ? "black" : Colors.primary,
};

const LoginNav = createStackNavigator(
  {
    Login: LoginForm,
    Register: RegisterForm,
  }

  // {
  //     defaultNavigationOptions: {
  //         headerLayoutPreset: 'center'
  //     }
  // }
);

const LoginFormScreen = createStackNavigator(
  {
    // Login: LoginForm,
    // Verify: Otp_Verify,
    // Register: RegisterForm,
    Loader: Loader,
    Dashboard: Dashboard,
    EditProfile: EditProfile,
    Profile: Profile,
    FullApp: {
      screen: LongCardForm,
    },
    UploadDocuments: UploadDoc,
    CoApplicantDocument: CoApplicantUpload,
    ShortApp: ShortCardForm,
    LongCardForm: LongCardForm,
    ExistingLeads: ExistingLeads,
    ExLeadView: ExLeadView,
    ExistingApplication: ExistingApplication,
    ExAppView: ExAppView,
    Share: WhatsAppShare,
    Documents: DocView,
    Leaderboard: Leaderboard,
    // CreateAgent: CreateAgent,
  },
  {
    navigationOptions: {
      // drawerLabel: 'Edit Profile',
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const FAQScreen = createStackNavigator(
  {
    FAQ: FAQ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const TermCScreen = createStackNavigator(
  {
    TermC: TermC,
  },
  {
    navigationOptions: {
      drawerLabel: "Terms and Conditions",
      drawerIcon: ({ tintColor }) => (
        <Icon name="book" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const PrivacyPolicyScreen = createStackNavigator(
  {
    PrivacyPolicy: PrivacyPolicy,
  },
  {
    navigationOptions: {
      drawerLabel: "Privacy Policy",
      drawerIcon: ({ tintColor }) => (
        <Icon name="user-secret" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const ContactUsScreen = createStackNavigator(
  {
    ContactUs: ContactUs,
  },
  {
    navigationOptions: {
      drawerLabel: "Contact Us",
      drawerIcon: ({ tintColor }) => (
        <Icon name="address-book" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const ReferScreen = createStackNavigator(
  {
    Refer: Refer,
  },
  {
    navigationOptions: {
      drawerLabel: "Refer And Earn",
      drawerIcon: ({ tintColor }) => (
        <Icon name="share-square" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const CreateAgentScreen = createStackNavigator(
  {
    CreateAgent: CreateAgent,
  },
  {
    navigationOptions: {
      drawerLabel: "Create Agent",
      drawerIcon: ({ tintColor }) => (
        <Icon name="user-plus" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const VisitingCardScreen = createStackNavigator(
  {
    VisitingCard: VisitingCard,
  },
  {
    navigationOptions: {
      drawerLabel: "Visiting Card",
      drawerIcon: ({ tintColor }) => (
        <Icon name="id-card" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const CertificateScreen = createStackNavigator(
  {
    Certificate: Certificate,
  },
  {
    navigationOptions: {
      drawerLabel: "Certificate",
      drawerIcon: ({ tintColor }) => (
        <Icon name="certificate" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const PayoutScreen = createStackNavigator(
  {
    Payout: Payout,
  },
  {
    navigationOptions: {
      drawerLabel: "Payout Structure",
      drawerIcon: ({ tintColor }) => (
        <Icon name="percent" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const CalculatorScreen = createStackNavigator(
  {
    Calculator: Calculator,
  },
  {
    navigationOptions: {
      drawerLabel: "Calculate EMI",
      drawerIcon: ({ tintColor }) => (
        <Icon name="calculator" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

const WalletScreen = createStackNavigator(
  {
    Wallet: Wallet,
  },
  {
    navigationOptions: {
      drawerLabel: "Wallet",
      drawerIcon: ({ tintColor }) => (
        <Icon name="rupee" style={{ fontSize: 24, color: "black" }} />
      ),
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      },
    },
  }
);

// const EditProfileScreen = createStackNavigator({
//     EditProfile: EditProfile,
// },
//     {
//         navigationOptions: {
//             drawerLabel: 'Edit Profile',
//             drawerIcon: ({ tintColor }) => (
//                 <Icon name='home' style={{ fontSize: 24, color: 'blue' }} />
//             )
//         },
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: Platform.OS === 'android' ? "#1E90EF" : ''
//             },
//         }
//     }
// );

const Navbar = createDrawerNavigator(
  {
    // EditProfile : EditProfileScreen,
    Home: LoginFormScreen,
    // FAQ: FAQScreen,
    VisitingCard: VisitingCardScreen,
    Certificate: CertificateScreen,
    Payout: PayoutScreen,
    Wallet: WalletScreen,
    Calculator: CalculatorScreen,
    Refer: ReferScreen,
    CreateAgent: CreateAgentScreen,
    Terms: TermCScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
    ContactUs: ContactUsScreen,
  },
  {
    contentOptions: {
      activeTintColor: Colors.blue,
      lableStyle: {
        fontFamily: "arial",
      },
    },
    drawerWidth: Dimensions.get("window").width - 100,
    drawerBackgroundColor: "#FFFFFF",
    //   drawerType: 'slide',
    contentComponent: (props) => {
      recievedata();
      const dispatch = useDispatch();
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                width: "150%",
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity
                  // style={{ backgroundColor: 'red' }}
                  // title="Profile"
                  onPress={() => {
                    props.navigation.navigate("Profile");
                  }}
                >
                  {/* <Icon name='user-circle' style={{ fontSize: 80, alignItems: "center", margin: 10, }} /> */}
                  <Text style={{ fontFamily: "sans-serif", padding: 10 }}>
                    <Icon
                      name="user-circle"
                      style={{ fontSize: 60, alignItems: "center", margin: 10 }}
                    />
                  </Text>
                  {/* <Text>Profile</Text> */}
                </TouchableOpacity>
                {/* <Text>Profile</Text> */}
              </View>
              <View>
                <Text style={{ marginLeft: 15 }}>{name}</Text>
                <Text style={{ marginLeft: 15 }}>{mobile}</Text>
              </View>
            </View>
            <DrawerNavigatorItems {...props} />
            {/* <Button
                            title="Create Agent"
                            // color={"black"}
                            onPress={() => {
                                // dispatch(authActions.logout());
                                props.navigation.navigate('CreateAgent');
                            }}
                        /> */}
            {/* <View style={{ flex: 1, justifyContent:'center', }}> */}
            <Button
              title="Logout"
              color={"black"}
              onPress={() => {
                dispatch(authActions.logout());
                props.navigation.navigate("Welcome");
              }}
            />
            {/* </View> */}
            {/* <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', }}>
                            <Image
                                source={require('../images/dev.png')}
                                style={{
                                    height: 150, width: 150,
                                    bottom: -200,
                                }}
                            />
                        </View> */}
          </SafeAreaView>
        </View>
      );
    },
  }
);

let name = "";
let mobile = "";

const recievedata = () => {
  useEffect(() => {
    const tryLogin = async () => {
      const user = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(user);
      // console.log('kvhhvhj' + transformedData.userName);
      name = transformedData.userName;
      mobile = transformedData.userMobileNumber;
      // checkAgent(transformedData);
      // props.navigation.replace('Dashboard', { data: transformedData });
    };
    tryLogin();
  }, []);
};

const LoginScreen = createSwitchNavigator({
  Startup: StartUpScreen,
  Welcome: LoginNav,
  Dashboard: Navbar,
});

export default createAppContainer(LoginScreen);
