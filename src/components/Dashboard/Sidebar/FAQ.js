import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback ,ImageBackground} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';

const FAQ = () =>{
    return(
        <View>
            <Text>
                FAQs
            </Text>
        </View>
    )
};

FAQ.navigationOptions = navData => {
    return {
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>,
            
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#1E90EF' : '',
            height: 60
        },
        headerTitleStyle: {
            color: 'white',
            fontFamily: 'sans-serif',
            // fontSize: 10
        },
    }
};

export default FAQ;