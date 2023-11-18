import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';
// import LoginNav from './src/navigation/LoginNav';
// import { enableScreens } from 'react-native-screens';
import authReducer from './store/reducers/auth';
import NavigationContainer from './src/navigation/NavigationContainer';
// import {registerRootComponent} from 'expo';
// enableScreens();

const rootReducer = combineReducers({
  auth: authReducer
});
const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>

    //  </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// registerRootComponent(NavigationContainer);
// dbrules
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }