import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Linking,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
// import { color } from 'react-native-reanimated';

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <Text style={Styles.text}>
        Easy Loan. (here in after referred to as “www.easyloansco.com or we/ our
        and including
        <Text
          style={Styles.link}
          onPress={() => Linking.openURL("https://easyloansco.com/")}
        >
          “www.easyloansco.com"
        </Text>
        and Easy Loan mobile app”) understands the privacy and confidentiality
        of its customers who have shared their personal information with us.
        It’s our top most priority to keep the information secure and avoid
        misuse of customer’s personal details.
      </Text>
      <Text style={Styles.text}>
        Please find below the type of information we may collect from you and
        it’s usage for the services offered to you via our website and our
        business partners. This privacy policy is applicable to our current and
        existing and future customers. By visiting our website and registering
        with us, you agree to this privacy policy.
      </Text>
      <Text style={Styles.text}>
        By registering online at Easy Loans or using our mobile app, you allow
        Easy Loan and its business partners to get in touch with you via phone
        call, email or sms. The purpose of contacting you is to offer you our
        services for the product you have chosen, informing you about our new
        products, tell you about promotional offers running at easyloansco.com,
        or by its business partners and linked third parties. Under this policy,
        you authorize us to make contact with you for the above mentioned
        purposes even if your number is registered under DND/DNC/NCPR services.
        This authorization is valid until your account is deactivated by either
        you or us.
      </Text>
      <Text style={Styles.headText}>Personal Information</Text>
      <Text style={Styles.text}>
        Easy Loan collects personal information from its customers including
        first name, last name, email address, date of birth, your residence city
        and mobile number etc. Easy Loan can also extract information from third
        parties or public shared profiles which are public in your social
        accounts. The collected information is stored at Easy Loan only.
      </Text>
      <Text style={Styles.headText}>Purpose</Text>
      <Text style={Styles.text}>
        easyloansco.com collects information from you when you register online
        with us or need some information regarding our products and services,
        visit our website. After registering with us or sharing personal details
        with us, you authorize us to contact you via email, call or sms and send
        you promotional offers.
      </Text>
      <Text style={Styles.headText}>Information Disclosure and Sharing</Text>
      <Text style={Styles.text}>
        easyloansco.com does not sell/ rent or disclose your personal
        information with anyone as described in this policy. We may share your
        personal information with our business partners or with another entity
        in case of business merger or sale of easyloansco.com’s business part.
        We restrict the collection and use of your personal information. We may
        disclose your personal information in a non-personally identifiable
        manner that does not reveal your identity. easyloansco.com does not let
        anyone use your account information and any other personal identifiable
        information except some specific domestic procedures in order to manage,
        expand and improve our services. Third parties who have tie up with us
        can contact you and tell you about our services but with a limited
        access and they are required to maintain the confidentiality of the
        information as mentioned in the contract with us. We may share your
        personal information to the government agencies under the law in case of
        identity verification, investigation of cyber incidents, hearings and
        punishment of offences, or where disclosure of information is required
        for the legal purpose. We may also need to disclose the information to
        third parties under the law. easyloansco.com has various types of
        products like loans, credit cards offered by lenders and banks. If you
        apply for these products or services and disclose information to these
        providers then the use of your information is dependent on their privacy
        policies for which easyloansco.com is not responsible.
      </Text>
      <Text style={Styles.headText}>Tracking via Cookies</Text>
      <Text style={Styles.text}>
        easyloansco.com and its partners use cookies to analyze trends, manage
        the website, improve marketing, track user’s preferences around the
        website and collect demographic figures for overall use. You can control
        the use of cookies at an individual browser stage by disabling these
        cookies that may restrict your use of certain features or services on
        our website.
      </Text>
      <Text style={Styles.headText}>Log Files</Text>
      <Text style={Styles.text}>
        We use log files that include internet protocol (IP) address, internet
        service provider (ISP), browser type, exit or referred pages, date/time
        stamp, operating system to analyze trends and user’s movements while
        visiting the website. This information is combined with the other
        information we collect about you to improve our services, site
        functionality and marketing.
      </Text>
      <Text style={Styles.headText}>Email – Opt Out</Text>
      <Text style={Styles.text}>
        If you don’t want us to send you emails or other promotion information,
        write us at info@easyloansco.com. It may take some time to process the
        request but once you are unsubscribed by us, you won’t receive emails or
        any other information from us.
      </Text>
      <Text style={Styles.headText}>Security</Text>
      <Text style={Styles.text}>
        easyloansco.com use suitable technical and electronic measures to
        protect the personal information being submitted to us. In today’s time,
        we cannot guarantee complete security as no electronic system is 100%
        secure but we still use multiple security measures to protect illegal
        use, damage or loss of any kind of information. You must also maintain
        the confidentiality and security of your login id and password and may
        not share these credentials with any third party.
      </Text>
      <Text style={Styles.headText}>Connection to Other Websites</Text>
      <Text style={Styles.text}>
        easyloansco.com provides links to other websites. The privacy of the
        information provided to other websites is not our liability.
        easyloansco.com is not responsible for any loss of personal information
        through other sources. We can only suggest you to read their privacy
        policies when you visit their websites.
      </Text>
      <Text style={Styles.headText}>Third Party Advertising</Text>
      <Text style={Styles.text}>
        easyloansco.com uses ad agencies or third party advertising companies to
        provide ads when you are using our website. These companies do not use
        your personal information except the details about your visit to our
        website so as to offer ads on our websites as well as on other websites
        about the services that you may like.
      </Text>
      <Text style={Styles.headText}>
        Contact Us with Questions or Concerns or For Grievance Redressal
      </Text>
      <Text style={Styles.text}>
        If you have grievance or complaint, questions, comments, concerns or
        feedback in relation to the processing of information or regarding this
        Privacy and Security Policy or any other privacy or security concern,
        send an e-mail to contactus@easyloansco.com. The name and contact
        details of the Grievance Officer is Mr. Mohit Bansal, EasyLoan, Patiala
        Road Near Harihar Honda Agency above Advento Gym, Sunam, Distt
        Sangrur(IND)
      </Text>
      <Text style={Styles.text1}>Notice</Text>
      <Text style={Styles.text1}>
        The effective date of this Policy, as stated below, indicates the last
        time this Policy was revised or materially changed.
      </Text>
      <Text style={Styles.text1}>Effective Date</Text>
      <Text style={(Styles.text1, { marginBottom: 30, marginLeft: 20 })}>
        August 21, 2021
      </Text>
    </ScrollView>
  );
};

PrivacyPolicy.navigationOptions = (navData) => {
  return {
    title: "Privacy Policy",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#1E90EF" : "",
      height: 60,
    },
    headerTitleStyle: {
      color: "white",
      fontFamily: "sans-serif",
      // fontSize: 10
    },
  };
};
const Styles = StyleSheet.create({
  text: {
    marginLeft: 20,
    fontSize: 15,
    fontFamily: "serif",
    textAlign: "justify",
    marginRight: 20,
    marginTop: 10,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  text1: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    fontSize: 15,
    fontFamily: "serif",
    textAlign: "justify",
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  headText: {
    marginLeft: 20,
    marginRight: 10,
    fontSize: 20,
    fontFamily: "serif",
    color: "#4169E1",
    lineHeight: 25,
    letterSpacing: 0.5,
    marginTop: 5,
  },
  link: {
    color: "#4169E1",
  },
});
export default PrivacyPolicy;
