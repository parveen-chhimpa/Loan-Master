import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Dashboard from '../components/Dashboard/Dashboard';
import MyDetails from '../sideBarScreens/MyDetails';
import NotificationScreen from '../sideBarScreens/NotificationScreen';
import Products from '../sideBarScreens/Products';
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
import LoginForm from '../components/Login/LoginForm';
import Demo from '../components/Dashboard/demo';

const Nav = createStackNavigator({
  Dashboard: Demo
});


const Navbar = createDrawerNavigator({
  Dashboard: Nav,
  MyDetails: MyDetails,
  Notification: NotificationScreen,
  Products: Products
},
  {
    contentOptions: {
      activeTintColor: Colors.primary
    },
    drawerWidth: Dimensions.get('window').width - 150,
  }
)

export default createAppContainer(Navbar);
