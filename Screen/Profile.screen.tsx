
import React from 'react';
import { View, Text} from 'react-native';
import {NavBar} from '../Component/Navbar.component'
import Icon from 'react-native-vector-icons/Ionicons';

interface ProfileScreenProps extends React.Props<any> {
    navigation: any
}

export class ProfileScreen extends React.Component<ProfileScreenProps, any> {
    static navigationOptions = {  
      title: 'Profile Screen',
      tabBarLabel:'Profile',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          </View>),
      barStyle: { backgroundColor: '#7933FF' }, 
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