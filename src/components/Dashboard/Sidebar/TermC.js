import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  ScrollView,
  Linking,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";

const TermC = () => {
  return (
    <ScrollView>
      <Text style={Styles.text}>
        Easy Loan, or the website{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("https://easyloansco.com/")}
        >
          "www.easyloansco.com"
        </Text>
        (together called the "Company") is not a lender and does not provide
        loans on its own. Information carried at website is not and should not
        be construed as an offer or solicitation or invitation to borrow or
        lend. By submitting your query, you authorize Easy Loan to share your
        information with lender(s) and consent for such lender(s) to pull your
        credit information report and call/ message you regarding your query.
        The outcome of your query or application is solely a matter between you
        and the lender(s).
      </Text>
      <Text style={Styles.text}>
        The Company is, by no means, assuring as to the correctness of
        information, FAQ’s, graphics, images, text, and/ or various tools and
        calculators, including their result, displayed at this website or sent
        to the user by email or otherwise (together called “Information”). These
        are purely for indicative purposes and cannot be relied upon, either
        individually or together with any other information, by the user in any
        manner whatsoever.
      </Text>
      <Text style={Styles.text}>
        The Company is an independent service provider and is not related to the
        government or any regulator or any credit information bureau in any way;
        it does not have the ability to influence the outcome of a case or query
        or loan application in any manner.
      </Text>
      <Text style={Styles.text}>
        The Company is not guaranteeing or assuring a particular or favorable
        outcome. The Company is not providing any legal or accounting or tax
        advice. The Company shall have no liability whatsoever to the user for
        any direct, indirect or consequential losses, damages, costs, charges,
        expenses or otherwise, which the user or any third party may incur
        arising out of the use of the Information.
      </Text>
      <Text style={Styles.text}>
        Any personal information, documents and credit data and/or technical
        and/or business and/ or commercial and/ or financial data provided by
        the user can be used by the Company and its agents without any
        obligation to the user and be shared with any regulatory or statutory
        body on their request. The Company is not liable to delete any such
        information from its servers or records. The Company gives the option to
        opt-out from receiving emails or messages at any time. Once you choose
        to opt-out, you won't receive any further communication from Easy Loan.
      </Text>
    </ScrollView>
  );
};

TermC.navigationOptions = (navData) => {
  return {
    title: "Terms and Conditions",
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
    margin: 18,
    marginTop: 2,
    fontSize: 15,
    fontFamily: "serif",
    textAlign: "justify",
    lineHeight: 25,
    letterSpacing: 0.5,
  },
});
export default TermC;
