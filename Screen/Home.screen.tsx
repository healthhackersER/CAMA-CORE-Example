
import React from 'react';
import { View, Text} from 'react-native';
import {NavBar} from '../Component/Navbar.component'
import Icon from 'react-native-vector-icons/Ionicons';

interface HomeScreenProps extends React.Props<any> {
    navigation: any
}

export class HomeScreen extends React.Component<HomeScreenProps, any> {
    static navigationOptions = {
      title: 'Home Screen',
      tabBarLabel:'Home',  
      tabBarIcon: ({ tintColor }) => (  
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),
      barStyle: { backgroundColor: '#4600EE' }, 
    };
    render() {
      const navigation = this.props.navigation;
      return (
        <View>
          <NavBar navigation={navigation}/>
          <Text>This is the {navigation.state.routeName} screen</Text>
        </View>
      );
    }
  }