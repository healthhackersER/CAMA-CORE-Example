


import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer } from 'react-navigation';
import {HomeScreen} from './Screens/Home.screen';
import {ProfileScreen} from './Screens/Profile.screen';
import { DatabaseScreen } from './Screens/Database.screen';

let routes = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen},
  Database: {screen: DatabaseScreen}
};

const TabNavigatorOptions = {  
  initialRouteName: "Database",  
  activeColor: 'white',  
  inactiveColor: 'lightgray',
  swipeEnabled: true,
  lazy: true,
  defaultNavigationOptions: {
    tabBarVisible: true
  }
}

const BottomNav = createMaterialBottomTabNavigator(routes, TabNavigatorOptions);

const App = createAppContainer(BottomNav);
export default App;