



import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer, } from 'react-navigation';
import {HomeScreen} from './Screen/Home.screen';
import {ProfileScreen} from './Screen/Profile.screen';

import React from 'react';
import { Button} from 'react-native';


let screens = {
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
};

let defaultOptions = {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      //header: null
    }
}


const TopNav = createStackNavigator ( screens, defaultOptions);
const BottomNav = createMaterialBottomTabNavigator({TopNav});

const App = createAppContainer(BottomNav);
export default App;