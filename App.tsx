


import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer } from 'react-navigation';
import {HomeScreen} from './Screens/Home.screen';
import {ProfileScreen} from './Profile/Profile.screen';
import {DatabaseScreen} from './Screens/Database.screen';
import {ModuleScreen} from './Screens/Module.screen';


let routes = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen},
  Modules: {screen: ModuleScreen},
  Database: {screen: DatabaseScreen}
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