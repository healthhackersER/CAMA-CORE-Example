



import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer } from 'react-navigation';
import {HomeScreen} from './Screen/Home.screen';
import {ProfileScreen} from './Screen/Profile.screen';

import React from 'react';
import { View} from 'react-native';


/*
        barStyle: { backgroundColor: '#f69b31' },
        activeColor: '#f60c0d',  
        inactiveColor: '#f65a22',
*/
let screens = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen},
};

const TabNavigatorOptions = {  
  initialRouteName: "Home",  
  activeColor: 'white',  
  inactiveColor: 'lightgray', 
}
//const TopNav = createMaterialTopTabNavigator ( screens, defaultOptions);
const BottomNav = createMaterialBottomTabNavigator(screens, TabNavigatorOptions);

const App = createAppContainer(BottomNav);
export default App;