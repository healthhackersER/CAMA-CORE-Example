


import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer } from 'react-navigation';
import {HomeScreen} from './Screens/Home.screen';
import {ProfileScreen} from './Screens/Profile.screen';
import { ModuleManagerScreen } from './Screens/ModuleManager.screen';
import { ModuleDashboardScreen } from './Screens/ModuleDashboard.screen';

let routes = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen},
  Modules: {screen: ModuleManagerScreen},
  ModuleDashboard: {screen: ModuleDashboardScreen}
};

const TabNavigatorOptions = {  
  initialRouteName: "Home",  
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